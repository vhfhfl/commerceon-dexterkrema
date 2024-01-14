'use client';
import InquiryForm_4 from '@/components/common/InquiryForm_4';
import ModalTitle_1 from '@/components/layerpop2/ModalTitle_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';
import {layerControl} from '@/js/common';

export default function Modal_1() {
  return (
    <>
      <div className={`flex flex-row gap-[0] w-[794px] h-full`}>
        <div className={`Fc`}>
          <button onClick={layerControl.Off}>
            <img src={`/icon/2312260800.svg`} alt={``}/>
          </button>
        </div>
        <div className={`Fc flex-1 bg-white p-[80px_60px] overflow-auto`}>
          <ModalTitle_1>프로젝트 타이틀</ModalTitle_1>
          <section className={`mt-[50px]`}>
            <ul className={`space-y-[56px]`}>
              <li>
                <FormLabel_1>산업군 선택</FormLabel_1>
                <select className={`SelectBox_2 Lg`} defaultValue={``}>
                  <option value={``} disabled={true} hidden={true}>
                    산업을 선택해주세요.
                  </option>
                  <option value={`aaa`}>AAA</option>
                  <option value={`bbb`}>BBB</option>
                  <option value={`ccc`}>CCC</option>
                </select>
                <div className={`mt-[12px] FormMsg Type3`}>
                  * 최대 3개까지 추가가 가능합니다.
                </div>
              </li>
              <li>
                <FormLabel_1>국가 선택</FormLabel_1>
                <select className={`SelectBox_2 Lg`} defaultValue={``}>
                  <option value={``} disabled={true} hidden={true}>
                    국가를 선택해주세요.
                  </option>
                  <option value={`aaa`}>AAA</option>
                  <option value={`bbb`}>BBB</option>
                  <option value={`ccc`}>CCC</option>
                </select>
                <div className={`mt-[12px] FormMsg Type3`}>
                  * 최대 3개까지 추가가 가능합니다.
                </div>
              </li>
            </ul>
          </section>
          <section className={`mt-[56px]`}>
            <FormLabel_1>채널 선택</FormLabel_1>
            <article className={`mt-[32px] CenterBetween text-[0]`}>
              <div className={`flex-1`}>
                <label className={`FormLabelBox !inline-flex`}>
                  <input className={`Checkbox_1 Lg`} type={`checkbox`}/>
                  <div className={`LabalUi`}>Google</div>
                </label>
              </div>
              <div className={`flex-1`}>
                <label className={`FormLabelBox !inline-flex`}>
                  <input className={`Checkbox_1 Lg`} type={`checkbox`}/>
                  <div className={`LabalUi`}>Google</div>
                </label>
              </div>
            </article>
          </section>
          <section className={`mt-[68px]`}>
            <FormLabel_1>기간 선택</FormLabel_1>
            <InquiryForm_4 className={`mt-[32px]`}/>
            <article className={`mt-[56px]`}>
              <button className={`Button_1 Xl w-full`}>등록하기</button>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}