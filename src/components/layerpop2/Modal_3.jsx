'use client';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import {layerControl} from '@/js/common';
import {Fragment} from 'react';

export default function Modal_3() {
  return (
    <>
      <div className={`flex flex-row gap-[0] w-[794px] h-full`}>
        <div className={`Fc`}>
          <button onClick={layerControl.Off}>
            <img src='/icon/2312260800.svg' alt=''/>
          </button>
        </div>
        <div className={`Fc flex-1 bg-white p-[80px_60px] overflow-auto`}>
          <ModalTitle_1>프로젝트 타이틀</ModalTitle_1>
          <section className={`mt-[56px]`}>
            <FormLabel_1>생성 아티클 개수</FormLabel_1>
            <select className={`SelectBox_2 Lg`} defaultValue={``}>
              <option value={``} disabled={true} hidden={true}>
                생성 아티클 개수를 선택해주세요.
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </section>
          <section className={`mt-[56px]`}>
            <FormLabel_1>생성 아티클 언어선택</FormLabel_1>
            <article
              className={`mt-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[32px_0] items-center justify-center text-[0]`}
            >
              {[...Array(7).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <label className='FormLabelBox !inline-flex'>
                        <input className='Checkbox_1' type='checkbox'/>
                        <div className='LabalUi'>Lorem Ipsum</div>
                      </label>
                    </div>
                  </Fragment>
                );
              })}
            </article>
            <select className={`mt-[16px] SelectBox_2 Lg`} defaultValue={``}>
              <option value={``} disabled={true} hidden={true}>
                기타 국가를 선택해주세요.
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </section>
          <section className={`mt-[68px]`}>
            <FormLabel_1
              desc={`배너 광고카피를 생성하실 경우, 필수 입력항목입니다.`}
            >
              광고 추가혜택 (요소) 입력
            </FormLabel_1>
            <article className={`mt-[32px]`}>
              <button className={`Button_4 Sm w-full`}>요소 추가</button>
            </article>
            <div className='mt-[32px] TextInput_3 Lg w-full'>
              <input placeholder='부가적인 혜택정보가 있을 경우, 입력해주세요.'/>
              <button>
                <img
                  className={`w-[24px]`}
                  src='/icon/input_delete.svg'
                  alt=''
                />
              </button>
            </div>
            <div className='mt-[12px] FormMsg Type3'>
              인증번호가 발송되었습니다. 이메일을 확인해주세요.
            </div>
            {[...Array(4).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className='mt-[24px] TextInput_3 Lg w-full'>
                    <input placeholder='부가적인 혜택정보가 있을 경우, 입력해주세요.'/>
                    <button>
                      <img
                        className={`w-[24px]`}
                        src='/icon/input_delete.svg'
                        alt=''
                      />
                    </button>
                  </div>
                </Fragment>
              );
            })}
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
