import svgPaths from "./svg-p0pcn3zs2e";
import imgGradient from "./7866c12dba024e7ce646c852ac3b4a3b5324f90a.png";
import imgCards from "./7a1c4087291e4bb1d04b277dfe9410edfbbd772d.png";
import imgImage from "./2b6384752118df6e8703539c8c501df0a2783cec.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['MTS_Wide:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1d2023] text-[24px] text-center w-full">12 540 ₽</p>
    </div>
  );
}

function HLogo() {
  return (
    <div className="h-[11px] relative shrink-0 w-[40px]" data-name="h-logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9996 11">
        <g id="h-logo">
          <path clipRule="evenodd" d={svgPaths.p3a0c0700} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
          <path d={svgPaths.pf84cf00} fill="var(--fill-0, white)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Box() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p13f400} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Reki() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reki">
      <p className="[word-break:break-word] font-['MTS_Compact:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[0px] whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">••</span>
        <span className="leading-[20px] text-[14px]">{` 0000`}</span>
      </p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Show">
        <Box />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2px] relative shrink-0" data-name="Left">
      <HLogo />
      <Reki />
    </div>
  );
}

function Box1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Box">
          <g id="Shape">
            <path d={svgPaths.pc4a7c80} fill="var(--fill-0, #FAFAFA)" />
            <path d={svgPaths.p1beedc80} fill="var(--fill-0, #FAFAFA)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[12px]" style={{ backgroundImage: "linear-gradient(117.427deg, rgba(255, 255, 255, 0) 67.169%, rgba(255, 255, 255, 0.6) 34.048%, rgba(255, 255, 255, 0) 0.92723%), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%)" }} data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['MTS_Compact:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Автопополнение</p>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Update">
            <Box1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute content-stretch flex h-[55px] items-end justify-between left-0 pb-[14px] pl-[16px] pr-[14px] right-0 top-[105px]" data-name="Bottom">
      <Left />
      <div className="backdrop-blur-[25px] content-stretch flex h-[32px] items-start opacity-0 relative shrink-0 w-[131px]" data-name="Animated Button 3">
        <Content />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[20px] relative shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="card big">
        <div className="h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-[260px]" data-name="Cards">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCards} />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 w-full" data-name="➡️ Top Content">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] relative size-full">
            <Text />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[260px]" data-name="Card in header">
        <Card />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2023] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">Добавить в MIR PAY</p>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[18.12%_8.31%_18.18%_8.35%]" data-name="Vector">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.2878">
        <g id="Vector">
          <g id="image 1 (Traced)">
            <path d={svgPaths.p666a200} fill="var(--fill-0, #008452)" />
            <path d={svgPaths.p3507cd00} fill="var(--fill-0, #008452)" />
            <path d={svgPaths.p3e615000} fill="var(--fill-0, #008452)" />
            <path d={svgPaths.p1ceaf000} fill="var(--fill-0, #008452)" />
            <path clipRule="evenodd" d={svgPaths.p395aa600} fill="var(--fill-0, #008452)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2261cb00} fill="var(--fill-0, #008452)" fillRule="evenodd" />
          </g>
          <path d={svgPaths.p1e13c320} fill="url(#paint0_linear_1_11925)" id="image 1 (Traced)_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_11925" x1="19.9896" x2="12.7827" y1="7.43408" y2="7.43408">
            <stop stopColor="#1E5CD8" />
            <stop offset="1" stopColor="#02AFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Box2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p1db6ca80} fill="var(--fill-0, #1D2023)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Box3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p37467100} fill="var(--fill-0, #1D2023)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Box4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p1b547380} fill="var(--fill-0, #1D2023)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center py-[20px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <div className="relative shrink-0 w-full" data-name="➡️ Bottom Content">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] relative size-full">
            <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Button 2.0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
                  <Content1 />
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                    <Vector />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name=".Main Buttons">
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Icon Button Set Alternative Item / Default">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="🔄Icon">
                      <Box2 />
                    </div>
                    <p className="[word-break:break-word] font-['MTS_Compact:Medium',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#1d2023] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Оплатить</p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Icon Button Set Alternative Item / Default">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[10px] relative size-full">
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="🔄Icon">
                      <Box3 />
                    </div>
                    <p className="[word-break:break-word] font-['MTS_Compact:Medium',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#1d2023] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Пополнить</p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Icon Button Set Alternative Item / Default">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[10px] relative size-full">
                    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="🔄Icon">
                      <Box4 />
                    </div>
                    <p className="[word-break:break-word] font-['MTS_Compact:Medium',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#1d2023] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Перевести</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderProduct() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pt-[76px] relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full" data-name="🚧 Header Product">
      <div className="absolute inset-0 overflow-clip" data-name="Gradient f Header Product">
        <div className="absolute inset-0 opacity-30" data-name="Gradient">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
        </div>
      </div>
      <Container />
    </div>
  );
}

