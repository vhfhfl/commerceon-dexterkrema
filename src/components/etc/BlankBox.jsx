'use client';
export default function BlankBox({ className, children="BlankBox" }) {
  return (
    <>
      <div
        className={`${className} CenterCenter border-solid border-[1px] border-[#ddd] bg-[#ededed] text-[14px] text-[#999]`}
      >
        {children}
      </div>
    </>
  );
}
