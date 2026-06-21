export function AnimatedButtonLoader() {
  return (
    <div
      className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[16px] size-full"
      data-name="Button Loader"
    >
      <style>{`
        @keyframes btn-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .btn-spinner {
          animation: btn-spin 0.85s linear infinite;
        }
      `}</style>
      <div
        className="btn-spinner relative shrink-0 size-[24px] rounded-full"
        style={{
          border: "2.5px solid rgba(29,32,35,0.15)",
          borderTopColor: "rgba(29,32,35,1)",
        }}
      />
    </div>
  );
}
