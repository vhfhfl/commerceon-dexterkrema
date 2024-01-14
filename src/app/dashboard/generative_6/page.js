'use client';

import Cpnt_14 from '@/components/common/Cpnt_14';
import StepBox_1 from '@/components/common/StepBox_1';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import BlankBox from '@/components/etc/BlankBox';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1/>
      </section>
      <section>
        <article className={`flex flex-row gap-[10px]`}>
          <div className={`Fc flex-1`}>
            <div className={`space-y-[14px]`}>
              <div className={`WhiteBox`}>
                <WhiteBoxTitle_1>웹문서 컨텐츠</WhiteBoxTitle_1>
                <div className={`mt-[24px]`}>
                  <ul className={`space-y-[24px]`}>
                    <li className={`bg-[#F0EFF6] rounded-[12px] p-[24px]`}>
                      <article className={`flex flex-col h-full`}>
                        <div className={`Fc`}>
                          <article className={`CenterBetween`}>
                            <div className={`Fc`}>
                              <article className={`CenterLeft gap-[4px]`}>
                                {[...Array(3).keys()].map((obj, idx) => {
                                  return (
                                    <Fragment key={idx}>
                                      <button className={`${idx == 0 ? 'On' : ''} Btn_9`}>
                                        Button
                                      </button>
                                    </Fragment>
                                  );
                                })}
                              </article>
                            </div>
                            <div className={`Fc`}>
                              {/*<button className={`Button_3 Sm w-[117px]`}>*/}
                              {/*  Button*/}
                              {/*</button>*/}
                            </div>
                          </article>
                        </div>
                        <div className={`Fc flex-1 mt-[8px]`}>
                          <Cpnt_14/>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`WhiteBox`}>
                <WhiteBoxTitle_1>선택한 페르소나</WhiteBoxTitle_1>
                <div className={`mt-[24px]`}>
                  <ul className={`space-y-[24px]`}>
                    <li className={`bg-[#F0EFF6] rounded-[12px] p-[24px]`}>
                      <article className={`flex flex-row gap-[10px]`}>
                        <div className={`Fc w-[194px]`}>
                          <div className={`bg-white border-solid border-[1px] border-[#E0DFEA] p-[16px] rounded-[12px]`}>
                            <img className={`mx-auto rounded-[12px]`} src={`https://gifpng.com/162x162`} alt={``}/>
                          </div>
                        </div>
                        <div className={`Fc flex-1`}>
                          <Cpnt_14 className={`h-[193px]`}/>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`WhiteBox`}>
                <WhiteBoxTitle_1>선택한 페르소나2</WhiteBoxTitle_1>
                <div className={`mt-[24px]`}>
                  <ul className={`space-y-[24px]`}>
                    <li className={`bg-[#F0EFF6] rounded-[12px] p-[24px]`}>
                      <Cpnt_14/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`WhiteBox`}>
                <WhiteBoxTitle_1>원하는 배경 조건 설정</WhiteBoxTitle_1>
                <ul className={`mt-[24px] p-[16px] bg-[#F0EFF6] space-y-[16px] rounded-[12px]`}>
                  {[...Array(5).keys()].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <article className={`flex flex-row gap-[8px]`}>
                            <div className={`Fc w-[120px]`}>
                              <div className={`h-full CenterCenter text-[#26262C] text-[14px] font-[600]`}>
                                Lorem Ipsum
                              </div>
                            </div>
                            <div className={`Fc flex-1`}>
                              <div className='TextInput_1 w-full'>
                                <input placeholder='Lorem Ipsum is simply dummy text'/>
                              </div>
                            </div>
                          </article>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
              <div className={`WhiteBox`}>
                <WhiteBoxTitle_1>제품 누끼 이미지 설정</WhiteBoxTitle_1>
                <article className={`mt-[16px] CenterBetween`}>
                  <div className={`flex-1`}>
                    <div className={`text-[#8C8A9A] text-[16px] font-[400] leading-[24px]`}>
                      생성할 이미지에 노출될 배경이 없는 제품의 누끼 이미지를
                      등록해주세요. (*확장자 : png)
                    </div>
                  </div>
                  <div>
                    <button className={`Button_3 w-[128px]`}>
                      이미지 등록
                    </button>
                  </div>
                </article>
                <article className={`mt-[24px] bg-[#F0EFF6] p-[16px] rounded-[12px]`}>
                  <img src={`/icon/2312291031.svg`} alt={``}/>
                </article>
              </div>
            </div>
          </div>
          <div className={`Fc w-[304px]`}>
            <div className={`WhiteBox`}>
              <WhiteBoxTitle_1>브랜드 컬러 설정</WhiteBoxTitle_1>
              <div className={`mt-[24px]`}>
                <BlankBox className={`h-[630px]`}>ColorPicker</BlankBox>
              </div>
            </div>
          </div>
        </article>
        <article className={`mt-[15px]`}>
          <button className={`Button_4 Lg w-full`}>이미지 생성하기</button>
        </article>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <WhiteBoxTitle_1>생성 이미지</WhiteBoxTitle_1>
          <article className={`mt-[16px] CenterBetween gap-[10px]`}>
            <div className={`Fc`}>
              <div className={`text-[#8C8A9A] text-[16px] font-[400] leading-[24px]`}>
                원하는 이미지가 없을 경우, 새로고침 또는 이전 설정으로 돌아가
                <br/>
                컨텐츠 아티클의 조건을 변경하여 새로 생성해주시기 바랍니다.
              </div>
            </div>
            <div className={`Fc`}>
              <button className={`Button_3 Sm w-[117px]`}>새로고침</button>
            </div>
          </article>
          <article className={`mt-[24px] bg-[#F0EFF6] p-[16px] rounded-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[20px] items-center justify-center`}>
            {[...Array(6).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`${idx == 0 ? 'On' : ''} group relative rounded-[12px] overflow-hidden`}>
                    <img className={`w-full`} src={`https://gifpng.com/262x262`} alt={``}/>
                    <div className={`hidden group-[.On]:block rounded-[12px] z-10 absolute top-[0] left-[0] w-full h-full border-solid border-[6px] border-[#5D45FF]`}></div>
                  </div>
                </Fragment>
              );
            })}
          </article>
        </div>
        <article className={`mt-[40px] CenterCenter gap-[10px]`}>
          <button className={`Button_3 Xl w-[245px]`}>이전 단계로 이동</button>
          <button className={`Button_1 Xl w-[245px]`}>이미지 에디팅</button>
        </article>
      </section>
    </>
  );
}