'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <section className="HBox h-[1100px] pt-[200px] flex flex-col items-center bg-[url(/image/2311240853.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="Inner3 w-full">
            <div className="text-[#fff] text-[38px] font-[600] leading-[48px] tracking-[-0.38px] text-center">
              비밀번호를
              <br />
              재설정 합니다.
            </div>
            <div className="mt-[80px]">
              <div className="space-y-[40px]">
                <div>
                  <div className="text-[#fff] text-[16px] font-[700]">
                    비밀번호 입력
                    <span className={`ml-[4px] text-[#5d45ff]`}>*</span>
                  </div>
                  <div className="mt-[8px]">
                    <div className="TextInput_2 w-full">
                      <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                      />
                      <button className="ResetBtn">
                        <img src="/icon/input_delete.svg" alt="" />
                      </button>
                      <button className="EyeBtn">
                        <img
                          className="[input[type='text']~button>&]:hidden"
                          src="/icon/eye.svg"
                          alt=""
                        />
                        <img
                          className="[input[type='password']~button>&]:hidden"
                          src="/icon/eye_on.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="FormMsg Type3">
                      영문 소/대문자, 숫자, 특수문자 2개를 조합해 10자리
                      이상으로 설정해주세요.
                    </div>
                    <div className="FormMsg Type2">
                      영문 소/대문자, 숫자, 특수문자 2개를 조합해 10자리
                      이상으로 설정해주세요.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#fff] text-[16px] font-[700]">
                    비밀번호 재입력
                    <span className={`ml-[4px] text-[#5d45ff]`}>*</span>
                  </div>
                  <div className="mt-[8px]">
                    <div className="TextInput_2 w-full">
                      <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                      />
                      <button className="ResetBtn">
                        <img src="/icon/input_delete.svg" alt="" />
                      </button>
                      <button className="EyeBtn">
                        <img
                          className="[input[type='text']~button>&]:hidden"
                          src="/icon/eye.svg"
                          alt=""
                        />
                        <img
                          className="[input[type='password']~button>&]:hidden"
                          src="/icon/eye_on.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="FormMsg Type2">
                      비밀번호가 일치하지 않습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[52px]">
                <button className="Button_1 Lg w-full">
                  비밀번호 변경하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
