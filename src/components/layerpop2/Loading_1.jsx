'use client';
export default function Loading_1() {
  return (
    <>
      <div className={`bg-[rgba(0,0,0,0.5)]`}>
        <div className={`CenterCenter`}>
          <div>
            <div>
              <img className={`mx-auto`} src={`/icon/2312261029.svg`} alt={``} />
            </div>
            <div className={`mt-[20px] text-center text-[#FFF] text-[16px] font-[500]`}>
              키워드 상세 분석중입니다.
              <br />
              잠시만 기다려주세요.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}