import { useState, useRef } from "react";
import imgMirPayLogo from "@/imports/image-14.png";
import imgLenta from "@/imports/image-15.png";
import imgMtsPay from "@/imports/image-16.png";
import imgYuMoney from "@/imports/image-17.png";
import imgSber from "@/imports/image-24.png";
import imgScreen1 from "@/imports/image-18.png";
import imgScreen2 from "@/imports/image-19.png";
import imgScreen3 from "@/imports/image-20.png";
import { MirPayApp } from "./mir-pay-app";

const RELATED_APPS = [
  { name: "ЛЕНТА", sub: "доставка п...", img: imgLenta },
  { name: "МТС PAY", sub: "кошелёк", img: imgMtsPay },
  { name: "ЮMoney", sub: "кошелёк, к...", img: imgYuMoney },
  { name: "СберБанк", sub: "банк онлайн", img: imgSber },
];

const SCREENSHOTS = [imgScreen1, imgScreen2, imgScreen3];
const FEATURES = ["Выгодно", "Удобно", "Безопасно", "Быстро"];

type DownloadState = "idle" | "loading" | "done";

interface RuStorePageProps {
  onBack: () => void;
}

export function RuStorePage({ onBack }: RuStorePageProps) {
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");
  const [mirPayOpen, setMirPayOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleDownload = () => {
    if (downloadState !== "idle") return;
    setDownloadState("loading");
    timerRef.current = window.setTimeout(() => setDownloadState("done"), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden">
      <style>{`
        @keyframes rustore-slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .rustore-page-enter { animation: rustore-slide-in 300ms cubic-bezier(0.32, 0.72, 0, 1) forwards; }
        .rustore-scroll::-webkit-scrollbar { display: none; }
        @keyframes rustore-btn-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .rustore-btn-spinner { animation: rustore-btn-spin 0.85s linear infinite; }
      `}</style>

      <div className="rustore-page-enter flex flex-col h-full bg-white">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between px-4 pt-4 pb-0 bg-white shrink-0">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full active:bg-gray-100"
            onClick={onBack}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="#1d2023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full active:bg-gray-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#1d2023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full active:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="1.5" fill="#1d2023"/>
                <circle cx="12" cy="12" r="1.5" fill="#1d2023"/>
                <circle cx="12" cy="19" r="1.5" fill="#1d2023"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="rustore-scroll flex-1 overflow-y-auto">
          {/* App header */}
          <div className="px-4 pb-4">
            <div className="flex gap-4 items-center mb-4">
              <img
                src={imgMirPayLogo}
                alt="Mir Pay"
                className="w-[72px] h-[72px] rounded-[18px] object-cover shrink-0"
              />
              <div>
                <p className="font-['MTS_Compact:Medium',sans-serif] text-[22px] leading-[28px] text-[#1d2023]">Mir Pay</p>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[14px] leading-[20px] text-[#626c77]">АО «НСПК»</p>
                <span className="font-['MTS_Compact:Regular',sans-serif] text-[12px] text-[#0077ff] mt-1 block">Финансы</span>
              </div>
            </div>

            {/* Download button */}
            <button
              className="w-full h-[48px] rounded-[14px] flex items-center justify-center active:opacity-80"
              style={{ background: "#0077FF" }}
              onClick={downloadState === "idle" ? handleDownload : downloadState === "done" ? () => setMirPayOpen(true) : undefined}
            >
              {downloadState === "loading" ? (
                <div
                  className="rustore-btn-spinner w-[22px] h-[22px] rounded-full"
                  style={{ border: "2.5px solid rgba(255,255,255,0.3)", borderTopColor: "#fff" }}
                />
              ) : (
                <span className="font-['MTS_Compact:Medium',sans-serif] text-white text-[16px]">
                  {downloadState === "done" ? "Открыть" : "Скачать"}
                </span>
              )}
            </button>
          </div>

          <div className="h-[1px] bg-[#f2f3f7]" />

          {/* Related apps */}
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <p className="font-['MTS_Compact:Medium',sans-serif] text-[17px] text-[#1d2023]">Возможно, вам понравится</p>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#8d969f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="rustore-scroll flex gap-4 overflow-x-auto pb-2">
              {RELATED_APPS.map((app) => (
                <div key={app.name} className="flex flex-col items-center gap-[6px] shrink-0 w-[76px]">
                  {app.img ? (
                    <img
                      src={app.img}
                      alt={app.name}
                      className="w-[56px] h-[56px] rounded-[14px] object-cover"
                    />
                  ) : (
                    <div
                      className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center shrink-0"
                      style={{ background: app.color }}
                    >
                      <span className="text-white text-[22px] font-['MTS_Compact:Medium',sans-serif]">{app.letter}</span>
                    </div>
                  )}
                  <p className="font-['MTS_Compact:Medium',sans-serif] text-[12px] text-[#1d2023] text-center leading-[16px] w-full truncate">{app.name}</p>
                  <p className="font-['MTS_Compact:Regular',sans-serif] text-[11px] text-[#626c77] text-center leading-[14px] w-full truncate">{app.sub}</p>
                  <button
                    className="px-3 h-[26px] rounded-[8px] flex items-center justify-center"
                    style={{ background: "#E8F1FF" }}
                  >
                    <span className="font-['MTS_Compact:Medium',sans-serif] text-[12px] text-[#0077ff]">Скачать</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-[#f2f3f7]" />

          {/* Stats */}
          <div className="px-4 py-4">
            <div className="flex divide-x divide-[#f2f3f7]">
              <div className="flex-1 pr-3 flex flex-col gap-[2px]">
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB800">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-['MTS_Compact:Medium',sans-serif] text-[15px] text-[#1d2023]">3,6</span>
                </div>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[11px] text-[#626c77] leading-[14px]">70,5 тыс оценок</p>
              </div>
              <div className="flex-1 px-3 flex flex-col gap-[2px]">
                <span className="font-['MTS_Compact:Medium',sans-serif] text-[15px] text-[#1d2023]">20 млн+</span>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[11px] text-[#626c77] leading-[14px]">Скачиваний</p>
              </div>
              <div className="flex-1 px-3 flex flex-col gap-[2px]">
                <span className="font-['MTS_Compact:Medium',sans-serif] text-[15px] text-[#1d2023]">65.8 МБ</span>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[11px] text-[#626c77] leading-[14px]">Размер</p>
              </div>
              <div className="flex-1 pl-3 flex flex-col gap-[2px]">
                <span className="font-['MTS_Compact:Medium',sans-serif] text-[15px] text-[#1d2023]">0+</span>
                <p className="font-['MTS_Compact:Regular',sans-serif] text-[11px] text-[#626c77] leading-[14px]">Возраст</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#f2f3f7]" />

          {/* Screenshots horizontal scroll */}
          <div className="pt-4 pb-6 pl-4">
            <div className="rustore-scroll flex gap-3 overflow-x-auto pr-4">
              {SCREENSHOTS.map((src, i) => (
                <div key={i} className="shrink-0 w-[180px] h-[320px] rounded-[16px] overflow-hidden">
                  <img src={src} alt={`screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="shrink-0 border-t border-[#f2f3f7] bg-white">
          {[
            { label: "Интересное", path: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
            { label: "Приложения", active: true, path: "M4 6h4v4H4zM4 14h4v4H4zM14 4h4v4h-4zM14 14h4v4h-4z" },
            { label: "Игры", path: "M8 12h8M12 8v8M4.5 6A2.5 2.5 0 0 1 7 3.5h10A2.5 2.5 0 0 1 19.5 6v12a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 18V6z" },
            { label: "Кабинет", path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
            { label: "Моё", path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
          ].map((tab) => (
            <button key={tab.label} className="flex-1 inline-flex flex-col items-center gap-[3px] py-2 w-1/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: tab.active ? "#0077FF" : "#8d969f" }}>
                <path d={tab.path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className="font-['MTS_Compact:Regular',sans-serif] text-[10px] leading-[12px]"
                style={{ color: tab.active ? "#0077FF" : "#8d969f" }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {mirPayOpen && <MirPayApp onBack={() => setMirPayOpen(false)} onAddCard={onBack} />}
    </div>
  );
}
