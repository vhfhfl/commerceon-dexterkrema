'use client';

import Cpnt_13 from '@/components/common/Cpnt_13';
import Cpnt_2401040842 from '@/components/common/Cpnt_2401040842';
import Cpnt_2401040853 from '@/components/common/Cpnt_2401040853';
import LoadingBox_1 from '@/components/common/LoadingBox_1';
import StepBox_1 from '@/components/common/StepBox_1';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1 />
        <div className={`mt-[24px] WhiteBox`}>
          <WhiteBoxTitle_1>컨텐츠 아티클 및 이미지 생성</WhiteBoxTitle_1>
          <div className={`mt-[24px] rounded-[12px] bg-[#F0EFF6] p-[24px]`}>
            <article className={`CenterLeft`}>
              <div className={`Fc`}>
                <div
                  className={`text-[#3D3C42] text-[14px] font-[600] leading-[14px]`}
                >
                  컨텐츠생성
                </div>
              </div>
              <div className={`Fc flex-1 ml-[82px]`}>
                <article className={`CenterLeft gap-[8px]`}>
                  <button className={`Button_6 Sm !rounded-[50px] w-[80px]`}>
                    조건 설정
                  </button>
                  {[...Array(5).keys()].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`${idx == 1 ? 'On' : ''} Btn_8`}>
                          조건 {idx + 1}
                          <img
                            className={`ml-[4px]`}
                            src={`/icon/2312261558.svg`}
                            alt={``}
                          />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </article>
            <div
              className={`mt-[24px] text-[#5D45FF] text-[14px] font-[400] leading-[14px]`}
            >
              *조건은 최대 5개까지 설정이 가능합니다.
            </div>
          </div>
          <article className={`mt-[24px] CenterCenter gap-[8px]`}>
            {[...Array(6).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`Fc flex-1`}>
                    <button
                      className={`${idx == 0 ? 'On' : ''} Button_6 w-full`}
                    >
                      Lorem Ipsum
                    </button>
                    <button
                      className={`mt-[8px] w-full Button_6 Sm !rounded-[50px]`}
                    >
                      Lorem Ipsum
                    </button>
                  </div>
                </Fragment>
              );
            })}
          </article>
          <article className={`mt-[24px]`}>
            <button className={`Button_4 w-full`}>컨텐츠 주제 생성하기</button>
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
          <div className={`mt-[60px] rounded-[12px] bg-[#F0EFF6] p-[24px]`}>
            <article className={`CenterBetween`}>
              <div className={`Fc`}>
                <div
                  className={`text-[#A3A1B1] text-[14px] font-[500] leading-[24px]`}
                >
                  배너광고 카피는 광고 추가 혜택(요소) 조건이
                  필수입력항목입니다. 카피 생성이 안되는 경우
                  <br />
                  조건설정에서 해당 항목을 입력해주세요.
                </div>
              </div>
              <div className={`Fc`}>
                <div
                  className={`text-[#5D45FF] text-[16px] font-[500] leading-[16px]`}
                >
                  추가 혜택(요소) 입력하기 &gt;
                </div>
              </div>
            </article>
          </div>
          <LoadingBox_1 className={`mt-[60px]`}>
            선택한 키워드를 활용하여 VOC 기반 컨텐츠를 생성하고 있습니다.
            <br />
            잠시만 기다려주세요.
          </LoadingBox_1>
          <div className={`mt-[24px]`}>
            <ul className={`space-y-[24px]`}>
              {[...Array(3).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li className={`bg-[#F0EFF6] rounded-[12px] p-[24px]`}>
                      <article className={`flex flex-row gap-[14px]`}>
                        <div className={`Fc w-[210px]`}>
                          <Cpnt_2401040853 />
                        </div>
                        <div className={`Fc flex-1`}>
                          <Cpnt_2401040842 />
                        </div>
                      </article>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <div className={`mt-[24px]`}>
            <ul className={`space-y-[24px]`}>
              {[...Array(3).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li className={`bg-[#F0EFF6] rounded-[12px] p-[24px]`}>
                      <Cpnt_2401040842 />
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <article className={`mt-[24px] CenterBetween`}>
            <div className={`Fc`}>{/**/}</div>
            <div className={`Fc`}>
              <button className={`Button_4 Lg w-[200px]`}>
                영상 제작 1:1 문의하기
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
