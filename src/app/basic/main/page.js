'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import Data_2312200846 from '@/dummy/Data_2312200846';
import Data_2312211940 from '@/dummy/Data_2312211940';
import HTMLReactParser from 'html-react-parser';

import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className={`pb-[100px] overflow-hidden`}>
        <section className={`HBox py-[115px] bg-[#1c1c20]`}>
          <div className={`Inner`}>
            <article className={`CenterBetween gap-[2.96%]`}>
              <div className={`flex-1`}>
                <div className={`text-[#fff] text-[22px] font-[400]`}>
                  초개인화 마케팅 커뮤니케이션의 A to Z를 한번에
                </div>
                <div className={`mt-[28px] Montserrat text-[#fff] text-[72px] font-[700] leading-[82px]`}>
                  초개인화 마케팅
                  <br/>
                  AI solution
                  <br/>
                  ADplorer
                </div>
                <div className={`mt-[30px] text-[#fff] text-[18px] font-[400] leading-[32px] line-clamp-4`}>
                  Adplorer는 흩어져 있는 고객의 데이터를 연결하여 시장 분석, 마케팅전략 수립은 물론, 콘텐츠를 제작하고 효과 예측까지 가능한 통합 서비스를 제공합니다.
                  <br/>
                  AIgency로 도약하는 우리가 여러분의 아이디어를 현실로 만들어 드립니다.
                </div>
                <div className={`mt-[30px]`}>
                  <button className={`Button_1 Xl w-[200px]`}>
                    서비스 문의하기
                  </button>
                </div>
              </div>
              <div>
                <img src={`/icon/2312201146.svg`} alt={``}/>
              </div>
            </article>
          </div>
        </section>
        <section className={`HBox pb-[74px] bg-[#1c1c20]`}>
          <div className={`Inner`}>
            <ul className={`grid grid-cols-3 gap-[2.71%]`}>
              {Data_2312200846.map((obj, idx) => {
                const {아이콘, 제목, 내용} = obj;

                return (
                  <Fragment key={idx}>
                    <li className={`p-[28px] bg-[#26262c] border-[1px] border-solid border-[#3d3c42] rounded-[24px]`}>
                      <div>
                        <img src={아이콘} alt={``}/>
                      </div>
                      <div className={`mt-[12px] text-[#fff] text-[18px] font-[600] leading-[28px] line-clamp-2`}>
                        {HTMLReactParser(제목)}
                      </div>
                      <div className={`mt-[22px] text-[#f0eff6] text-[16px] font-[400] leading-[24px] line-clamp-5`}>
                        {내용}
                      </div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={`HBox pt-[90px] bg-[#f0eff6]`}>
          <div className={`Inner`}>
            <div className={`text-[#26262c] text-[50px] font-[700] leading-[66px] text-center`}>
              컨텐츠 생성형 마케팅 솔루션
              <br/>
              <span className={`text-[#5d45ff]`}>애드플로러</span>로 시작하세요.
            </div>
          </div>
        </section>
        <section className={`pt-[40px] bg-[#f0eff6]`}>
          <ul className={`CenterCenter gap-[0.55%]`}>
            {['고객 검색 여정 분석', '키워드 세부 분석', '노출 콘텐츠 분석', '타겟 페르소나 생성', '고객 VOC 컨텐츠 분석', '컨텐츠 아티클 / 이미지생성', '1:1 문의 서비스(TBU)',].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <button className={`${idx == 4 && `On`} group CenterCenter inline-flex py-[10px] pl-[10px] pr-[14px] bg-[#fff] rounded-[24px] text-[#26262c] [&.On]:text-[#5d45ff] text-[14px] font-[600] text-left`}>
                      <img className={`group-[.On]:hidden`} src={`/icon/2312191151_${idx + 1}.svg`} alt={``}/>
                      <img className={`hidden group-[.On]:block`} src={`/icon/2312191151_${idx + 1}_on.svg`} alt={``}/>
                      <div className={`ml-[12px]`}>
                        STEP{idx + 1}
                        <br/>
                        {obj}
                      </div>
                    </button>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </section>
        <section className={`pt-[60px] bg-[#f0eff6]`}>
          <div className={`relative`}>
            <article className={`CenterBetween absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[586px] aspect-[586/618] pointer-events-none`}>
              <button className={`pointer-events-auto`}>
                <img src={`/icon/swiper/prev_btn_3.svg`} alt={``}/>
              </button>
              <button className={`pointer-events-auto`}>
                <img src={`/icon/swiper/next_btn_3.svg`} alt={``}/>
              </button>
            </article>
            <ul className={`flex items-start justify-center gap-[1.38%]`}>
              {Data_2312211940.map((obj, idx) => {
                const {제목, 내용} = obj;

                return (
                  <Fragment key={idx}>
                    <li className={`${idx == 3 && `On`} group w-[420px] [&.On]:w-[494px] py-[32px] [&.On]:py-[48px] px-[30px] text-[#26262c] [&.On]:text-[#fff] text-center bg-[#fff] [&.On]:bg-[#4f2cde] rounded-[24px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)]`}>
                      <div className={`CenterCenter`}>
                        <img className={`group-[.On]:w-[300px] aspect-[262/244]`} src={`https://gifpng.com/262x244`} alt={``}/>
                      </div>
                      <div className={`mt-[40px] group-[.On]:mt-[50px] text-[18px] group-[.On]:text-[22px] font-[600] leading-[28px] group-[.On]:leading-[30px]`}>
                        {제목}
                      </div>
                      <div className={`mt-[20px] text-[16px] group-[.On]:text-[18px] font-[400] leading-[24px] group-[.On]:leading-[28px] line-clamp-3 group-[.On]:line-clamp-4`}>
                        {내용}
                      </div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={`HBox pt-[40px] pb-[98px] bg-[#f0eff6]`}>
          <div className={`Inner`}>
            <article className={`CenterCenter gap-[10px]`}>
              <div>
                <button className={`Button_3 Xl w-[242px]`}>서비스 문의하기</button>
              </div>
              <div>
                <button className={`Button_1 Xl w-[242px]`}>서비스 구독신청</button>
              </div>
            </article>
          </div>
        </section>
        <section className={`HBox mt-[90px]`}>
          <div className={`Inner`}>
            <div className={`text-[#26262c] text-[50px] font-[700] leading-[66px] text-center`}>
              <span className={`text-[#5d45ff]`}>애드플로러</span>와의 협업으로
              <br/>
              다양한 분야의 비지니스 성과를 높혀보세요.
            </div>
            <div className={`mt-[60px]`}>
              <article className={`CenterCenter`}>
                <a href={`https://www.google.com`} target={`_blank`}>
                  <img className={`rounded-[24px]`} src={`/image/2312191827.jpg`} alt={``}/>
                </a>
                <div className={`flex-1 px-[4.15%]`}>
                  <div className={`text-[#26262c] text-[34px] font-[700] leading-[46px]`}>
                    데이터 분석 자동화로 업무 효율이
                    <br/>
                    기존보다 30% 개선이 되었어요
                  </div>
                  <div className={`mt-[40px] text-[#26262c] text-[20px] font-[700] leading-[26px] line-clamp-2`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                  </div>
                  <div className={`mt-[16px] text-[#26262c] text-[18px] font-[400] leading-[26px] line-clamp-4`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                  </div>
                  <div className={`mt-[40px]`}>
                    <a className={`Button_1 Lg w-[222px]`} href={`https://www.google.com`} target={`_blank`}>
                      Case Study 바로가기
                      <img src={`/icon/2312191837.svg`} alt={``}/>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className={`HBox mt-[160px]`}>
          <div className={`Inner`}>
            <div className={`text-[#26262c] text-[50px] font-[700] leading-[66px] text-center`}>
              애드플로러와
              <br/>
              혁신을 만들어가는 파트너
            </div>
            <div className={`mt-[60px]`}>
              <ul className={`CenterCenter gap-[4.16%]`}>
                {[...Array(4).keys()].map((obj, idx) => {
                  const 로고 = `/icon/2312191908_${idx + 1}.svg`;

                  return (
                    <Fragment key={idx}>
                      <li>
                        <img src={로고} alt={``}/>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className={`HBox mt-[80px]`}>
          <div className={`Inner`}>
            <Swiper_6/>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}