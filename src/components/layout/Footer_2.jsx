'use client';

import { Fragment } from 'react';

export default function Footer_2() {
  return (
    <>
      <footer className="mt-[160px] bg-white p-[40px_36px]">
        <section>
          <div>
            <img src="/icon/logo_dashboard_footer.svg" alt="" />
          </div>
          <ul
            className={`CenterLeft gap-[40px] mt-[36px] text-[#3D3C42] text-[14px] font-[600] leading-[14px]`}
          >
            {['서비스이용약관', '개인정보처리방침'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <a href="#" target="_blank">
                      {obj}
                    </a>
                  </li>
                </Fragment>
              );
            })}
          </ul>
          <ul
            className={`mt-[16px] space-y-[4px] text-[#8C8A9A] text-[12px] font-[400] leading-[18px]`}
          >
            <li className={`CenterLeft gap-[16px]`}>
              <div>상호명 : ㈜애드플로러</div>
              <div>대표이사 : 손동운/송경운</div>
              <div>전화 : 02-511-6239 ㅣ 팩스 : 02-511-6293</div>
              <div>개인정보관리자 : 담당자 info@dexterkrema.com</div>
            </li>
            <li className={`CenterLeft gap-[16px]`}>
              <div>소재지 : 서울특별시 강남구 도산대로30길21-9 크레마타워</div>
              <div>사업자 등록번호 : 220-87-80934</div>
              <div>통신판매업신고번호 : 2018-서울서초-2119</div>
            </li>
            <li className={`CenterLeft gap-[16px]`}>
              <div>운영시간 : 평일 9:00 ~ 17:00 (점심시간: 12:00 ~ 13:00)</div>
            </li>
          </ul>
          <article className="mt-[20px] CenterLeft gap-[16px]">
            {['1:1문의', '자주 묻는 질문', '공지사항'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <a href={`#`} className={`Button_3 w-[140px]`}>
                    {obj}
                  </a>
                </Fragment>
              );
            })}
          </article>
          <div
            className={`mt-[16px] text-[#8C8A9A] text-[14px] font-[400] leading-[14px]`}
          >
            © Dexterkrema Inc.
          </div>
        </section>
      </footer>
    </>
  );
}
