'use client';
import Star_1 from '@/components/common/Star_1';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import { layerControl } from '@/js/common';
import { Fragment } from 'react';

export default function Modal_6() {
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
            <FormLabel_1>컨텐츠 종류 선택</FormLabel_1>
            <div className={`mt-[40px] space-y-[28px]`}>
              {Array.from(Array(10)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <label className={`FormLabelBox !justify-start`}>
                      <input className={`RadioButton_1 Md`} type={`radio`} />
                      <div className={`LabalUi`}>
                        키워드별 아티클 주제리스트
                      </div>
                    </label>
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