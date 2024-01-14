'use client';
export default function TextBox_1({className, children}) {
  return (
    <>
      <div className={`${className} border-solid border-[1px] border-[#E0DFEA] rounded-[12px] overflow-hidden`}>
        <div className={`h-full p-[12px] overflow-auto`}>
          {children}
        </div>
      </div>
    </>
  );
}
