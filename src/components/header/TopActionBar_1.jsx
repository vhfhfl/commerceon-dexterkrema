'use client';
export default function TopActionBar_1() {
  return (
    <>
      <div className='TopActionBar_1 bg-[#101012] h-[var(--header-hei)]'>
        <section className='HBox h-full'>
          <div className='Inner h-full'>
            <article className='CenterBetween h-full'>
              <div>
                <article className='CenterLeft'>
                  <div>
                    <a href='/' className='block'>
                      <img src='/icon/logo/header_2.svg' alt=''/>
                    </a>
                  </div>
                  <div className='ml-[80px] 3xl:ml-[100px]'>
                    <article className='CenterLeft gap-[60px]'>
                      <a href='#' target='_blank' className='text-[#fff] hover:text-[#9FAFFF] text-[16px] font-[600]'>
                        회사소개
                      </a>
                      <a href='#' target='_blank' className='text-[#fff] hover:text-[#9FAFFF] text-[16px] font-[600]'>
                        블로그
                      </a>
                      <a href='#' target='_blank' className='text-[#fff] hover:text-[#9FAFFF] text-[16px] font-[600]'>
                        서비스 문의
                      </a>
                    </article>
                  </div>
                </article>
              </div>
              <div>
                <article className='CenterRight gap-[16px]'>
                  <a href='#' className='Button_2 Lg w-[149px]'>
                    로그인
                  </a>
                  <a href='#' className='Button_2 Lg w-[149px]'>
                    회원가입
                  </a>
                  <a href='#' className='Button_1 Lg w-[149px]'>
                    솔루션 START
                  </a>
                </article>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}