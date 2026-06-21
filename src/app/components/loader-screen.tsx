import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import videoSrc from "@/imports/202606212352.mp4";
import imgDone from "@/imports/StateScreen/a48e6105bb1077c0214fa6b0ebcab5b237175dd2.png";
import { Confetti } from "./confetti";

const PHRASES = [
  "Проверяем реквизиты",
  "Шифруем данные карты",
  "Стучимся в Mir Pay",
  "Настраиваем бесконтактную оплату",
  "Ещё чуть-чуть\nи всё заработает",
];

// playing → transforming (1s choreography) → done
type Phase = "playing" | "transforming" | "done";

interface LoaderScreenProps {
  onBack: () => void;
}

// distance the animated text sits from the bottom of the screen
const TEXT_BOTTOM = 32;
// reserve under the video so the illustration centre leaves room for the text below
const MEDIA_BOTTOM = 200;
// horizontal crop of the video container
const SIDE_CROP = 40;

export function LoaderScreen({ onBack }: LoaderScreenProps) {
  const [current, setCurrent] = useState(0);
  const [phraseOut, setPhraseOut] = useState(false);
  const [phase, setPhase] = useState<Phase>("playing");
  // measured vertical travel for the text (negative = upward)
  const [riseY, setRiseY] = useState(0);
  const [riseActive, setRiseActive] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const fallbackRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const checkRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const phaseRef = useRef<Phase>("playing");
  phaseRef.current = phase;

  // Phrase cycling — runs only while "playing" (no loop afterwards)
  useEffect(() => {
    if (phase !== "playing") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setPhraseOut(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % PHRASES.length);
        setPhraseOut(false);
      }, 350);
    }, 2500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  const triggerTransform = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    // 1) stop the video
    const v = videoRef.current;
    if (v) { try { v.pause(); } catch { /* ignore */ } }
    // 2) stop the text loop
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (fallbackRef.current) clearTimeout(fallbackRef.current);
    // 3) run the 1-second transformation, then settle into the final state
    setPhase("transforming");
    setTimeout(() => setPhase("done"), 1000);
  }, []);

  // Once transforming, measure how far the text must rise to sit just under the
  // illustration, then kick off the animation on the next frame so it transitions.
  useLayoutEffect(() => {
    if (phase !== "transforming") return;
    const ck = checkRef.current;
    const tx = textRef.current;
    if (!ck || !tx) return;
    const ckBottom = ck.getBoundingClientRect().bottom;
    const txTop = tx.getBoundingClientRect().top;
    const delta = Math.min(0, ckBottom + 24 - txTop); // negative → upward
    setRiseY(delta);
    const id = requestAnimationFrame(() => setRiseActive(true));
    return () => cancelAnimationFrame(id);
  }, [phase]);

  // Fallback: if the video doesn't fire onEnded, trigger after its duration + buffer
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!isFinite(video.duration) || video.duration === 0) return;
    if (fallbackRef.current) clearTimeout(fallbackRef.current);
    fallbackRef.current = window.setTimeout(triggerTransform, video.duration * 1000 + 400);
  };

  useEffect(() => () => {
    if (fallbackRef.current) clearTimeout(fallbackRef.current);
  }, []);

  const transforming = phase === "transforming";
  const done = phase === "done";
  const morphing = transforming || done;

  return (
    <div className="fixed inset-0 z-50 bg-[#fbfbfb] overflow-hidden">
      <style>{`
        @keyframes loader-slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .loader-screen-enter { animation: loader-slide-in 300ms cubic-bezier(0.32, 0.72, 0, 1) forwards; }

        @keyframes phrase-out-anim {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-18px); }
        }
        @keyframes phrase-in-anim {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .phrase-out { animation: phrase-out-anim 350ms ease forwards; }
        .phrase-in  { animation: phrase-in-anim  350ms ease forwards; }

        /* The last phrase fades out as it morphs into the success title */
        @keyframes phrase-morph-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        .phrase-morph-out { animation: phrase-morph-out 350ms ease forwards; }

        /* VIDEO: first shrinks to scale 0.5, then fades opacity 100%→0%.
           Crosses 30% opacity at ~550ms — the cue for the checkmark. */
        @keyframes video-morph-out {
          0%   { transform: scale(1); opacity: 1; }
          40%  { transform: scale(0.5); opacity: 1; }
          55%  { transform: scale(0.5); opacity: 0.3; }
          75%  { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(0.5); opacity: 0; }
        }
        .video-morph-out { animation: video-morph-out 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }

        /* CHECKMARK: fades 0%→100%, starting when the video reaches 30% (~550ms). */
        @keyframes check-in {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        .check-in { animation: check-in 450ms ease 550ms both; }

        @keyframes btn-fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .btn-appear { animation: btn-fade-in 400ms ease forwards; opacity: 0; }
      `}</style>

      <div className="loader-screen-enter w-full h-full relative">

        {/* ── VIDEO (cropped 40px each side, centred in the upper area) ── */}
        {!done && (
          <div
            className={`absolute flex items-center justify-center overflow-hidden ${transforming ? "video-morph-out" : ""}`}
            style={{ top: 0, left: SIDE_CROP, right: SIDE_CROP, bottom: MEDIA_BOTTOM, transformOrigin: "center center" }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              playsInline
              onEnded={triggerTransform}
              onLoadedMetadata={handleLoadedMetadata}
              className="object-contain"
              style={{
                // Make the video 80px wider than the container (40px bleed each
                // side) so its baked-in black side-borders fall fully OUTSIDE the
                // overflow:hidden clip. It MUST be absolutely positioned: as a
                // flex child this `width: calc(100% + 80px)` was silently clamped
                // back to the container width, so the bleed did nothing and only
                // `transform: scale()` hid the borders — but transform-clipping
                // leaks ~1px, which is the thin dark line.
                // NB: <video> is a *replaced* element, so set only width+left and
                // height+top (never left+right / top+bottom together — those are
                // ignored and the element keeps its intrinsic size). left:-40 with
                // width = container+80 keeps it centred. No transform on the video,
                // so the clip is pixel-perfect; the shrink animation lives on the
                // parent container, so the video still scales down with it.
                position: "absolute",
                top: 0,
                left: -SIDE_CROP,
                // maxWidth:none is REQUIRED — Tailwind's preflight sets
                // `video { max-width: 100% }`, which otherwise clamps the width
                // below back to the container (360px) and kills the bleed.
                maxWidth: "none",
                width: "calc(100% + 80px)",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* ── CHECKMARK — shares the exact centre of the video, so the card
               visually transforms into the checkmark. ── */}
        {morphing && (
          <div
            className="absolute flex items-center justify-center pointer-events-none"
            style={{ top: 0, left: SIDE_CROP, right: SIDE_CROP, bottom: MEDIA_BOTTOM }}
          >
            <img
              ref={checkRef}
              src={imgDone}
              alt="Готово"
              className="w-[168px] h-[168px] object-contain check-in"
            />
          </div>
        )}

        {/* ── CONFETTI — bursts from around the checkmark, filling the top ── */}
        {morphing && <Confetti originYRatio={0.36} />}

        {/* ── TEXT: animated phrases sit 32px from the bottom; on transform the
               text morphs into the success copy and rides up to the illustration. ── */}
        <div
          ref={textRef}
          className="absolute left-0 right-0 flex justify-center px-8"
          style={{
            bottom: TEXT_BOTTOM,
            transform: `translateY(${riseActive ? riseY : 0}px)`,
            transition: "transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {!morphing ? (
            <p
              key={current}
              className={`font-['MTS_Wide:Medium',sans-serif] text-[20px] leading-[24px] text-[#1d2023] text-center whitespace-pre-line ${phraseOut ? "phrase-out" : "phrase-in"}`}
            >
              {PHRASES[current]}
            </p>
          ) : (
            <div className="relative flex justify-center w-[320px]">
              {/* success copy fades in in place, then rides up with the container */}
              <div
                className="flex flex-col items-center gap-2 w-full"
                style={{ opacity: riseActive ? 1 : 0, transition: "opacity 600ms ease" }}
              >
                <p className="font-['MTS_Wide:Medium',sans-serif] text-[20px] leading-[24px] text-[#1d2023] text-center whitespace-pre-line">
                  {"Теперь можно платить телефоном"}
                </p>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[17px] leading-[24px] text-[#626c77] text-center">
                  Добавили вашу карту в Mir Pay
                </p>
              </div>
              {/* the outgoing phrase, fading out over the title — the morph */}
              <p className="phrase-morph-out absolute top-0 left-0 right-0 font-['MTS_Wide:Medium',sans-serif] text-[20px] leading-[24px] text-[#1d2023] text-center whitespace-pre-line">
                {PHRASES[current]}
              </p>
            </div>
          )}
        </div>

        {/* ── BUTTON ── */}
        {done && (
          <div className="absolute left-0 right-0 bottom-0 px-5 pb-10 pt-4 btn-appear">
            <button
              className="w-full h-[52px] rounded-[16px] flex items-center justify-center active:opacity-85"
              style={{ background: "#FF0032" }}
              onClick={onBack}
            >
              <span className="font-['MTS_Wide:Bold',sans-serif] text-white text-[12px] leading-[16px] uppercase">
                Хорошо
              </span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
