'use client';
import DescBox_3 from '@/components/common/DescBox_3';
import TermsBox_1 from '@/components/common/TermsBox_1';
import {Fragment} from 'react';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Modal_2_b() {
  return (
    <>
      <div className='Modal_2'>
        <div className='Head'>
          <div>신규카드등록</div>
        </div>
        <div className='Body'>
          <div className='ShadowBox_1'>
            <div className='text-[#26262c] text-[24px] font-[700]'>
              등록카드는 최대 3장까지 가능합니다.
            </div>
            <ul className='mt-[66px] space-y-[44px]'>
              <li>
                <FormLabel_1 require={false}>카드번호</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='-을 제외한 숫자만 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1 require={false}>유효기간</FormLabel_1>
                <div className='mt-[8px] CenterCenter gap-[20px]'>
                  {['월', '년'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className='flex-1'>
                          <select className={`SelectBox_2 Lg`} defaultValue={``}>
                            <option value={``} disabled={true} hidden={true}>
                              {obj}
                            </option>
                            <option value={`aaa`}>AAA</option>
                            <option value={`bbb`}>BBB</option>
                            <option value={`ccc`}>CCC</option>
                          </select>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </li>
              <li>
                <FormLabel_1 require={false}>CVC</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='카드 뒷면 3자리 숫자를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1 require={false}>카드 비밀번호</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input type='password' placeholder='비밀번호 앞 2자리 숫자를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                      <button className='EyeBtn'>
                        <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                        <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1 require={false}>카드구분</FormLabel_1>
                <div className='mt-[8px]'>
                  <article className='CenterCenter gap-[16px]'>
                    <div className='flex-1'>
                      <button className='Button_1 w-full'>개인</button>
                    </div>
                    <div className='flex-1'>
                      <button className='Button_4 w-full'>법인</button>
                    </div>
                  </article>
                </div>
              </li>
              <li>
                <DescBox_3/>
              </li>
              <li>
                <FormLabel_1 require={false}>사업자등록번호</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='사업자등록번호 10자리(숫자만)를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='mt-[44px]'>
            <div className='text-[#26262c] text-[20px] font-[600]'>약관동의</div>
            <div className='mt-[28px] ShadowBox_1 px-[20px] py-[16px]'>
              <div className='CenterLeft'>
                <label className='FormLabelBox'>
                  <input className='Checkbox_1 Lg' type='checkbox'/>
                  <div className='LabalUi'>모든 약관을 확인하고 전체 동의합니다.</div>
                </label>
              </div>
            </div>
          </div>
          <div className='mt-[20px] ShadowBox_1'>
            <div>
              <TermsBox_1/>
            </div>
            <div className='mt-[40px]'>
              <TermsBox_1/>
            </div>
          </div>
        </div>
        <div className='Foot'>
          <article className='CenterCenter gap-[10px]'>
            <div>
              <button className='Button_3 Xl w-[245px]'>닫기</button>
            </div>
            <div>
              <button className='Button_1 Xl w-[245px]'>카드등록</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}