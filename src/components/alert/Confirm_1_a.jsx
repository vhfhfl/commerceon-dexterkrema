'use client';
export default function Confirm_1_a() {
  return (
    <>
      <div className='Confirm_1 w-[360px]'>
        <div className='Body'>
          <div>
            등록한 문의 <span className='text-[#F3436D]'>게시글을</span>
            <br/>
            정말 삭제하시겠습니까?
          </div>
          <div className='mt-[20px] text-[14px] font-[400]'>삭제된 문의는 복구되지 않습니다.</div>
        </div>
        <div className='Foot'>
          <article className='CenterCenter'>
            <div className='flex-1'>
              <button className='Button_2 Lg NoRounded w-full'>취소</button>
            </div>
            <div className='flex-1'>
              <button className='Button_1 Lg NoRounded w-full'>문의삭제</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}