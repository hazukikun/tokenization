import svgPaths from "./svg-m0au67gl45";

function Box() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <mask height="20" id="mask0_1_14746" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="2" y="2">
            <g clipPath="url(#paint0_angular_1_14746_clip_path)" data-figma-skip-parse="true">
              <g transform="matrix(0.0025 -0.0095 0.0095 0.0025 12 12)">
                <foreignObject height="2735.75" width="2735.75" x="-1367.88" y="-1367.88">
                  <div style={{ background: "conic-gradient(from 90deg,rgba(29, 32, 35, 1) 0deg,rgba(0, 0, 0, 0) 22.195deg,rgba(0, 0, 0, 0.1) 81.3462deg,rgba(0, 0, 0, 0.425) 182.596deg,rgba(0, 0, 0, 0.75) 283.846deg,rgba(29, 32, 35, 1) 360deg)", height: "100%", width: "100%", opacity: "1" }} xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
              </g>
            </g>
            <rect height="20" id="Mask" width="20" x="2" y="2" data-figma-gradient-fill="{'type':'GRADIENT_ANGULAR','stops':[{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.0},'position':0.061652787029743195},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.10000000149011612},'position':0.22596153616905212},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.42500001192092896},'position':0.50721156597137451},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.750},'position':0.78846156597137451},{'color':{'r':0.11372549086809158,'g':0.12549020349979401,'b':0.13725490868091583,'a':1.0},'position':1.0}],'stopsVar':[{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.0},'position':0.061652787029743195},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.10000000149011612},'position':0.22596153616905212},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.42500001192092896},'position':0.50721156597137451},{'color':{'r':0.0,'g':0.0,'b':0.0,'a':0.750},'position':0.78846156597137451},{'color':{'r':0.11372549086809158,'g':0.12549020349979401,'b':0.13725490868091583,'a':1.0},'position':1.0}],'transform':{'m00':5.0,'m01':19.000001907348633,'m02':-6.7353249733059783e-07,'m10':-19.000001907348633,'m11':5.0,'m12':19.000001907348633},'opacity':1.0,'blendMode':'NORMAL','visible':true}" />
          </mask>
          <g mask="url(#mask0_1_14746)">
            <path d={svgPaths.p92e1780} fill="var(--fill-0, black)" id="Color" />
          </g>
        </g>
        <defs>
          <clipPath id="paint0_angular_1_14746_clip_path">
            <rect height="20" id="Mask" width="20" x="2" y="2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ButtonLoader() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[16px] size-full" data-name="Button Loader">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Always Black Spinner">
        <Box />
      </div>
    </div>
  );
}