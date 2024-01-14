'use client';

import Footer_1_mo from '@/components/layout/Footer_1_mo';
import Header_1_sm from '@/components/layout/Header_1_sm';
import Data_2312200846 from '@/dummy/Data_2312200846';
import HTMLReactParser from 'html-react-parser';

import {Fragment} from 'react';
import Textarea_3 from '@/components/textinput/Textarea_3';
import Data_2312211940 from '@/dummy/Data_2312211940';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Page() {
  return (
    <>
      <Header_1_sm/>
      <main className={`pb-[254px] overflow-hidden`}>
        <section className={`HBox py-[40px] bg-[#1c1c20]`}>
          <div className={`InnerMo`}>
            <div className={`text-[#fff] text-[22px] font-[400]`}>
              초개인화 마케팅 커뮤니케이션의 A to Z를 한번에
            </div>
            <div className={`mt-[20px] Montserrat text-[#fff] text-[40px] font-[700] leading-[48px]`}>
              초개인화 마케팅
              <br/>
              AI solution
              <br/>
              ADplorer
            </div>
            <div className={`mt-[32px] text-[#fff] text-[18px] font-[400] leading-[28px]`}>
              Adplorer는 흩어져 있는 고객의 데이터를 연결하여 시장 분석, 마케팅전략 수립은 물론, 콘텐츠를 제작하고 효과 예측까지 가능한 통합 서비스를 제공합니다.
              <br/>
              AIgency로 도약하는 우리가 여러분의 아이디어를 현실로 만들어 드립니다.
            </div>
            <div className={`mt-[32px]`}>
              <img src={`/icon/2312201146.svg`} alt={``}/>
            </div>
          </div>
        </section>
        <section className={`HBox py-[40px] bg-[#1c1c20]`}>
          <div className={`InnerMo`}>
            <ul className={`space-y-[20px]`}>
              {Data_2312200846.map((obj, idx) => {
                const {아이콘, 제목, 내용} = obj;
                return (
                  <Fragment key={idx}>
                    <li className={`min-h-[352px] p-[28px] bg-[#26262c] border-[1px] border-solid border-[#3d3c42] rounded-[24px]`}>
                      <div>
                        <img src={아이콘} alt={``}/>
                      </div>
                      <div className={`mt-[12px] text-[#fff] text-[18px] font-[600] leading-[28px]`}>
                        {HTMLReactParser(제목)}
                      </div>
                      <div className={`mt-[22px] text-[#f0eff6] text-[16px] font-[400] leading-[24px]`}>
                        {내용}
                      </div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={`HBox pt-[72px] bg-[#f0eff6]`}>
          <div className={`InnerMo`}>
            <div className={`text-[#26262c] text-[24px] font-[700] leading-[32px] text-center`}>
              컨텐츠 생성형 마케팅 솔루션
              <br/>
              <span className={`text-[#5d45ff]`}>애드플로러</span>로 시작하세요.
            </div>
          </div>
        </section>
        <section className={`HBox pt-[40px] bg-[#f0eff6]`}>
          <div className={`InnerMo`}>
            <ul className={`CenterCenter gap-[8px]`}>
              {['고객 검색 여정 분석', '키워드 세부 분석', '노출 콘텐츠 분석', '타겟 페르소나 생성', '고객 VOC 컨텐츠 분석', '컨텐츠 아티클 / 이미지생성', '1:1 문의 서비스(TBU)'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li>
                      <button className={`${idx == 4 && `On`} group CenterCenter inline-flex py-[10px] pl-[10px] pr-[14px] bg-[#fff] rounded-[24px] text-[#26262c] [&.On]:text-[#5d45ff] text-[14px] font-[600] text-left`}>
                        <img className={`group-[.On]:hidden`} src={`/icon/2312191151_${idx+1}.svg`} alt={``}/>
                        <img className={`hidden group-[.On]:block`} src={`/icon/2312191151_${idx+1}_on.svg`} alt={``}/>
                        <div className={`ml-[8px]`}>
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
          </div>
        </section>
        <section className={`HBox pt-[36px] pb-[96px] bg-[#f0eff6]`}>
          <div className={`InnerMo relative`}>
            <article className={`CenterBetween absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[320px] aspect-[320/360] pointer-events-none`}>
              <button className={`pointer-events-auto`}>
                <img src={`/icon/swiper/prev_btn_3.svg`} alt={``}/>
              </button>
              <button className={`pointer-events-auto`}>
                <img src={`/icon/swiper/next_btn_3.svg`} alt={``}/>
              </button>
            </article>
            <ul className={`flex items-start justify-center gap-[16px]`}>
              {Data_2312211940.map((obj, idx) => {
                const {제목, 내용} = obj;

                return (
                  <Fragment key={idx}>
                    <li className={`${idx == 3 && `On`} w-[280px] h-[360px] p-[20px] text-[#26262c] [&.On]:text-[#fff] text-center bg-[#fff] [&.On]:bg-[#4f2cde] rounded-[24px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)]`}>
                      <div className={`CenterCenter`}>
                        <img className={`aspect-[140/128]`} src={`https://gifpng.com/140x128`} alt={``}/>
                      </div>
                      <div className={`mt-[24px] text-[16px] font-[600] leading-[24px]`}>
                        {제목}
                      </div>
                      <div className={`mt-[20px] text-[14px] font-[400] leading-[20px] line-clamp-4`}>
                        {내용}
                      </div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={`HBox mt-[72px]`}>
          <div className={`InnerMo`}>
            <div className={`text-[#26262c] text-[24px] font-[700] leading-[32px]`}>
              서비스에 대해서
              <br/>
              무엇이든 물어보세요
            </div>
            <ul className={`mt-[24px] space-y-[8px]`}>
              {['매출이 고민이신 자영업자', '광고비 효율이 안나오는 대표님', '사수가 없어 힘든 마케터', '마케터가 되고 싶은 타 업종 직장인'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li className={`flex items-start`}>
                      <img src={`/icon/2312211336.svg`} alt={``}/>
                      <div className={`flex-1 ml-[8px]`}>{obj}</div>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={`HBox mt-[40px]`}>
          <div className={`InnerMo`}>
            <div className={`py-[48px] px-[20px] border-[1px] border-solid border-[#e0dfea] rounded-[24px]`}>
              <div className={`text-[#26262c] text-[18px] font-[700] leading-[24px]`}>
                컨텐츠 기획부터 운영까지
                <br/>
                모든 문제를 해결해 드립니다.
                <br/>
                <span className={`text-[#5d45ff]`}>지금 바로</span> 문의주세요.
              </div>
              <ul className={`mt-[40px] space-y-[32px]`}>
                {['회사명', '성명', '연락처', '이메일 주소', '웹사이트'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li>
                        <FormLabel_1>{obj}</FormLabel_1>
                        <div className={`mt-[4px]`}>
                          <div className={`CenterLeft`}>
                            <div className={`TextInput_3 w-full`}>
                              <input placeholder={`placeholder`}/>
                              <button className={`ResetBtn`}>
                                <img src={`/icon/input_delete.svg`} alt={``}/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
                {['산업 카테고리', '유입경로', '마케팅 예산'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li>
                        <FormLabel_1>{obj}</FormLabel_1>
                        <div className={`mt-[4px]`}>
                          <select className={`SelectBox_2 Lg`} defaultValue={``}>
                            <option value={``} disabled={true} hidden={true}>
                              카테고리를 선택해주세요.
                            </option>
                            <option value={`aaa`}>AAA</option>
                            <option value={`bbb`}>BBB</option>
                            <option value={`ccc`}>CCC</option>
                          </select>
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
                <li>
                  <FormLabel_1>문의제목</FormLabel_1>
                  <div className={`mt-[4px]`}>
                    <div className={`CenterLeft`}>
                      <div className={`TextInput_3 w-full`}>
                        <input placeholder={`placeholder`}/>
                        <button className={`ResetBtn`}>
                          <img src={`/icon/input_delete.svg`} alt={``}/>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className={`mt-[40px]`}>
                <Textarea_3/>
              </div>
            </div>
          </div>
        </section>
        <section className={`HBox mt-[40px]`}>
          <div className={`InnerMo`}>
            <button className={`Button_1 Lg w-full`}>문의 등록하기</button>
          </div>
        </section>
      </main>
      <Footer_1_mo/>
    </>
  );
}