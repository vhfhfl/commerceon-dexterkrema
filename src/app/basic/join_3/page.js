'use client';

import Cpnt_3_a from '@/components/common/Cpnt_3_a';
import Cpnt_4_b from '@/components/common/Cpnt_4_b';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className="pb-[251px]">
        <section className="HBox mt-[100px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center">
              회원가입이
              <br />
              성공적으로 완료되었습니다
            </div>
            <div className="mt-[28px] text-[#26262c] text-[22px] font-[600] tracking-[-0.22px] text-center">
              <span className="text-[#5d45ff]">커머스온</span> 기업의 성공적인
              마케팅 플랜을 기원합니다.
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <ul className="space-y-[16px]">
              {Array.from(Array(4)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li
                      className={`${
                        idx == 0 && `On`
                      } group bg-[#fff] border-[1px] border-solid border-[#cfcedc] [&.On]:border-[#5d45ff] rounded-[24px] overflow-hidden`}
                    >
                      <div className="p-[40px]">
                        <Cpnt_3_a />
                        <div className="hidden group-[&.On]:block duration-300 ease-out will-change-auto">
                          <div className="Divider_2"></div>
                          <Cpnt_4_b />
                        </div>
                      </div>
                      <div>
                        <button className="CenterCenter Btn_6 w-full group-[&.On]:text-[#5d45ff]">
                          모든 혜택 보기
                          <ReactSVG
                            className={`ml-[4px] group-[&.On]:rotate-180`}
                            src={`/icon/2401081347.svg`}
                          />
                        </button>
                      </div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="HBox mt-[100px]">
          <div className="Inner2">
            <article className="CenterCenter">
              <div>
                <button className="Button_1 Xl w-[245px]">
                  메인으로 이동하기
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
