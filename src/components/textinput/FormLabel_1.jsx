'use client';
export default function FormLabel_1({
  className,
  children = 'LabelText',
  require = true,
  desc,
}) {
  return (
    <>
      <div className={`${className} text-[#26262c] text-[16px] font-[700]`}>
        {children}
        {require && <span className={`ml-[4px] text-[#5d45ff]`}>*</span>}
        {desc && (
          <span
            className={`ml-[8px] text-[#5D45FF] text-[14px] font-[400] leading-[1em]`}
          >
            {desc}
          </span>
        )}
      </div>
    </>
  );
}
