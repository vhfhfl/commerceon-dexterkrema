'use client';

import DescBox_3 from '@/components/common/DescBox_3';
import DescList_4 from '@/components/common/DescList_4';
import TermsBox_1 from '@/components/common/TermsBox_1';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_7 from '@/components/swiper/Swiper_7';
import { Fragment } from 'react';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className="pb-[315px]">
        <section className="HBox mt-[100px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center">
              토큰 충전
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <div>
              <FormLabel_1 require={false}>토큰 충전 금액</FormLabel_1>
              <div className="mt-[8px]">
                <div className="CenterLeft">
                  <div className="TextInput_3 w-full">
                    <input placeholder="토큰 충전금액을 입력해주세요." />
                    <button className="ResetBtn">
                      <img src="/icon/input_delete.svg" alt="" />
                    </button>
                    <div className="text-[#26262c]">원</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[28px]">
              <article className="flex items-start flex-wrap gap-[16px]">
                {['10,000', '50,000', '100,000', '500,000'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className="Button_6 Sm w-[128px]">
                        + {obj}원
                      </button>
                    </Fragment>
                  );
                })}
              </article>
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <div className="ShadowBox_1">
              <div className="text-[#26262c] text-[16px] font-[600]">
                토큰 기준 안내
              </div>
              <div className="mt-[16px]">
                <DescList_4 />
              </div>
              <div className="mt-[24px]">
                <DescBox_3 />
              </div>
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[20px] font-[600]">
              결제 수단
            </div>
            <div className="mt-[28px] ShadowBox_1">
              <Swiper_7 />
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[20px] font-[600]">
              결제 상세내역
            </div>
            <div className="mt-[28px] ShadowBox_1">
              <ul className="space-y-[24px]">
                <li className="CenterBetween text-[#26262c] text-[16px] font-[400]">
                  <div>충전금액</div>
                  <div className="font-[600]">10,000 원</div>
                </li>
                <li className="CenterBetween text-[#26262c] text-[16px] font-[400]">
                  <div>부가세</div>
                  <div className="font-[600]">1,000 원</div>
                </li>
              </ul>
              <div className="Divider_2"></div>
              <article className="CenterBetween">
                <div className="text-[#26262c] text-[16px] font-[600]">
                  총 결제금액
                </div>
                <div className="text-[#5d45ff] text-[18px] font-[800]">
                  11,000 원
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <div className="text-[#26262c] text-[20px] font-[600]">
              약관동의
            </div>
            <div className="mt-[28px] ShadowBox_1 py-[16px]">
              <div className="CenterLeft">
                <label className="FormLabelBox">
                  <input className="Checkbox_1 Lg" type="checkbox" />
                  <div className="LabalUi">
                    <span className="mr-[4px] text-[#5D45FF]">(필수)</span>
                    모든 약관을 확인하고 전체 동의합니다.
                  </div>
                  <div className="ml-[8px] text-[#5d45ff] text-[14px] font-[400]">
                    필수항목, 선택항목 포함
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-[20px] ShadowBox_1 space-y-[48px]">
              {Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <TermsBox_1 />
                  </Fragment>
                );
              })}
            </div>
            <div className="mt-[36px] text-[#26262c] text-[18px] font-[600] text-center">
              위 내용을 확인하였으며, 결제 진행에 동의합니다.
            </div>
          </div>
        </section>
        <section className="HBox mt-[60px]">
          <div className="Inner2">
            <article className="CenterBetween gap-[16px]">
              <div className="grow">
                <button className="Button_1 Xl w-full">토큰 충전하기</button>
              </div>
              <div className="CenterCenter w-[214px] text-[#5d45ff] text-[20px] font-[800]">
                10,000원
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
