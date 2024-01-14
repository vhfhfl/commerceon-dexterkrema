'use client';
export default function Alert_1_c() {
  return (
    <>
      <div className='Alert_1 w-[360px]'>
        <div className='Body type2'>
          <div>
            토큰 충전이 <span className='text-[#f3436d]'>실패하였습니다.</span>
            <br/>
            모든 정보를 빠짐없이 작성해주세요.
          </div>
        </div>
        <div className='Foot'>
          <button className='Button_1 Lg NoRounded w-full'>
            확인
          </button>
        </div>
      </div>
    </>
  );
}