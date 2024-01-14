'use client';

import Cpnt_3_a from '@/components/common/Cpnt_3_a';
import Cpnt_4_b from '@/components/common/Cpnt_4_b';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className="pb-[152px]">
        <section className="HBox mt-[100px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[38px] font-[700] tracking-[-0.38px] text-center">
              효율적인 마케팅을 위한
              <br />
              최적의 플랜을 선택해 보세요
            </div>
            <div className="mt-[28px] text-[#8c8a9a] text-[20px] font-[400] text-center">
              연간 계약 진행시, 2개월 요금 면제 혜택을 제공해드립니다.
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
        <section className="HBox mt-[120px]">
          <div className="Inner">
            <Swiper_6 />
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
