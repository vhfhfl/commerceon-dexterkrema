'use client';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import { layerControl } from '@/js/common';
import { Fragment } from 'react';

export default function Modal_5() {
  return (
    <>
      <div className={`flex flex-row gap-[0] w-[794px] h-full`}>
        <div className={`Fc`}>
          <button onClick={layerControl.Off}>
            <img src={`/icon/2312260800.svg`} alt={``} />
          </button>
        </div>
        <div className={`Fc flex-1 bg-white p-[80px_60px] overflow-auto`}>
          <ModalTitle_1>프로젝트 타이틀</ModalTitle_1>
          <section className={`mt-[50px]`}>
            <FormLabel_1>키워드 입력</FormLabel_1>
            <FormLabel_1 className={`mt-[40px]`} require={false}>
              브랜드명
            </FormLabel_1>
            <div className="mt-[32px] TextInput_3 Lg w-full">
              <input placeholder="제작 될 컨텐츠의 브랜드명을 입력해주세요." />
              <button>
                <img className="w-[24px]" src="/icon/input_delete.svg" alt="" />
              </button>
            </div>
            <FormLabel_1 className={`mt-[56px]`}>제품 키워드</FormLabel_1>
            <div className={`mt-[8px] TextInput_1 w-full`}>
              <input
                placeholder={`홍보하고자 하는 제품명을 입력해주세요. (엔터를 누르면 등록됩니다. / 최대 10개))`}
              />
              <button className={`ResetBtn`}>
                <img src={`/icon/input_search.svg`} alt={``} />
              </button>
            </div>
            <div className={`mt-[24px]`}>
              <div
                className={`bg-[#F0EFF6] rounded-[12px] py-[22px] px-[23px]`}
              >
                {[...Array(5).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`Btn_8 inline-flex mx-[3px] my-[8px]`}>
                        Lorem Ipsum is simply {idx + 1}
                        <img
                          className={`ml-[4px]`}
                          src={`/icon/2312261558.svg`}
                          alt={``}
                        />
                      </button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </section>
          <section className={`mt-[56px]`}>
            <button className={`Button_1 Xl w-full`}>등록하기</button>
          </section>
        </div>
      </div>
    </>
  );
}
