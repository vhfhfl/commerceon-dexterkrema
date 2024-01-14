'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Breadcrumb_1 from '@/components/common/Breadcrumb_1';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[150px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <Breadcrumb_1/>
          </div>
        </section>
        <section className='HBox mt-[38px]'>
          <div className='Inner2'>
            <div className='text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              회원정보 변경
            </div>
          </div>
        </section>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <ul className='space-y-[60px]'>
              <li>
                <FormLabel_1 require={false}>이메일 주소</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 ReadOnly w-full'>
                      <input placeholder='이메일주소를 입력해주세요.' value='dex*****@dexterkrema.com' readOnly/>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1 require={false}>비밀번호</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterBetween gap-[12px]'>
                    <div className='flex-1 CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input type='password' placeholder='비밀번호를 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                        <button className='EyeBtn'>
                          <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                          <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                    <button className='Button_1 w-[128px]'>비밀번호 변경</button>
                  </div>
                </div>
              </li>
              <li className='flex items-start justify-center gap-[20px]'>
                <div className='flex-1'>
                  <FormLabel_1>회사명</FormLabel_1>
                  <div className='mt-[8px]'>
                    <div className='CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input placeholder='회사명을 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='FormMsg Type3'>
                    정보를 입력해주세요.
                  </div>
                </div>
                <div className='flex-1'>
                  <FormLabel_1>기업규모</FormLabel_1>
                  <div className='mt-[8px]'>
                    <select className={`SelectBox_2 Lg`} defaultValue={``}>
                      <option value={``} disabled={true} hidden={true}>
                        기업규모를 선택해주세요.
                      </option>
                      <option value={`aaa`}>AAA</option>
                      <option value={`bbb`}>BBB</option>
                      <option value={`ccc`}>CCC</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1>성명</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='성명을 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='FormMsg Type3'>
                  정보를 입력해주세요.
                </div>
              </li>
              <li>
                <FormLabel_1>연락처</FormLabel_1>
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
                <div className='FormMsg Type3'>
                  정보를 입력해주세요.
                </div>
              </li>
              <li className='flex items-start justify-center gap-[20px]'>
                <div className='flex-1'>
                  <FormLabel_1 require={false}>부서</FormLabel_1>
                  <div className='mt-[8px]'>
                    <div className='CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input placeholder='부서명을 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='FormMsg Type3'>
                    정보를 입력해주세요.
                  </div>
                </div>
                <div className='flex-1'>
                  <FormLabel_1 require={false}>직급</FormLabel_1>
                  <div className='mt-[8px]'>
                    <div className='CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input placeholder='직급을 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='FormMsg Type3'>
                    정보를 입력해주세요.
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1>웹사이트</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='운영중인 웹사이트 주소를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='FormMsg Type3'>
                  정보를 입력해주세요.
                </div>
              </li>
              <li>
                <FormLabel_1>산업 카테고리</FormLabel_1>
                <div className='mt-[8px]'>
                  <select className={`SelectBox_2 Lg`} defaultValue={``}>
                    <option value={``} disabled={true} hidden={true}>
                      산업 카테고리를 선택해주세요.
                    </option>
                    <option value={`aaa`}>AAA</option>
                    <option value={`bbb`}>BBB</option>
                    <option value={`ccc`}>CCC</option>
                  </select>
                </div>
              </li>
              <li className='flex items-start justify-center gap-[20px]'>
                <div className='flex-1'>
                  <FormLabel_1>브랜드</FormLabel_1>
                  <div className='mt-[8px]'>
                    <div className='CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input placeholder='브랜드명을 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                    <div className='FormMsg Type3'>
                      브랜드가 다수일경우, 대표브랜드 3개를 ,(콤마)로 나누어 입력하세요.
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <FormLabel_1>제품</FormLabel_1>
                  <div className='mt-[8px]'>
                    <div className='CenterLeft'>
                      <div className='TextInput_3 w-full'>
                        <input placeholder='제품을 입력해주세요.'/>
                        <button className='ResetBtn'>
                          <img src='/icon/input_delete.svg' alt=''/>
                        </button>
                      </div>
                    </div>
                    <div className='FormMsg Type3'>
                      제품이 다수일경우, 대표브랜드 3개를 ,(콤마)로 나누어 입력하세요.
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1>마케팅 예산</FormLabel_1>
                <div className='mt-[8px]'>
                  <select className={`SelectBox_2 Lg`} defaultValue={``}>
                    <option value={``} disabled={true} hidden={true}>
                      마케팅 예산을 선택해주세요.
                    </option>
                    <option value={`aaa`}>AAA</option>
                    <option value={`bbb`}>BBB</option>
                    <option value={`ccc`}>CCC</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <article className='CenterCenter gap-[10px]'>
              <div>
                <button className='Button_3 Xl w-[245px]'>취소하기</button>
              </div>
              <div>
                <button className='Button_1 Xl w-[245px]'>저장하기</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}