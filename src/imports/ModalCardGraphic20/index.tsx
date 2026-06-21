import imgKv from "./19447105715e92e265795943dd6764a1bb4c6b5d.png";

function Kv() {
  return (
    <div className="overflow-clip relative shrink-0 size-[168px]" data-name="KV">
      <div className="absolute left-[-43.29px] size-[254.152px] top-[-42.52px]" data-name="KV">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKv} />
      </div>
    </div>
  );
}

function Graphic3DPlaceholder() {
  return (
    <div className="content-stretch flex h-[168px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Graphic/🔄3D Placeholder">
      <Kv />
    </div>
  );
}

function Graphic() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Graphic">
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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['MTS_Wide:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#1d2023] text-[20px] w-full">Скачайте Mir Pay, чтобы платить телефоном</p>
      <p className="font-['MTS_Compact:Regular',sans-serif] leading-[0] relative shrink-0 text-[#626c77] text-[17px] w-full">
        <span className="leading-[24px]">{`Затем вернитесь в приложение банка и снова нажмите Добавить в `}</span>
        <span className="leading-[24px]">{`Mir Pay `}</span>
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Выполнить</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2023] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">не сейчас</p>
      </div>
    </div>
  );
}

export default function ModalCardGraphic() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-end pb-[20px] pt-[32px] px-[20px] relative rounded-[32px] size-full" data-name="Modal Card Graphic 2.0">
      <Graphic />
      <Text />
      <div className="content-stretch flex flex-col gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="Buttons/🔄 Two Buttons">
        <div className="bg-[#ff0032] h-[52px] relative rounded-[16px] shrink-0 w-full" data-name="Button 2.0">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
              <Content />
            </div>
          </div>
        </div>
        <div className="relative rounded-[16px] shrink-0 w-full" data-name="Button 2.0">
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