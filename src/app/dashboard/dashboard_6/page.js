'use client';

import Cpnt_13 from '@/components/common/Cpnt_13';
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
          <article className={`mt-[48px] CenterLeft`}>
            <div className={`Fc`}>
              <div className={`text-[#26262C] text-[16px] font-[700] leading-[16px]`}>
                디바이스
              </div>
            </div>
            <div className={`Fc ml-[80px]`}>
              <article className={`CenterLeft gap-[60px]`}>
                <label className={`FormLabelBox`}>
                  <input className={`RadioButton_1 Md`} type={`radio`}/>
                  <div className={`LabalUi`}>PC</div>
                </label>
                <label className={`FormLabelBox`}>
                  <input className={`RadioButton_1 Md`} type={`radio`}/>
                  <div className={`LabalUi`}>Mobile</div>
                </label>
              </article>
            </div>
          </article>
          <div className={`mt-[48px] border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
            <div className={`CenterCenter py-[20px]`}>
              <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                키워드 순위
              </div>
            </div>
            <div className={`border-t-[1px] border-t-[#E0DFEA] p-[16px]`}>
              <article className={`flex flex-row gap-[8px]`}>
                <div className={`Fc w-[28.26%]`}>
                  <div className={`mb-[16px] text-[#26262C] text-[16px] font-[700] leading-[16px]`}>
                    키워드 상세분석 순위
                  </div>
                  <div className={`DataGrid_1`}>
                    <div className={`GridHead`}>
                      <table>
                        <colgroup>
                          <col className={`w-[19.32%]`}/>
                          <col className={``}/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>순위</th>
                            <th>키워드</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className={`GridBody h-[369px]`}>
                      <table>
                        <colgroup>
                          <col className={`w-[19.32%]`}/>
                          <col className={``}/>
                        </colgroup>
                        <tbody>
                          {[...Array(30).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <tr>
                                  <td>{idx + 1}</td>
                                  <td className={`!text-left`}>
                                    키워드 {idx + 1}
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
                <div className={`Fc flex-1`}>
                  <div className={`mb-[16px] text-[#26262C] text-[16px] font-[700] leading-[16px]`}>
                    SERP Features
                  </div>
                  <article className={`flex flex-row gap-[10px]`}>
                    <div className={`Fc flex-1`}>
                      <div className={`DataGrid_1 NoScroll`}>
                        <div className={`GridHead`}>
                          <table>
                            <colgroup>
                              <col className={`w-[25%]`}/>
                              <col className={`w-[25%]`}/>
                              <col className={`w-[25%]`}/>
                            </colgroup>
                            <thead>
                              <tr>
                                <th>
                                  Keyword
                                  <br/>
                                  Volume
                                </th>
                                <th>Website</th>
                                <th>
                                  Feature
                                  <br/>
                                  <span className={`text-[#8C8A9A] text-[12px] font-[400] leading-[12px]`}>
                                    Organic
                                  </span>
                                </th>
                                <th>
                                  Feature
                                  <br/>
                                  <span className={`text-[#8C8A9A] text-[12px] font-[400] leading-[12px]`}>
                                    Paid
                                  </span>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div className={`GridBody`}>
                          <table>
                            <colgroup>
                              <col className={`w-[25%]`}/>
                              <col className={`w-[25%]`}/>
                              <col className={`w-[25%]`}/>
                            </colgroup>
                            <tbody>
                              <tr>
                                <td>422,000</td>
                                <td>79%</td>
                                <td>30</td>
                                <td>15</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className={`Fc w-[148px]`}>
                      <BlankBox className={`w-full h-full`}>
                        Chart Area
                      </BlankBox>
                    </div>
                  </article>
                  <article className={`mt-[8px]`}>
                    <div className={`DataGrid_1`}>
                      <div className={`GridHead`}>
                        <table>
                          <colgroup>
                            <col className={`w-[7.71%]`}/>
                            <col className={``}/>
                            <col className={`w-[18.62%]`}/>
                            <col className={`w-[18.62%]`}/>
                            <col className={`w-[12.75%]`}/>
                            <col className={`w-[19.46%]`}/>
                          </colgroup>
                          <thead>
                            <tr>
                              <th>순위</th>
                              <th>Website</th>
                              <th>Description</th>
                              <th>SERP Feature</th>
                              <th>Type</th>
                              <th>
                                Content
                                <br/>
                                Elements
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <div className={`GridBody h-[250px]`}>
                        <table>
                          <colgroup>
                            <col className={`w-[7.71%]`}/>
                            <col className={``}/>
                            <col className={`w-[18.62%]`}/>
                            <col className={`w-[18.62%]`}/>
                            <col className={`w-[12.75%]`}/>
                            <col className={`w-[19.46%]`}/>
                          </colgroup>
                          <tbody>
                            {[...Array(10).keys()].map((obj, idx) => {
                              return (
                                <Fragment key={idx}>
                                  <tr>
                                    <td>{idx + 1}</td>
                                    <td>
                                      <a href={`#`} target={`_blank`} className={`block truncate LinkBtn`}>
                                        www.google.com www.google.com www.google.com www.google.com
                                      </a>
                                    </td>
                                    <td>SERP Desc</td>
                                    <td>Organic</td>
                                    <td>Organic</td>
                                    <td>
                                      <article className={`CenterCenter gap-[4px]`}>
                                        {[...Array(3).keys()].map(
                                          (obj, idx) => {
                                            return (
                                              <Fragment key={idx}>
                                                <div className={`relative group`}>
                                                  <img src={`/icon/2312261218.svg`} alt={``}/>
                                                  <div className={`hidden group-hover:block ToolTip_2 top-full left-0 translate-y-[5px]`}>
                                                    TYPE 값 표시
                                                  </div>
                                                </div>
                                              </Fragment>
                                            );
                                          },
                                        )}
                                      </article>
                                    </td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </article>
                </div>
              </article>
            </div>
          </div>
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
                    SERP 기반 AI 추천 키워드 리스트
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
                  <div className={`DataGrid_1`}>
                    <div className={`GridHead`}>
                      <table>
                        <colgroup>
                          <col className={`w-[17.24%]`}/>
                          <col className={``}/>
                          <col className={`w-[40.22%]`}/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>순위</th>
                            <th>키워드</th>
                            <th>볼륨량 / (%)</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className={`GridBody h-[652px]`}>
                      <table>
                        <colgroup>
                          <col className={`w-[17.24%]`}/>
                          <col className={``}/>
                          <col className={`w-[40.22%]`}/>
                        </colgroup>
                        <tbody>
                          {[...Array(30).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <tr>
                                  <td>{idx + 1}</td>
                                  <td>
                                    <Cpnt_9/>
                                  </td>
                                  <td>422,000 / (1.7%)</td>
                                </tr>
                              </Fragment>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <article className={`mt-[16px]`}>
                    <button className={`Button_3 w-full`}>새로고침</button>
                  </article>
                </div>
              </div>
            </div>
            <div className={`Fc flex-1`}>
              <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
                <div className={`CenterCenter py-[20px]`}>
                  <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                    추천 키워드를 활용한 컨텐츠 종류별 아티클 주제 리스트
                  </div>
                </div>
                <div className={`border-t-[1px] border-t-[#E0DFEA] p-[16px]`}>
                  <div className={`text-[#A3A1B1] text-[14px] font-[500] leading-[24px]`}>
                    마음에 드는 페르소나를 선택하면, 컨텐츠 이미지를 생성할때
                    요소로 활용할 수 있습니다.
                  </div>
                  <LoadingBox_1 className={`mt-[20px]`}>
                    선택한 키워드를 활용하여 아티클 주제를 생성하고 있습니다.
                    <br/>
                    잠시만 기다려주세요.
                  </LoadingBox_1>
                  <article className={`mt-[20px]`}>
                    <button className={`Button_4 w-full`}>생성하기</button>
                  </article>
                  <article className={`mt-[28px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[8px] items-center justify-center`}>
                    {[...Array(6).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <div>
                            <button className={`${idx == 0 ? 'On' : ''} Button_6 w-full`}>
                              Button
                            </button>
                          </div>
                        </Fragment>
                      );
                    })}
                  </article>
                  <article className={`mt-[18px] space-y-[12px] h-[487px] overflow-y-scroll`}>
                    {[...Array(10).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <Cpnt_13/>
                        </Fragment>
                      );
                    })}
                  </article>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section>
        <article className={`CenterCenter gap-[10px]`}>
          <div className={`Fc`}>
            <button className={`Button_3 Xl w-[245px]`}>Lorem Ipsum</button>
          </div>
          <div className={`Fc`}>
            <button className={`Button_1 Xl w-[245px]`}>Lorem Ipsum</button>
          </div>
        </article>
      </section>
    </>
  );
}