'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import TermsBox_1 from '@/components/common/TermsBox_1';
import DescBox_3 from '@/components/common/DescBox_3';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[408px]'>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <div className='text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              먼저 약관동의와 이메일인증을
              <br/>
              완료해주세요
            </div>
          </div>
        </section>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <div className='text-[#26262C] text-[24px] font-[700]'>약관동의</div>
            <div className='mt-[60px]'>
              <div className='CenterLeft'>
                <label className='FormLabelBox'>
                  <input className='Checkbox_1 Lg' type='checkbox'/>
                  <div className='LabalUi'>
                    모든 약관을 확인하고 전체 동의합니다.
                    <span className='ml-[8px] text-[#5D45FF] text-[14px] font-[400]'>필수항목, 선택항목 포함</span>
                  </div>
                </label>
              </div>
              <div className='mt-[60px]'>
                <TermsBox_1/>
              </div>
              <div className='mt-[40px]'>
                <TermsBox_1/>
              </div>
              <div className='mt-[60px]'>
                <div className='CenterLeft'>
                  <label className='FormLabelBox'>
                    <input className='Checkbox_1' type='checkbox'/>
                    <div className='LabalUi'>
                      <span className='mr-[4px] text-[#5D45FF]'>(필수)</span>
                      1년이상 장기 미접속 시, 계정 파기 및 데이터 삭제에 동의합니다.
                    </div>
                  </label>
                </div>
                <div className='mt-[24px]'>
                  <div className='CenterLeft'>
                    <label className='FormLabelBox'>
                      <input className='Checkbox_1' type='checkbox'/>
                      <div className='LabalUi'>
                        <span className='mr-[4px] text-[#5D45FF]'>(필수)</span>
                        만 14세 이상입니다.
                      </div>
                    </label>
                  </div>
                </div>
                <div className='mt-[24px]'>
                  <div className='CenterLeft'>
                    <label className='FormLabelBox'>
                      <input className='Checkbox_1' type='checkbox'/>
                      <div className='LabalUi'>
                        <span className='mr-[4px] text-[#A3A1B1]'>(선택)</span>
                        이벤트, 프로모션등 알림 메일을 수신합니다.
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <div className='text-[#26262C] text-[24px] font-[700]'>이메일 인증</div>
            <div className='mt-[60px]'>
              <DescBox_3/>
            </div>
            <div className='mt-[40px]'>
              <FormLabel_1 require={false}>이메일주소</FormLabel_1>
              <div className='mt-[8px]'>
                <article className='CenterCenter gap-[12px]'>
                  <div className='flex-1'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='이메일주소를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className='Button_1 w-[128px]'>인증번호 발송</button>
                  </div>
                </article>
                <div className='FormMsg Type1'>
                  인증번호가 발송되었습니다. 이메일을 확인해주세요.
                </div>
                <div className='FormMsg Type2'>
                  이미 가입된 이메일주소 입니다. 다시 확인해주세요.
                </div>
              </div>
            </div>
            <div className='mt-[40px]'>
              <FormLabel_1 require={false}>인증번호 입력</FormLabel_1>
              <div className='mt-[8px]'>
                <article className='CenterCenter gap-[12px]'>
                  <div className='flex-1'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='이메일로 수신된 인증번호를 입력해주세요.'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className='Button_3 w-[128px]'>인증번호 확인</button>
                  </div>
                </article>
                <div className='FormMsg Type2'>
                  남은시간 05:00
                </div>
                <div className='FormMsg Type2'>
                  수신된 인증번호와 다릅니다. 다시 확인해주세요.
                </div>
                <div className='FormMsg Type2'>
                  인증시간이 초과되어 이메일을 다시 재발송 해주세요.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <article className='CenterCenter gap-[10px]'>
              <div>
                <button className='Button_3 Xl w-[245px]'>돌아가기</button>
              </div>
              <div>
                <button className='Button_1 Xl w-[245px]'>다음단계</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}