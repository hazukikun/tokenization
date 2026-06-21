import svgPaths from "./svg-ozxu1c89jx";

function Box() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p1a397000} fill="var(--fill-0, #1D2023)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[452px] left-[20px] right-[20px] top-[121px]" data-name="Content">
      <div className="[word-break:break-word] absolute font-['MTS_Wide:Medium',sans-serif] h-[44px] leading-[24px] left-[-10px] not-italic right-[-10px] text-[#1d2023] text-[20px] text-center top-[246px]" data-name="Component 1">
        <p className="-translate-x-1/2 absolute left-[170px] overflow-hidden text-ellipsis top-[10px] w-[320px]">{`Проверяем реквизиты `}</p>
        <p className="-translate-x-1/2 absolute left-[170px] opacity-0 overflow-hidden text-ellipsis top-[44px] w-[320px]">Шифруем данные карты</p>
        <p className="-translate-x-1/2 absolute left-[170px] opacity-0 overflow-hidden text-ellipsis top-[78px] w-[320px]">Стучимся в Mir Pay</p>
        <p className="-translate-x-1/2 absolute left-[170px] opacity-0 overflow-hidden text-ellipsis top-[112px] w-[320px]">Натраиваем бесконтактную оплату</p>
        <p className="-translate-x-1/2 absolute left-[170px] opacity-0 overflow-hidden text-ellipsis top-[170px] w-[320px]">
          Ещё чуть-чуть
          <br aria-hidden />и всё заработает
        </p>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute h-[680px] left-0 right-0 top-[96px]" data-name="Box">
      <Content />
    </div>
  );
}

export default function LoaderScreen() {
  return (
    <div className="bg-[#fbfbfb] relative size-full" data-name="Loader Screen">
      <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[20px] top-[calc(50%-330px)]" data-name="Left/Button">
        <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0" data-name="Icon Button">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="🔄Icon">
            <Box />
          </div>
        </div>
      </div>
      <Box1 />
      <div className="absolute aspect-[406.908203125/401.33203125] left-[-26.05px] right-[-20.86px] rounded-[146px] top-[16.33px]">
        <div className="absolute inset-0 overflow-hidden rounded-[146px]" />
      </div>
    </div>
  );
}