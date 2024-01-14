'use client';
export default function LoadingBox_1({ className, children = 'LoadingBox_1' }) {
  return (
    <>
      <div
        className={`${className} bg-[rgba(38,38,44,0.6)] py-[19px] rounded-[12px]`}
      >
        <div className={`CenterCenter`}>
          <div>
            <div>
              <img className={`mx-auto`} src="/icon/2312261029.svg" alt="" />
            </div>
            <div
              className={`mt-[20px] text-center text-[#FFF] text-[16px] font-[500]`}
            >
              {children}
              {/*기간별 키워드에 대한 인사이트를 얻는중입니다.*/}
              {/*<br />*/}
              {/*잠시만 기다려주세요.*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