function Box5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[24px] min-w-px not-italic overflow-clip relative text-[17px]" data-name="Text">
        <p className="font-['MTS_Compact:Medium',sans-serif] relative shrink-0 text-[#1d2023] w-full">{`Кешбэк и бонусы `}</p>
        <p className="font-['MTS_Compact:Regular',sans-serif] relative shrink-0 text-[#626c77] w-full">По картам МТС Деньги</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box5 />
        </div>
      </div>
    </div>
  );
}

function CashbackEntrance() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[12px] relative rounded-[32px] shrink-0 w-full" data-name="cashback entrance">
      <div className="min-h-[52px] relative rounded-[16px] shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
            <div className="content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0" data-name="Cell Left/Image">
              <div className="relative shrink-0 size-[52px]" data-name="Image">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="52" src={imgImage} width="52" />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <Content2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p2b74ee00} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box6 />
      </div>
    </div>
  );
}

function Box7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">История операций</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box7 />
        </div>
      </div>
    </div>
  );
}

function History() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end py-[12px] relative rounded-[32px] shrink-0 w-full" data-name="History">
      <div className="min-h-[52px] relative rounded-[32px] shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
              <IconOnBackground />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <Content3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Wide:Medium',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#1d2023] text-[20px] text-ellipsis whitespace-nowrap">Информация</p>
    </div>
  );
}

function Box8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p28c17000} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground1() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box8 />
      </div>
    </div>
  );
}

function Box9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Реквизиты счёта</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box9 />
        </div>
      </div>
    </div>
  );
}

function Box10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p12c6a600} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground2() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box10 />
      </div>
    </div>
  );
}

function Box11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Тарифы</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box11 />
        </div>
      </div>
    </div>
  );
}

function Box12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p12ad5180} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground3() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box12 />
      </div>
    </div>
  );
}

function Box13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Справки и выписки</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box13 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[32px] shrink-0 w-full" data-name="Card Content">
      <div className="relative shrink-0 w-full" data-name="Primary Title 2.0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[20px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-name="Typeface=MTS Wide">
              <Title />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="info">
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground1 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content4 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground2 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content5 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground3 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Wide:Medium',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#1d2023] text-[20px] text-ellipsis whitespace-nowrap">Настройки</p>
    </div>
  );
}

function Box14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p5b02100} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground4() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="🔄Icon">
        <Box14 />
      </div>
    </div>
  );
}

function Box15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Настроить PAY NFC</p>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Size=24, Style=Outline">
        <Box15 />
      </div>
    </div>
  );
}

function Box16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p3d4f40c0} fill="var(--fill-0, #8D969F)" fillRule="evenodd" />
            <path d={svgPaths.p3ca18d00} fill="var(--fill-0, #8D969F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground5() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box16 />
      </div>
    </div>
  );
}

function ContainerFCaption() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Container f Caption">
      <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Compact:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#626c77] text-[14px]">На главном экране</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Скрыть баланс карты</p>
        <ContainerFCaption />
      </div>
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="Right/Switch">
        <div className="h-[32px] relative shrink-0 w-[56px]" data-name="Switch">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[32px] left-1/2 top-1/2 w-[56px]" data-name="Oval">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 32">
              <path clipRule="evenodd" d={svgPaths.p3a42fcc0} fill="var(--fill-0, #26CD58)" fillRule="evenodd" id="Oval" />
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute right-[4px] size-[24px] top-1/2" data-name="Circle">
            <div className="absolute inset-[-66.67%_-66.67%_-83.33%_-66.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 60">
                <g filter="url(#filter0_dd_2_21099)" id="Circle">
                  <path clipRule="evenodd" d={svgPaths.p3f0d32f0} fill="var(--fill-0, white)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60" id="filter0_dd_2_21099" width="56" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_21099" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="effect1_dropShadow_2_21099" mode="normal" result="effect2_dropShadow_2_21099" />
                    <feBlend in="SourceGraphic" in2="effect2_dropShadow_2_21099" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p1eb1b580} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground6() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box17 />
      </div>
    </div>
  );
}

