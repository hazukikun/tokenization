import { useEffect, useRef, useState } from "react";
import ProductScreen from "@/imports/ЭкранПродукта-4";
import MirPayModal from "@/imports/Frame2147226564";
import { AnimatedButtonLoader } from "./components/animated-button-loader";
import { RuStorePage } from "./components/rustore-page";
import { LoaderScreen } from "./components/loader-screen";
import qrIcon from "./assets/qr-icon.svg";

export default function App() {
  const [isMirPayLoading, setIsMirPayLoading] = useState(false);
  const [isMirPayModalOpen, setIsMirPayModalOpen] = useState(false);
  const [isRuStoreOpen, setIsRuStoreOpen] = useState(false);
  const [isLoaderScreenOpen, setIsLoaderScreenOpen] = useState(false);
  const [hasMirPayInstalled, setHasMirPayInstalled] = useState(false);
  // card has been added to Mir Pay — swaps the "Добавить в Mir Pay" CTA for "Оплатить по QR"
  const [isTokenized, setIsTokenized] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("astra-theme", "dark");
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMirPayModalOpen || isLoaderScreenOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMirPayModalOpen, isLoaderScreenOpen]);

  const handleMirPayClick = () => {
    if (isMirPayLoading || isMirPayModalOpen || isLoaderScreenOpen) return;
    setIsMirPayLoading(true);
    timerRef.current = window.setTimeout(() => {
      setIsMirPayLoading(false);
      if (hasMirPayInstalled) {
        setIsLoaderScreenOpen(true);
      } else {
        setIsMirPayModalOpen(true);
      }
    }, 1000);
  };

  const handleAddCard = () => {
    setIsRuStoreOpen(false);
    setHasMirPayInstalled(true);
  };

  return (
    <main className="w-full bg-[#f2f3f7]">
      <div className="relative w-full">
        <ProductScreen />

        {isMirPayLoading ? (
          <div className="absolute left-[20px] right-[20px] top-[324px] z-20 h-[52px] rounded-[16px]">
            <AnimatedButtonLoader />
          </div>
        ) : null}

        {!isMirPayLoading && !isMirPayModalOpen && !isLoaderScreenOpen && !isTokenized ? (
          <button
            aria-label="Добавить в MIR PAY"
            className="absolute left-[20px] right-[20px] top-[324px] z-20 h-[52px] rounded-[16px] bg-transparent"
            type="button"
            onClick={handleMirPayClick}
          />
        ) : null}

        {/* After tokenization the CTA becomes "Оплатить по QR" — an opaque white
            button rendered over the original "Добавить в Mir Pay" button. */}
        {isTokenized && !isLoaderScreenOpen ? (
          <button
            aria-label="Оплатить по QR"
            className="absolute left-[20px] right-[20px] top-[324px] z-20 h-[52px] rounded-[16px] bg-white flex items-center justify-center gap-[8px] active:opacity-85"
            type="button"
          >
            <img src={qrIcon} alt="" width={24} height={24} />
            <span className="font-['MTS_Wide:Bold',sans-serif] text-[#1d2023] text-[12px] leading-[16px] uppercase">
              Оплатить по QR
            </span>
          </button>
        ) : null}

        {isMirPayModalOpen ? (
          <div className="fixed inset-0 z-30">
            <MirPayModal
              onClose={() => setIsMirPayModalOpen(false)}
              onDownload={() => { setIsMirPayModalOpen(false); setIsRuStoreOpen(true); }}
            />
          </div>
        ) : null}

        {isRuStoreOpen ? (
          <RuStorePage onBack={handleAddCard} />
        ) : null}

        {isLoaderScreenOpen ? (
          <LoaderScreen onBack={() => { setIsLoaderScreenOpen(false); setIsTokenized(true); }} />
        ) : null}
      </div>
    </main>
  );
}
