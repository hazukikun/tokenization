import imgImage from "./a48e6105bb1077c0214fa6b0ebcab5b237175dd2.png";

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-center w-[320px]" data-name="Content">
      <p className="font-['MTS_Wide:Medium',sans-serif] relative shrink-0 text-[#1d2023] text-[20px] w-full">
        Добавили карту
        <br aria-hidden />в Mir Pay
      </p>
      <p className="font-['MTS_Compact:Regular',sans-serif] relative shrink-0 text-[#626c77] text-[17px] w-full">Теперь можно платить приложив телефон к терминалу. Управлять картой можно в приложении Mir Pay</p>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[24px] relative size-full">
          <div className="content-stretch flex items-center min-h-[168px] min-w-[168px] relative shrink-0" data-name="Done">
            <div className="relative shrink-0 size-[168px]" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
            </div>
          </div>
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">хорошо</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <div className="bg-[#ff0032] relative rounded-[16px] shrink-0 w-full" data-name="Your Content Up">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
              <Content2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateScreen1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center max-w-[480px] min-h-px min-w-[320px] overflow-clip relative w-full" data-name="State Screen">
      <Content />
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Bottom Button 2.0">
        <Top />
      </div>
    </div>
  );
}

export default function StateScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="State Screen">
      <StateScreen1 />
    </div>
  );
}