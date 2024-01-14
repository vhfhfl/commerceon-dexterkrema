'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import TabBar_1 from '@/components/common/TabBar_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main>
        <section
          className='HBox h-[1100px] pt-[200px] flex flex-col items-center bg-[url(/image/2311240853.jpg)] bg-cover bg-center bg-no-repeat'>
          <div className='Inner3 w-full'>
            <div className='text-[#fff] text-[38px] font-[600] leading-[48px] tracking-[-0.38px] text-center'>
              아이디를 잃어버리셨나요?
            </div>
            <div className='mt-[80px]'>
              <TabBar_1/>
            </div>
            <div className='pt-[60px]'>
              <div>
                <div>
                  <div className='text-[#fff] text-[16px] font-[700]'>성명</div>
                  <div className='mt-[8px]'>
                    <div className='TextInput_2 w-full'>
                      <input placeholder='성명을 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='mt-[40px]'>
                  <div className='text-[#fff] text-[16px] font-[700]'>연락처</div>
                  <div className='mt-[8px]'>
                    <div className='TextInput_2 w-full'>
                      <input placeholder='-을 제외한 숫자만 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-[52px]'>
                <button className='Button_1 Lg w-full'>아이디 찾기</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}