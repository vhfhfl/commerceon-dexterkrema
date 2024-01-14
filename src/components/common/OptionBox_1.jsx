'use client';
export default function OptionBox_1({
  className,
  children,
  text_1 = 'text_1',
  text_2 = 'text_2',
}) {
  return (
    <>
      <article className={`${className} CenterBetween`}>
        <div>
          <div
            className={`text-[#26262C] text-[16px] font-[400] leading-[1em]`}
          >
            {text_1}
            {/*인물노출 옵션 추가하기*/}
          </div>
          <div
            className={`mt-[8px] text-[#A3A1B1] text-[14px] font-[400] leading-[1em]`}
          >
            {text_2}
            {/*설정하면 컨텐츠에 인물이 추가가 됩니다.*/}
          </div>
        </div>
        <div>
          <input className="block ToggleButton_1" type="checkbox" />
        </div>
      </article>
    </>
  );
}
