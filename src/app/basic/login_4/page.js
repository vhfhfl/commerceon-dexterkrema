'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import TabBar_1 from '@/components/common/TabBar_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main>
        <section
          className='HBox h-[1100px] pt-[200px] flex flex-col items-center bg-[url(/image/2311240853.jpg)] bg-cover bg-center bg-no-repeat'>
          <div className='Inner3 w-full'>
            <div className='text-[#fff] text-[38px] font-[600] leading-[48px] tracking-[-0.38px] text-center'>
              비밀번호를
              <br/>
              잃어버리셨나요?
            </div>
            <div className='mt-[80px]'>
              <TabBar_1/>
            </div>
            <div className='pt-[60px]'>
              <div>
                <div>
                  <div className='text-[#fff] text-[16px] font-[700]'>이메일주소</div>
                  <div className='mt-[8px]'>
                    <article className='CenterCenter gap-[12px]'>
                      <div className='flex-1'>
                        <div className='TextInput_2 w-full'>
                          <input placeholder='가입시 등록한 이메일주소를 입력해주세요.'/>
                          <button className='ResetBtn'>
                            <img src='/icon/input_delete.svg' alt=''/>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className='Button_1 w-[112px]'>인증번호 발송</button>
                      </div>
                    </article>
                    <div className='FormMsg Type2'>
                      가입된 이메일주소가 아닙니다. 다시 확인해주세요.
                    </div>
                  </div>
                  <div className='mt-[8px]'>
                    <article className='CenterCenter gap-[12px]'>
                      <div className='flex-1'>
                        <div className='TextInput_2 w-full'>
                          <input placeholder='가입시 등록한 이메일주소를 입력해주세요.' defaultValue='dex*****@dexterkrema.com'/>
                          <button className='ResetBtn'>
                            <img src='/icon/input_delete.svg' alt=''/>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className='Button_4 w-[112px]'>재발송</button>
                      </div>
                    </article>
                    <div className='FormMsg Type1'>
                      인증번호가 발송되었습니다. 이메일을 확인해주세요.
                    </div>
                  </div>
                </div>
                <div className='mt-[40px]'>
                  <div className='text-[#fff] text-[16px] font-[700]'>인증번호 입력</div>
                  <div className='mt-[8px]'>
                    <article className='CenterCenter gap-[12px]'>
                      <div className='flex-1'>
                        <div className='TextInput_2 w-full'>
                          <input placeholder='이메일로 수신된 인증번호를 입력해주세요.'/>
                          <button className='ResetBtn'>
                            <img src='/icon/input_delete.svg' alt=''/>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className='Button_3 w-[112px]'>인증번호 확인</button>
                      </div>
                    </article>
                    <div className='FormMsg Type2'>남은시간 05:00</div>
                    <div className='FormMsg Type2'>
                      수신된 인증번호와 다릅니다. 다시 확인해주세요.
                    </div>
                    <div className='FormMsg Type2'>
                      인증시간이 초과되어 이메일을 다시 재발송 해주세요.
                    </div>
                  </div>
                  <div className='mt-[8px]'>
                    <article className='CenterCenter gap-[12px]'>
                      <div className='flex-1'>
                        <div className='TextInput_2 w-full'>
                          <input placeholder='이메일로 수신된 인증번호를 입력해주세요.' defaultValue='123456'/>
                          <button className='ResetBtn'>
                            <img src='/icon/input_delete.svg' alt=''/>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className='Button_1 w-[112px]'>
                          인증완료
                          <img src='/icon/2312041856.svg' alt=''/>
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className='mt-[52px]'>
                <button className='Button_1 Lg w-full'>비밀번호 확인하기</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}