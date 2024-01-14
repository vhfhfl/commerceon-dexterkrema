'use client';
import { Fragment } from 'react';

export default function Footer_1() {
  return (
    <>
      <footer className="py-[60px] bg-[#1C1C20]">
        <section className="HBox">
          <div className="Inner">
            <article className="flex items-end justify-between">
              <div>
                <div>
                  <img src="/icon/logo/footer_2.svg" alt="" />
                </div>
                <div className="mt-[48px]">
                  <article className="CenterLeft text-[#fff] text-[14px] font-[600]">
                    <a href="https://www.google.com" target="_blank">
                      서비스이용약관
                    </a>
                    <a
                      className="ml-[40px]"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      개인정보처리방침
                    </a>
                  </article>
                </div>
                <ul className="mt-[30px] text-[#fff] text-[12px] font-[400] leading-[18px]">
                  <li>상호명 : ㈜애드플로러</li>
                  <li>대표이사 : 손동운/송경운</li>
                  <li>전화 : 02-511-6239 ㅣ 팩스 : 02-511-6293</li>
                  <li>
                    소재지 : 서울특별시 강남구 도산대로30길21-9 크레마타워
                  </li>
                  <li>개인정보관리자 : 담당자 info@dexterkrema.com</li>
                  <li>사업자 등록번호 : 220-87-80934</li>
                  <li>통신판매업신고번호 : 2018-서울서초-2119</li>
                </ul>
                <div className="mt-[30px] text-[#fff] text-[14px] font-[400]">
                  © Dexterkrema Inc.
                </div>
              </div>
              <div className="text-right">
                <article className="CenterRight gap-[20px]">
                  {['1:1 문의', '자주 묻는 질문', '공지사항'].map(
                    (obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <a
                            className="Button_2 w-[140px]"
                            href="#"
                            target="_blank"
                          >
                            {obj}
                          </a>
                        </Fragment>
                      );
                    },
                  )}
                </article>
                <ul className="mt-[36px] text-[#fff] text-[12px] font-[400] leading-[18px]">
                  <li>
                    운영시간 : 평일 9:00 ~ 17:00 (점심시간: 12:00 ~ 13:00)
                  </li>
                  <li>대표전화 : 02-511-6239</li>
                  <li>메일주소 : info@dexterkrema.com</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </footer>
    </>
  );
}