function Box18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Уведомления от банка</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box18 />
        </div>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[32px] shrink-0 w-full" data-name="Card Content">
      <div className="relative shrink-0 w-full" data-name="Primary Title 2.0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[20px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-name="Typeface=MTS Wide">
              <Title1 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="info">
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground4 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content7 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground5 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content8 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground6 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content9 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['MTS_Wide:Medium',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#1d2023] text-[20px] text-ellipsis whitespace-nowrap">Безопасность</p>
    </div>
  );
}

function Box19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p37773c80} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground7() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box19 />
      </div>
    </div>
  );
}

function Box20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Изменить ПИН-код</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box20 />
        </div>
      </div>
    </div>
  );
}

function Box21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path clipRule="evenodd" d={svgPaths.p2adf2f00} fill="var(--fill-0, #8D969F)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground8() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Fill">
        <Box21 />
      </div>
    </div>
  );
}

function Box22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Закрыть карту</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box22 />
        </div>
      </div>
    </div>
  );
}

function Box23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <g id="Shape">
            <path d={svgPaths.p3a9a1600} fill="var(--fill-0, #8D969F)" />
            <path d={svgPaths.p18edcd00} fill="var(--fill-0, #8D969F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconOnBackground9() {
  return (
    <div className="bg-[#f2f3f7] relative rounded-[16px] shrink-0 size-[52px]" data-name="Icon on Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip top-1/2" data-name="Size=24, Style=Outline">
        <Box23 />
      </div>
    </div>
  );
}

function Box24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d={svgPaths.p171b5a80} fill="var(--fill-0, #8D969F)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip py-[4px] relative" data-name="Cell Text">
        <p className="[word-break:break-word] font-['MTS_Compact:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d2023] text-[17px] w-full">Перевыпустить карту</p>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Cell Right/Icon">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
          <Box24 />
        </div>
      </div>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[32px] shrink-0 w-full" data-name="Card Content">
      <div className="relative shrink-0 w-full" data-name="Primary Title 2.0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[20px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-name="Typeface=MTS Wide">
              <Title2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="info">
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground7 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content10 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground8 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content11 />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[52px] relative shrink-0 w-full" data-name="Cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[20px] py-[10px] relative size-full">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Cell Left/Icon on Background">
                <IconOnBackground9 />
              </div>
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Content12 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <g id="Shape">
            <path d={svgPaths.p1a90ce40} fill="var(--fill-0, #D8400C)" />
            <path clipRule="evenodd" d={svgPaths.p2577ee80} fill="var(--fill-0, #D8400C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['MTS_Wide:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d8400c] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">заблокировать карту</p>
      </div>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="relative shrink-0 w-full" data-name="buttonClose">
      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[8px] px-[20px] relative size-full">
        <div className="bg-white h-[52px] relative rounded-[16px] shrink-0 w-full" data-name="Button 2.0">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
              <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Size=24, Style=Outline">
                <Box25 />
              </div>
              <Content13 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box26() {
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

function Left1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Left">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Left/Button">
        <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0" data-name="Icon Button">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="🔄Icon">
            <Box26 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Right" />;
}

function Navigation() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Navigation 2.0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[6px] relative size-full">
          <Left1 />
          <div className="[word-break:break-word] flex-[1_0_0] h-full leading-[0] min-w-px not-italic relative text-center whitespace-nowrap" data-name="Title/Center Title & Subtitle">
            <div className="-translate-y-1/2 absolute flex flex-col font-['MTS_Compact:Regular',sans-serif] justify-center left-0 overflow-hidden right-0 text-[#626c77] text-[14px] text-ellipsis top-[30px]">
              <p className="leading-[20px] overflow-hidden text-ellipsis">Пластиковая</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['MTS_Compact:Medium',sans-serif] justify-center left-0 overflow-hidden right-0 text-[#1d2023] text-[17px] text-ellipsis top-[12px]">
              <p className="leading-[24px] overflow-hidden text-ellipsis">МТС Деньги</p>
            </div>
          </div>
          <Right />
        </div>
      </div>
    </div>
  );
}

function Navbar20CenterTitleLite() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 pt-[24px] top-0" data-name="Navbar 2.0 Center Title/Lite">
      <Navigation />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f3f7] content-stretch flex flex-col gap-[12px] items-center relative w-full" data-name="Экран продукта">
      <HeaderProduct />
      <CashbackEntrance />
      <History />
      <CardContent />
      <CardContent1 />
      <CardContent2 />
      <ButtonClose />
      <Navbar20CenterTitleLite />
    </div>
  );
}