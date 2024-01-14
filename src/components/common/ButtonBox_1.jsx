'use client';
export default function ButtonBox_1({ className }) {
  return (
    <>
      <div className={`${className} WhiteBox`}>
        <article className="CenterBetween">
          <div className={`Fc`}>
            <article className="CenterLeft">
              <div
                className={`text-[#26262C] text-[18px] font-[600] leading-[18px]`}
              >
                Lorem Ipsum
              </div>
              <div
                className={`ml-[12px] text-[#8C8A9A] text-[16px] font-[400] leading-[16px]`}
              >
                Lorem Ipsum
              </div>
            </article>
          </div>
          <div className={`Fc`}>
            <button className={`Button_4 Sm w-[118px]`}>Lorem Ipsum</button>
          </div>
        </article>
      </div>
    </>
  );
}
