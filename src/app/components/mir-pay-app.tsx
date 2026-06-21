import { useState } from "react";
import imgMirPayLogo from "@/imports/image-14.png";

interface MirPayAppProps {
  onBack: () => void;
  onAddCard?: () => void;
}

function SuccessScreen({ onBack, onAddCard }: { onBack: () => void; onAddCard?: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ background: "#F2F3F7" }}>
      <style>{`
        @keyframes success-fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .success-enter { animation: success-fade-in 300ms ease forwards; }
      `}</style>

      <div className="success-enter flex flex-col h-full">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-24 px-8">
          {/* Green checkmark circle */}
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6"
            style={{ border: "3px solid #01925B", background: "#01925B" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <p className="font-['MTS_Compact:Regular',sans-serif] text-[#1d2023] text-[17px] leading-[24px] text-center">
            Все готово!{"\n"}Теперь можно добавить{"\n"}карту «Мир»
          </p>
        </div>

        {/* Bottom buttons */}
        <div className="px-6 pb-12 flex flex-col items-center gap-4 shrink-0">
          <button
            className="w-full h-[52px] rounded-[26px] flex items-center justify-center active:opacity-85"
            style={{ background: "#1F5BD7" }}
            onClick={onAddCard}
          >
            <span className="font-['MTS_Compact:Medium',sans-serif] text-white text-[16px]">Добавить карту</span>
          </button>
          <button onClick={onBack}>
            <span
              className="font-['MTS_Compact:Regular',sans-serif] text-[16px]"
              style={{ color: "#1F5BD7" }}
            >
              Я сделаю это позже
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function MirPayApp({ onBack, onAddCard }: MirPayAppProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col overflow-hidden">
      <style>{`
        @keyframes mirpay-slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .mirpay-app-enter { animation: mirpay-slide-in 300ms cubic-bezier(0.32, 0.72, 0, 1) forwards; }
      `}</style>

      <div className="mirpay-app-enter flex flex-col h-full relative">
        {showSuccess ? (
          <SuccessScreen onBack={onBack} onAddCard={onAddCard} />
        ) : (
          <div className="flex flex-col h-full" style={{ background: "#01925B" }}>
            {/* Decorative shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute" style={{ top: "-40px", right: "-40px", width: "220px", height: "220px", borderRadius: "50% 50% 50% 0", background: "rgba(0,0,0,0.08)", transform: "rotate(-30deg)" }} />
              <div className="absolute" style={{ top: "120px", left: "-60px", width: "180px", height: "180px", borderRadius: "50% 0 50% 50%", background: "rgba(0,0,0,0.06)", transform: "rotate(20deg)" }} />
              <div className="absolute" style={{ bottom: "220px", right: "-30px", width: "160px", height: "160px", borderRadius: "0 50% 50% 50%", background: "rgba(0,0,0,0.07)", transform: "rotate(-15deg)" }} />
              <div className="absolute" style={{ bottom: "180px", left: "-50px", width: "200px", height: "200px", borderRadius: "50% 50% 0 50%", background: "rgba(0,0,0,0.05)", transform: "rotate(10deg)" }} />
            </div>

            {/* Center content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16 relative z-10">
              <img
                src={imgMirPayLogo}
                alt="Mir Pay"
                className="w-[120px] h-[120px] rounded-[28px] object-cover mb-6"
              />
              <p className="font-['MTS_Compact:Regular',sans-serif] text-white text-[17px] leading-[24px] text-center opacity-90">
                Бесконтактная оплата покупок{"\n"}с платежной системой «Мир»
              </p>
            </div>

            {/* Bottom sheet */}
            <div className="relative z-10 bg-white rounded-t-[28px] px-6 pt-6 pb-10 shrink-0">
              <p className="font-['MTS_Compact:Regular',sans-serif] text-[#626c77] text-[14px] leading-[20px] text-center mb-4">
                Нажимая кнопку «Начать», вы принимаете{" "}
                <span className="text-[#0077ff] underline cursor-pointer">Лицензионное соглашение</span>
                {" "}и{" "}
                <span className="text-[#0077ff] underline cursor-pointer">Политику конфиденциальности</span>
              </p>
              <button
                className="w-full h-[52px] rounded-[16px] flex items-center justify-center active:opacity-85"
                style={{ background: "#1F5BD7" }}
                onClick={() => setShowSuccess(true)}
              >
                <span className="font-['MTS_Wide:Bold',sans-serif] text-white text-[15px] tracking-[0.4px]">Начать</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
