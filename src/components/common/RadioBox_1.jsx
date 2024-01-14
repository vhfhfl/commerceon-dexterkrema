'use client';
export default function RadioBox_1({ className, children }) {
  return (
    <>
      <article
        className={`CenterBetween border-solid border-[1px] border-[#E0DFEA] rounded-[12px] p-[16px] bg-white gap-[12px]`}
      >
        <div className={`flex-1`}>
          <div
            className={`text-[#3D3C42] text-[14px] font-[500] leading-[24px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
            odio. Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div>
          <input className="block RadioButton_1 Md" type="checkbox" />
        </div>
      </article>
    </>
  );
}
