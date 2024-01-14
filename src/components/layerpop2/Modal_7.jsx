'use client';
import Star_1 from '@/components/common/Star_1';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import { layerControl } from '@/js/common';
import { Fragment } from 'react';

export default function Modal_7() {
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
            <FormLabel_1 className={`mt-[40px]`} require={false}>USP / URL 입력</FormLabel_1>
            <FormLabel_1 className={`mt-[40px]`}>USP 입력</FormLabel_1>
            <article className={`mt-[32px]`}>
              <button className={`Button_4 Sm w-full`}>요소 추가</button>
            </article>
            <div className="mt-[32px] TextInput_3 Lg w-full">
              <input placeholder="Lorem Ipsum is simply dummy text." />
              <button>
                <img
                  className={`w-[24px]`}
                  src="/icon/input_delete.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="mt-[12px] FormMsg Type3">
              Lorem Ipsum is simply dummy text.
            </div>
            {[...Array(4).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className="mt-[24px] TextInput_3 Lg w-full">
                    <input placeholder="부가적인 혜택정보가 있을 경우, 입력해주세요." />
                    <button>
                      <img
                        className={`w-[24px]`}
                        src="/icon/input_delete.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </Fragment>
              );
            })}
            <FormLabel_1 className={`mt-[68px]`} require={false}>Brand Site URL 입력</FormLabel_1>
            <div className="mt-[24px] TextInput_3 Lg w-full">
              <input placeholder="제품 상세페이지 주소를 입력해주세요." />
              <button>
                <img
                  className={`w-[24px]`}
                  src="/icon/input_delete.svg"
                  alt=""
                />
              </button>
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
