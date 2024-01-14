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
              고객님의 비밀번호를
              <br/>
              찾았습니다
            </div>
            <div className='mt-[80px]'>
              <div className='py-[50px] text-[#26262C] text-[16px] font-[400] text-center bg-[#fff] rounded-[24px]'>
                고객님의 비밀번호는
                <div className='my-[16px] font-[600]'>dexterkrema123!@#</div>
                입니다.
              </div>
            </div>
            <div className='mt-[52px]'>
              <button className='Button_1 Lg w-full'>로그인</button>
            </div>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}