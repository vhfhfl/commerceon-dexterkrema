'use client';
import { Fragment } from 'react';

export default function Footer_1_mo() {
  return (
    <>
      <footer className="bg-[#1C1C20] p-[48px_20px]">
        <img className={`w-[100px]`} src="/icon/logo/header_2.svg" alt="" />
        <ul
          className={`mt-[60px] CenterLeft text-[#fff] text-[14px] font-[600] gap-[40px]`}
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
          className={`mt-[30px] text-[#fff] text-[12px] font-[400] leading-[18px]`}
        >
          <li>운영시간 : 평일 9:00 ~ 17:00 (점심시간: 12:00 ~ 13:00)</li>
          <li>대표전화 : 02-511-6239</li>
          <li>메일주소 : info@dexterkrema.com</li>
        </ul>
        <ul
          className={`mt-[30px] text-[#fff] text-[12px] font-[400] leading-[18px]`}
        >
          <li>상호명 : ㈜애드플로러</li>
          <li>대표이사 : 손동운/송경운</li>
          <li>전화 : 02-511-6239 ㅣ 팩스 : 02-511-6293</li>
          <li>소재지 : 서울특별시 강남구 도산대로30길21-9 크레마타워</li>
          <li>개인정보관리자 : 담당자 info@dexterkrema.com</li>
          <li>사업자 등록번호 : 220-87-80934</li>
          <li>통신판매업신고번호 : 2018-서울서초-2119</li>
        </ul>
        <button
          className={`mt-[30px] text-[#fff] text-[14px] font-[600] leading-[14px]`}
        >
          PC버전으로 보기
        </button>
        <div
          className={`mt-[30px] text-[#fff] text-[14px] font-[400] leading-[14px]`}
        >
          © Dexterkrema Inc.
        </div>
      </footer>
    </>
  );
}
