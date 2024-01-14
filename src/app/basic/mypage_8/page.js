'use client';

import TabBar_2 from '@/components/common/TabBar_2';
import Title_1 from '@/components/common/Title_1';
import TreeMenu_1_a from '@/components/common/TreeMenu_1_a';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className="pb-[140px]">
        <section className="HBox mt-[60px]">
          <div className="Inner">
            <TabBar_2 />
          </div>
        </section>
        <section className="HBox mt-[44px]">
          <div className="Inner text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center">
            애드플로러 AI 사용법
            <br />
            무엇이든 물어보세요.
          </div>
        </section>
        <section className="HBox mt-[44px]">
          <div className="Inner">
            <article className="CenterCenter flex-col">
              <div className="TextInput_1 Xl w-[816px]">
                <input placeholder="검색어를 입력하세요" />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
                <button className="Search">
                  <img src="/icon/input_search.svg" alt="" />
                </button>
              </div>
              <div className="mt-[44px] text-[#26262C] text-[22px] font-[700]">
                <span className="text-[#5D45FF]">‘요금제’</span> 검색결과
              </div>
            </article>
          </div>
        </section>
        <section className="HBox mt-[40px]">
          <div className="Inner">
            <div className="space-y-[60px]">
              {Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <article>
                      <Title_1>Title {idx}</Title_1>
                      <TreeMenu_1_a />
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
        <section className="HBox mt-[120px]">
          <div className="Inner">
            <div className="py-[54px] px-[9.72%] bg-[#E5E4EF] rounded-[24px]">
              <article className="CenterBetween">
                <div>
                  <div className="text-[#26262C] text-[30px] font-[600] leading-[38px]">
                    찾으시는 질문이 없으신가요?
                    <br />
                    문의하기를 통해 궁금한 사항을 해결하세요.
                  </div>
                  <button className="mt-[36px] Button_1 Xl w-[168px]">
                    1:1 문의하기
                  </button>
                </div>
                <div>
                  <img src="https://gifpng.com/150x150?text=아이콘" alt="" />
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner">
            <div className="mx-[-60px]">
              <Swiper_6 />
            </div>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}