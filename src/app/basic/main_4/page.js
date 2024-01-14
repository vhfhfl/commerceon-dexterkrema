'use client';

import PagingSet_1 from '@/components/common/PagingSet_1';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className="bg-[#f0eff6] pb-[120px]">
        <section className="HBox sticky top-[90px] z-10 left-0 w-full py-[8px] bg-[#fff]">
          <div className="Inner">
            <article className="CenterCenter gap-[16px]">
              {['Case Study', 'Blog'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button
                      className={`${idx == 0 && `On`} Button_11 w-[170px]`}
                    >
                      {obj}
                    </button>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
        <section className="HBox mt-[80px]">
          <div className="Inner">
            <div className="text-[#26262c] text-[50px] font-[700] leading-[66px] text-center">
              <span className="text-[#5d45ff]">애드플로러</span>를 통한 베스트
              케이스와
              <br />
              다양한 마케팅 정보를 통해
              <br />
              마케팅 전략을 수립해보세요.
            </div>
            <div className="mt-[32px] text-[#26262c] text-[20px] font-[400] text-center">
              애드플로러는 여러분의 성공적인 마케팅 활동을 지원합니다.
            </div>
          </div>
        </section>
        <section className="HBox mt-[80px]">
          <div className="Inner">
            <ul className="grid grid-cols-3 gap-[100px_4.16%]">
              {Array.from(Array(6)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li
                      className={`${
                        idx == 0 ? 'On' : ''
                      } group hover:translate-y-[-8px] duration-300 ease-out will-change-auto`}
                    >
                      {/*<li className='hidden [&.On]:block hover:translate-y-[-8px] duration-300 ease-out will-change-auto'>*/}
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="block p-[30px] bg-[#fff] rounded-[24px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)] group-[&.On]:shadow-[0px_0px_32px_0px_rgba(93,69,255,0.6)]"
                      >
                        <img
                          className="w-full aspect-square rounded-[16px]"
                          src={`/image/2311201312_${idx + 1}.jpg`}
                          alt=""
                        />
                        <div className="mt-[22px]">
                          <div className="text-[#5d45ff] text-[14px] font-[400]">
                            2023-08-30
                          </div>
                          <div className="mt-[10px] text-[#26262c] group-[&.On]:text-[#5d45ff] text-[20px] font-[600] leading-[28px]">
                            덱스터 크레마 AI의 핵심기능, 고객의 페르소나
                            추출하는 방법에 대해 알아볼까요?
                          </div>
                          <div className="mt-[16px] text-[#26262c] text-[16px] font-[400] leading-[24px] line-clamp-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci aperiam aspernatur aut autem deleniti
                            esse exercitationem harum libero magni nesciunt
                            nobis omnis quibusdam rem repellat, saepe sapiente
                            sequi vel. Quod?
                          </div>
                        </div>
                      </a>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="HBox mt-[100px]">
          <div className="Inner">
            <PagingSet_1 />
          </div>
        </section>
        <section className="HBox mt-[84px]">
          <div className="Inner">
            <Swiper_6 />
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}