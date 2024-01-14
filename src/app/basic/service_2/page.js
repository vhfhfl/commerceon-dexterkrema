'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';
import Swiper_6 from '@/components/swiper/Swiper_6';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <section className={`HBox pt-[60px]`}>
          <div className="Inner2">
            <div className={`Title-3cdb0e3c`}>개인정보처리방침</div>

            <article className={`group mt-[60px]`}>
              <div
                className={`overflow-hidden h-[640px] group-has-[:checked]:h-auto border-solid border-[1px] border-[#CFCEDC] group-has-[:checked]:border-[#5D45FF] border-b-0 bg-white p-[40px] rounded-t-[24px]`}
              >
                <p>
                  (주)덱스터크레마는 이용자의 개인정보를 보호하고 이와 관련한
                  고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보
                  처리방침을 수립·공개하며, 본 개인정보 처리방침을 홈페이지 첫
                  화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록
                  조치하고 있습니다. 개인정보 처리방침은 정부의 법률 및 지침
                  변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수
                  있고, 이에 따른 개인정보 처리방침의 지속적인 개선을 위하여
                  필요한 절차를 정하고 있습니다. 이용자들께서는 사이트 방문 시
                  수시로 확인하시기 바랍니다.
                </p>
                <br />
                <p>
                  ((주)덱스터크레마의 개인정보 처리방침은 다음과 같은 내용을
                  담고 있습니다.
                </p>
                <br />
                <p>1. 개인정보 수집에 대한 동의</p>
                <p>
                  2. 수집하는 개인정보 항목 및 수집방법3. 개인정보의 수집 및
                  이용목적
                </p>
                <p>
                  4. 수집하는 개인정보의 보유 및 이용기간5. 개인정보의 파기 절차
                  및 방법
                </p>
                <p>6. 수집한 개인정보의 공유 및 제공</p>
                <p>
                  7. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
                </p>
                <p>8. 쿠키(Cookie)의 운용 및 거부9. 개인정보의 위탁처리</p>
                <p>10. 개인정보보호를 위한 기술적/관리적 대책</p>
                <p>11. 개인정보 관련 의견수렴 및 불만처리에 관한 사항</p>
                <p>12. 개인정보 보호책임자 및 담당자의 소속-성명 및 연락처</p>
                <p>
                  13. 이용자 및 법정대리인의 권리와 그 행사방법14. 권익침해
                  구제방법15. 고지의 의무
                </p>
                <br />
                <p>1. 개인정보 수집에 대한 동의</p>
                <p>
                  (주)덱스터크레마은 이용자들이 회사의 개인정보수집이용 동의
                  또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을
                  클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면
                  개인정보 수집에 대해 동의한 것으로 봅니다.
                </p>
                <br />
                <p>2. 수집하는 개인정보의 항목 및 수집방법</p>
                <p>가. 수집 항목</p>
                <p>
                  (주)덱스터크레마은 이용자들이 회원서비스를 이용하기 위해
                  회원으로 가입하실 때 서비스 제공을 위한 필수/선택적인 정보들을
                  온라인상에서 입력 받고 있습니다.
                </p>
                <p>
                  - 회원 가입 시에 받는 필수적인 정보 : 이름 , 자택 전화번호 ,
                  자택 주소 , 휴대전화번호 , 이메일
                </p>
                <p>
                  - 회원제 서비스 이용에 따른 본인 확인 절차에 이용 시 수집 정보
                  : 아이디, 비밀번호
                </p>
                <p>
                  - 서비스 및 부가 서비스 이용에 대한 요금 결제 시 수집하는 정보
                  : 은행계좌정보, 신용카드정보
                </p>
                <p>
                  - 불량회원의 부정 이용 방지와 비인가 사용 방지를 위해 수집하는
                  정보 : IP Address
                </p>
                <p>- 14세미만 가입자의 경우 법정대리인의 정보</p>
              </div>
              <div
                className={`relative CenterCenter w-full h-[56px] rounded-b-[24px] border-solid border-[1px] border-[#CFCEDC] group-has-[:checked]:border-[#5D45FF] border-t-0 bg-[#F0EFF6]`}
              >
                <input
                  type="checkbox"
                  className={`opacity-0 cursor-pointer z-10 absolute top-[0] left-[0] w-full h-full`}
                />
                <div
                  className={`text-[#8C8A9A] group-has-[:checked]:text-[#5D45FF] text-[16px] font-[600] leading-[1em]`}
                >
                  <div className={`CenterCenter gap-[4px]`}>
                    <span>이용약관</span>
                    <span className={`group-has-[:checked]:hidden`}>
                      전체보기
                    </span>
                    <span className={`hidden group-has-[:checked]:inline`}>
                      접기
                    </span>
                    <ReactSVG
                      className={`ml-[4px] group-has-[:checked]:rotate-180`}
                      src={`/icon/2401081347.svg`}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className={`mt-[60px] HBox`}>
          <div className={`Inner2`}>
            <select className={`SelectBox_2 Lg w-[340px]`} defaultValue={``}>
              <option value={`aaa`}>시행일자 : 2024.01.01 (현재시행중)</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </section>
        <section className={`mt-[226px] HBox pb-[120px]`}>
          <div className={`Inner`}>
            <Swiper_6 />
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
