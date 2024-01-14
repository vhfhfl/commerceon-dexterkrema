'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main>
        <section
          className='HBox h-[1100px] pt-[200px] flex flex-col items-center bg-[url(/image/2311240853.jpg)] bg-cover bg-center bg-no-repeat'>
          <div className='Inner3 w-full'>
            <div className='text-[#fff] text-[38px] font-[600] leading-[48px] tracking-[-0.38px] text-center'>
              나에게 맞는 프로젝트를
              <br/>
              시작해 보세요
            </div>
            <div className='mt-[80px]'>
              <div>
                <div className='text-[#fff] text-[16px] font-[700]'>이메일 주소</div>
                <div className='mt-[8px]'>
                  <div className='TextInput_2 w-full'>
                    <input placeholder='이메일 주소를 입력해주세요.'/>
                    <button className='ResetBtn'>
                      <img src='/icon/input_delete.svg' alt=''/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-[40px]'>
                <div className='text-[#fff] text-[16px] font-[700]'>비밀번호</div>
                <div className='mt-[8px]'>
                  <div className='TextInput_2 w-full'>
                    <input type='password' placeholder='비밀번호를 입력해주세요.'/>
                    <button className='ResetBtn'>
                      <img src='/icon/input_delete.svg' alt=''/>
                    </button>
                    <button className='EyeBtn'>
                      <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                      <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[33px]'>
              <article className='CenterBetween text-[14px] font-[400]'>
                <div className='text-[#8C8A9A]'>아이디 또는 비밀번호를 잊으셨나요?</div>
                <div>
                  <a className='text-[#fff] underline underline-offset-2' href='https://www.google.com' target='_blank'>
                    아이디/비밀번호 찾기
                  </a>
                </div>
              </article>
              <div className='mt-[69px]'>
                <button className='Button_1 Lg w-full'>로그인</button>
              </div>
              <div className='mt-[41px]'>
                <article className='CenterBetween text-[14px] font-[400]'>
                  <div className='text-[#8C8A9A]'>아직 회원이 아니신가요?</div>
                  <div>
                    <a className='text-[#fff] underline underline-offset-2' href='https://www.google.com' target='_blank'>
                      회원가입
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}