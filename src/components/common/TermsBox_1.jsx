'use client';
export default function TermsBox_1() {
  return (
    <>
      <div className="TermsBox_1">
        <article className="CenterBetween">
          <div>
            <label className="FormLabelBox">
              <input className="Checkbox_1" type="checkbox" />
              <div className="LabalUi">
                <span className="mr-[4px] text-[#5d45ff]">(필수)</span>
                <span className="mr-[4px] text-[#a3a1b1]">(선택)</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </label>
          </div>
          <div>
            <a
              className="text-[#5D45FF] text-[14px] font-[600] underline underline-offset-2"
              href="https://www.google.com"
              target="_blank"
            >
              내용보기
            </a>
          </div>
        </article>
        <div className="mt-[16px]">
          <div className="p-[20px] h-[140px] overflow-y-auto text-[#161616] text-[14px] font-[400] leading-[20px] bg-[#F0EFF6]">
            <p>제 1조(목적)</p>
            <br />
            <p>표준약관 제 10023호</p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
