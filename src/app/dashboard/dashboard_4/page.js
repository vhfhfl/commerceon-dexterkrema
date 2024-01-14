'use client';

import Cpnt_2 from '@/components/common/Cpnt_2';
import Cpnt_8 from '@/components/common/Cpnt_8';
import Cpnt_9 from '@/components/common/Cpnt_9';
import LoadingBox_1 from '@/components/common/LoadingBox_1';
import StepBox_1 from '@/components/common/StepBox_1';
import BlankBox from '@/components/etc/BlankBox';
import {Fragment} from 'react';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1/>
        <div className={`mt-[24px] WhiteBox`}>
          <WhiteBoxTitle_1>Keyword 군집분석</WhiteBoxTitle_1>
          <div className={`mt-[48px]`}>
            <Cpnt_8/>
          </div>
          <article className={`mt-[48px] flex flex-row gap-[14px]`}>
            <div className={`Fc w-[376px]`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    퍼널 내 볼륨 비중
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[16px_25px]`}>
                  <BlankBox className={`h-[285px]`}>Chart Area</BlankBox>
                </div>
              </div>
            </div>
            <div className={`Fc flex-1`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    키워드 볼륨 순위
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
                  <div className={`DataGrid_1 NoScroll`}>
                    <div className={`GridHead`}>
                      <table>
                        <colgroup>
                          <col className={`w-[10.20%]`}/>
                          <col className={``}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>순위</th>
                            <th>키워드</th>
                            <th>볼륨</th>
                            <th>점유율(%)</th>
                            <th>CPC</th>
                            <th>경쟁도</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className={`GridBody`}>
                      <table>
                        <colgroup>
                          <col className={`w-[10.20%]`}/>
                          <col className={``}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                          <col className={`w-[16.15%]`}/>
                        </colgroup>
                        <tbody>
                          {[...Array(5).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <tr>
                                  <td>{idx + 1}</td>
                                  <td>
                                    <Cpnt_9/>
                                  </td>
                                  <td>1,200</td>
                                  <td>00%</td>
                                  <td>3.35</td>
                                  <td>
                                    <div className={`CenterCenter h-full`}>
                                      {idx == 0 && (
                                        <div className={`text-center mx-auto w-[65px] bg-[#F8E1E6] text-[#F3436D] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}>
                                          High
                                        </div>
                                      )}
                                      {idx == 1 && (
                                        <div className={`text-center mx-auto w-[65px] bg-[#FAECE6] text-[#FB9F5D] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}>
                                          Medium
                                        </div>
                                      )}
                                      {idx != 0 && idx != 1 && (
                                        <div className={`text-center mx-auto w-[65px] bg-[#F0EFF6] text-[#5D45FF] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}>
                                          Low
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              </Fragment>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <article className={`mt-[24px] CenterCenter`}>
                    <button className={`Button_4 Sm w-full`}>
                      순위 더보기
                    </button>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <Cpnt_2/>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <article className={`flex flex-row gap-[14px]`}>
            <div className={`Fc w-[376px]`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    키워드 트랜드 분석
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
                  <div className={`text-center text-[#A3A1B1] text-[14px] font-[500]`}>
                    키워드 트렌드를 분석하여 변화추이를 확인해보세요.
                  </div>
                </div>
              </div>
            </div>
            <div className={`Fc flex-1`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    키워드 트랜드 변화추이
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
                  <div className={`text-center text-[#A3A1B1] text-[14px] font-[500]`}>
                    키워드 트렌드를 분석하여 변화추이를 확인해보세요.
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <article className={`flex flex-row gap-[14px]`}>
            <div className={`Fc flex-1`}>
              <article className={`w-full flex flex-row gap-[8px]`}>
                <div className={`Fc flex-1`}>
                  <button className={`Button_6 On Sm w-full`}>
                    Season Keyword
                  </button>
                </div>
                <div className={`Fc flex-1`}>
                  <button className={`Button_6 Sm w-full`}>
                    Trend Keyword
                  </button>
                </div>
              </article>
              <div className={`mt-[10px]`}>
                <div className={`DataGrid_1`}>
                  <div className={`GridHead`}>
                    <table>
                      <colgroup>
                        <col className={`w-[10.46%]`}/>
                        <col className={``}/>
                        <col className={`w-[13.37%]`}/>
                        <col className={`w-[28.48%]`}/>
                      </colgroup>
                      <thead>
                        <tr>
                          <th></th>
                          <th>키워드</th>
                          <th>점수</th>
                          <th>트렌드</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className={`GridBody h-[221px]`}>
                    <table>
                      <colgroup>
                        <col className={`w-[10.46%]`}/>
                        <col className={``}/>
                        <col className={`w-[13.37%]`}/>
                        <col className={`w-[28.48%]`}/>
                      </colgroup>
                      <tbody>
                        {[...Array(10).keys()].map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <tr>
                                <td>
                                  <input className={`mx-auto block Checkbox_1 Sm`} type={`checkbox`}/>
                                </td>
                                <td>
                                  <Cpnt_9/>
                                </td>
                                <td>1</td>
                                <td>
                                  <BlankBox className={`mx-auto w-[57px] h-[24px]`}>
                                    Chart
                                  </BlankBox>
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
            <div className={`Fc w-[484px]`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    키워드 트랜드 변화추이
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
                  <BlankBox className={`h-[381px]`}>Chart Area</BlankBox>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <div className={`text-[#26262C] text-[18px] font-[600]`}>
            기간별 키워드 특성
          </div>
          <LoadingBox_1 className={`mt-[24px]`}>
            기간별 키워드에 대한 인사이트를 얻는중입니다.
            <br/>
            잠시만 기다려주세요.
          </LoadingBox_1>
        </div>
      </section>
      <section>
        <Cpnt_2/>
      </section>
      <section>
        <article className={`CenterCenter gap-[10px]`}>
          <div className={`Fc`}>
            <button className={`Button_3 Xl w-[245px]`}>Lorem Ipsum</button>
          </div>
          <div className={`Fc`}>
            <button className={`Button_1 Xl w-[245px]`} disabled={true}>
              Lorem Ipsum
            </button>
          </div>
        </article>
      </section>
    </>
  );
}