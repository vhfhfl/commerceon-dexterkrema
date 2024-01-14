'use client';
import OptionBox_1 from '@/components/common/OptionBox_1';
import RadioBox_1 from '@/components/common/RadioBox_1';
import Star_1 from '@/components/common/Star_1';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import { layerControl } from '@/js/common';
import { Fragment } from 'react';

export default function Modal_8() {
  return (
    <>
      <div className={`flex flex-row gap-[0] w-[794px] h-full`}>
        <div className={`Fc`}>
          <button onClick={layerControl.Off}>
            <img src="/icon/2312260800.svg" alt="" />
          </button>
        </div>
        <div className={`Fc flex-1 bg-white p-[80px_60px] overflow-auto`}>
          <ModalTitle_1>프로젝트 타이틀</ModalTitle_1>
          <section className={`mt-[40px]`}>
            <article
              className={`grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[8px_7px] items-center justify-center`}
            >
              {[...Array(8).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <button className={`Button_6 w-full`}>
                        Text <Star_1 /> / Text
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </section>
          <section className={`mt-[56px]`}>
            <FormLabel_1 className={`mt-[40px]`} require={false}>
              페르소나 선택
            </FormLabel_1>
            <div
              className={`mt-[16px] text-[#3D3C42] text-[14px] font-[400] leading-[1em]`}
            >
              생성형 컨텐츠(타겟 페르소나 생성)에서 '☆표'를 체크한 페르소나가
              노출됩니다.
            </div>
            <article className={`mt-[32px]`}>
              <button className={`Button_4 Sm w-full`}>
                타겟 페르소나 페이지로 이동
              </button>
            </article>
            <OptionBox_1
              className={`mt-[56px]`}
              text_1="인물노출 옵션 추가하기"
              text_2="설정하면 컨텐츠에 인물이 추가가 됩니다."
            />
            <div className={`mt-[24px] space-y-[40px] h-[976px] overflow-auto`}>
              {[...Array(10).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <RadioBox_1 />
                  </Fragment>
                );
              })}
            </div>
            <article className={`mt-[56px] CenterBetween`}>
              <div>
                <button className={`Button_3 Sm w-[120px]`}>이전 단계</button>
              </div>
              <div>
                <button className={`Button_3 Sm w-[120px]`}>다음 단계</button>
              </div>
            </article>
          </section>
          <section className={`mt-[56px]`}>
            <button className={`Button_1 Xl w-full`}>등록하기</button>
          </section>
        </div>
      </div>
    </>
  );
}
