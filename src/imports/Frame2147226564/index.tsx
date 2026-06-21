import React from "react";
import imgKv from "./19447105715e92e265795943dd6764a1bb4c6b5d.png";

function Kv() {
  return (
    <div className="overflow-clip relative shrink-0 size-[210px]" data-name="KV">
      <div className="absolute left-[-54.11px] size-[317.69px] top-[-53.15px]" data-name="KV">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKv} />
      </div>
    </div>
  );
}

function Graphic3DPlaceholder() {
  return (
    <div className="content-stretch flex h-[210px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Graphic/🔄3D Placeholder">
      <Kv />
    </div>
  );
}

function Graphic() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="Graphic">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <Graphic3DPlaceholder />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['MTS_Wide:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#1d2023] text-[20px] text-center w-full whitespace-pre-line">{"Скачайте Mir Pay,\nчтобы платить телефоном"}</p>
      <p className="font-['MTS_Compact:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#626c77] text-[17px] text-center w-full whitespace-pre-line">{"Затем вернитесь в приложение банка\nи снова нажмите Добавить в Mir Pay"}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[16px]">Скачать Mir Pay</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2023] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">Не сейчас</p>
      </div>
    </div>
  );
}

function ModalCardGraphic({ onClose, onDownload }: { onClose?: () => void; onDownload?: () => void }) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-end pb-[20px] pt-[32px] px-[20px] rounded-[32px]"
      data-name="Modal Card Graphic 2.0"
      onClick={(e) => e.stopPropagation()}
    >
      <Graphic />
      <Text />
      <div className="content-stretch flex flex-col gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="Buttons/🔄 Two Buttons">
        <div
          className="bg-[#ff0032] h-[52px] relative rounded-[16px] shrink-0 w-full cursor-pointer"
          data-name="Button 2.0"
          onClick={onDownload}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
              <Content />
            </div>
          </div>
        </div>
        <div
          className="relative rounded-[16px] shrink-0 w-full cursor-pointer"
          data-name="Button 2.0"
          onClick={onClose}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
              <Content1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame({ onClose, onDownload }: { onClose?: () => void; onDownload?: () => void }) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => onClose?.(), 200);
  };

  const handleDownload = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => { onClose?.(); onDownload?.(); }, 200);
  };

  return (
    <div className="relative size-full">
      <style>{`
        @keyframes modal-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-overlay-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes modal-card-in {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        @keyframes modal-card-out {
          from { transform: translateY(0); }
          to   { transform: translateY(100%); }
        }
        .modal-overlay-enter { animation: modal-overlay-in  300ms ease forwards; }
        .modal-overlay-exit  { animation: modal-overlay-out 200ms ease forwards; }
        .modal-card-enter    { animation: modal-card-in  300ms cubic-bezier(0.32, 0.72, 0, 1) forwards; }
        .modal-card-exit     { animation: modal-card-out 200ms cubic-bezier(0.32, 0.72, 0, 1) forwards; }
      `}</style>
      <div
        className={`${isClosing ? "modal-overlay-exit" : "modal-overlay-enter"} absolute bg-[rgba(29,32,35,0.4)] inset-0 cursor-pointer`}
        data-name="Overlay Blur"
        onClick={handleClose}
      />
      <div className={`${isClosing ? "modal-card-exit" : "modal-card-enter"} absolute bottom-0 left-0 right-0 px-[8px] pb-[8px]`}>
        <ModalCardGraphic onClose={handleClose} onDownload={handleDownload} />
      </div>
    </div>
  );
}
