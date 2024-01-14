'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <section className="HBox h-[1100px] pt-[200px] flex flex-col items-center bg-[url(/image/2311240853.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="Inner3 w-full">
            <div className="text-[#fff] text-[38px] font-[600] leading-[48px] tracking-[-0.38px] text-center">
              고객님의 아이디를
              <br />
              찾았습니다
            </div>
            <div className="mt-[80px]">
              <div className="py-[50px] text-[#26262C] text-[16px] font-[400] text-center bg-[#fff] rounded-[24px]">
                고객님의 아이디는
                <div className="my-[16px] font-[600]">
                  dex*****@dexterkrema.com
                </div>
                입니다.
              </div>
            </div>
            <div className="mt-[52px]">
              <article className="CenterCenter gap-[10px]">
                <div className="flex-1">
                  <button className="Button_1 Lg w-full">로그인</button>
                </div>
                <div className="flex-1">
                  <button className="Button_3 Lg w-full">비밀번호 찾기</button>
                </div>
              </article>
              <div className="mt-[33px]">
                <article className="flex items-start justify-between">
                  <div className="text-[#8C8A9A] text-[14px] font-[400] flex-1">
                    가입 이메일 확인이 불가능하신 경우
                    <br />
                    애드플로러 고객센터로 문의해주시기 바랍니다.
                  </div>
                  <div>
                    <a
                      className="text-[#fff] text-[14px] font-[600] underline underline-offset-2"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      문의하기
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
