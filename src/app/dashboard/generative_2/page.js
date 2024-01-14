'use client';

import Cpnt_12 from '@/components/common/Cpnt_12';
import Cpnt_13 from '@/components/common/Cpnt_13';
import Cpnt_7 from '@/components/common/Cpnt_7';
import InquiryForm_3 from '@/components/common/InquiryForm_3';
import StepBox_1 from '@/components/common/StepBox_1';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import BlankBox from '@/components/etc/BlankBox';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1 />
        <InquiryForm_3 className={`mt-[24px]`} />
      </section>
      <section>
        <article className={`flex flex-row gap-[15px]`}>
          <div className={`Fc flex-1`}>
            <div className={`WhiteBox`}>
              <div>
                <div className={`text-[#26262C] text-[18px] font-[600]`}>
                  VOC 워드카운트
                </div>
                <div
                  className={`mt-[16px] text-[#8C8A9A] text-[16px] font-[400] leading-[24px]`}
                >
                  키워드를 클릭하면 해당 키워드의 RawData를
                  <br />
                  확인하실 수 있습니다.
                </div>
              </div>
              <article className={`mt-[24px] flex gap-[14px]`}>
                {[...Array(2).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`Fc flex-1`}>
                        <Cpnt_7 />
                      </div>
                    </Fragment>
                  );
                })}
              </article>
            </div>
          </div>
          <div className={`Fc w-[33.73%]`}>
            <div className={`WhiteBox`}>
              <div>
                <div className={`text-[#26262C] text-[18px] font-[600]`}>
                  VOC수집매체
                </div>
                <div
                  className={`mt-[16px] text-[#8C8A9A] text-[16px] font-[400] leading-[24px]`}
                >
                  수집된 채널명을 클릭하면 채널별
                  <br />
                  RawData를 확인하실 수 있습니다.
                </div>
              </div>
              <article className={`mt-[24px]`}>
                <div className={`Fc`}>
                  <Cpnt_7 />
                </div>
              </article>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <div className={`text-[#26262C] text-[18px] font-[600]`}>
            VOC 긍/부정 그래프
          </div>
          <article className={`mt-[24px] flex gap-[24px]`}>
            {[...Array(2).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`Fc flex-1`}>
                    <div
                      className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}
                    >
                      <div className={`CenterCenter py-[20px]`}>
                        <div
                          className={`bg-[#5D45FF] w-[20px] aspect-square rounded-[4px]`}
                        ></div>
                        <div
                          className={`bg-[#F3436D] w-[20px] aspect-square rounded-[4px]`}
                        ></div>
                        <div
                          className={`ml-[8px] text-[#26262C] text-[16px] font-[600] leading-[16px]`}
                        >
                          Lorem Ipsum
                        </div>
                      </div>
                      <div
                        className={`border-t-[1px] border-t-[#E0DFEA] p-[40px_24px]`}
                      >
                        <BlankBox className={`h-[180px]`}>Chart Area</BlankBox>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </article>
        </div>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <div className={`text-[#26262C] text-[18px] font-[600]`}>
            VOC 주요 키워드 긍/부정 요약
          </div>
          <div className={`mt-[24px]`}>
            <div className={`DataGrid_1`}>
              <div className={`GridHead Light`}>
                <table>
                  <colgroup>
                    <col className={`w-[13.72%]`} />
                    <col className={`w-[42.33%]`} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>특정 키워드</th>
                      <th>긍정</th>
                      <th>부정</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={`GridBody h-[344px]`}>
                <table>
                  <colgroup>
                    <col className={`w-[13.72%]`} />
                    <col className={`w-[42.33%]`} />
                  </colgroup>
                  <tbody>
                    {[...Array(10).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <tr>
                            <td className={`!bg-[#F0EFF6] !font-[600]`}>
                              Lorem {idx}
                            </td>
                            <td>
                              <Cpnt_12 />
                            </td>
                            <td>
                              <Cpnt_12 />
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <WhiteBoxTitle_1>VOC 기반 컨텐츠 주제 생성</WhiteBoxTitle_1>
          <article
            className={`CenterLeft mt-[24px] rounded-[12px] bg-[#F0EFF6] py-[24px] px-[20px]`}
          >
            <div className={`Fc`}>
              <div
                className={`text-[#3D3C42] text-[14px] font-[600] leading-[14px]`}
              >
                주요 키워드
              </div>
            </div>
            <div className={`Fc flex-1 ml-[78px]`}>
              <article>
                <button
                  className={`inline-flex Button_6 Sm !rounded-[50px] w-[97px] mx-[4px] my-[8px]`}
                >
                  키워드 선택
                </button>
                {[...Array(30).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`inline-flex Btn_8 mx-[4px] my-[8px]`}>
                        키워드 선택
                        <img src={`/icon/2312261558.svg`} alt={``} />
                      </button>
                    </Fragment>
                  );
                })}
              </article>
            </div>
          </article>
          <article className={`mt-[24px]`}>
            <button className={`Button_4 w-full`}>컨텐츠 주제 생성하기</button>
          </article>
          <article className={`mt-[60px] CenterCenter gap-[8px]`}>
            {[...Array(6).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`Fc flex-1`}>
                    <button
                      className={`${idx == 0 ? 'On' : ''} Button_6 w-full`}
                    >
                      Lorem Ipsum
                    </button>
                    <button className={`mt-[8px] w-full Btn_9`}>
                      Lorem Ipsum
                    </button>
                  </div>
                </Fragment>
              );
            })}
          </article>
          <article
            className={`mt-[60px] bg-[#F0EFF6] p-[24px] rounded-[12px] space-y-[8px]`}
          >
            {[...Array(5).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <Cpnt_13 />
                </Fragment>
              );
            })}
          </article>
          <div className={`mt-[60px] rounded-[12px] bg-[#F0EFF6] p-[24px]`}>
            <div
              className={`text-[#A3A1B1] text-[14px] font-[500] text-center`}
            >
              컨텐츠종류와 주요키워드를 입력하고,생성하기 버튼을 클릭하면 VOC
              기반 컨텐츠가 생성됩니다.
            </div>
          </div>
          <div
            className={`mt-[60px] bg-[rgba(38,38,44,0.6)] py-[19px] rounded-[12px]`}
          >
            <div className={`CenterCenter`}>
              <div>
                <div>
                  <img
                    className={`mx-auto`}
                    src={`/icon/2312261029.svg`}
                    alt={``}
                  />
                </div>
                <div
                  className={`mt-[20px] text-center text-[#FFF] text-[16px] font-[500]`}
                >
                  선택한 키워드를 활용하여 VOC 기반 컨텐츠를 생성하고 있습니다.
                  <br />
                  잠시만 기다려주세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <article className={`CenterCenter`}>
          <button className={`Button_1 Xl w-[245px]`}>Lorem Ipsum</button>
        </article>
      </section>
    </>
  );
}