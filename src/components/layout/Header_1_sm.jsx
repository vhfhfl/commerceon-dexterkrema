'use client';
import GlobalContext from '@/app/GlobalContext';
import { Fragment, useContext } from 'react';

export default function Header_1_sm() {
  const { GVar, setGVar } = useContext(GlobalContext);
  const { MOBILE_GNB_OPEN } = GVar;

  return (
    <>
      <header className={`fixed z-[99] top-0 w-full`}>
        <article
          className={`CenterBetween bg-[#101012] px-[16px] h-[--header-hei] [[data-scroll-header-over='true']_&]:translate-y-[-100%] duration-300 ease-out will-change-auto`}
        >
          <div className={`Fc`}>
            <a href="#" target="_blank">
              <img
                className={`w-[100px]`}
                src="/icon/logo/header_2.svg"
                alt=""
              />
            </a>
          </div>
          <div className={`Fc`}>
            <button
              className={`w-[24px]`}
              onClick={(e) => setGVar('MOBILE_GNB_OPEN', !MOBILE_GNB_OPEN)}
            >
              <img
                className={`${MOBILE_GNB_OPEN ? 'hidden' : ''}`}
                src="/icon/2311301423.svg"
                alt=""
              />
              <img
                className={`${MOBILE_GNB_OPEN ? '' : 'hidden'}`}
                src="/icon/2312211756.svg"
                alt=""
              />
            </button>
          </div>
        </article>
        <div
          className={`${
            MOBILE_GNB_OPEN ? '' : 'hidden'
          } z-10 absolute top-[--header-hei] left-[0] w-full`}
        >
          <ul
            className={`w-full bg-[#101012] text-[#fff] text-[18px] font-[500] leading-[18px] pb-[20px]`}
          >
            {['서비스 소개', '서비스 문의하기'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <a href="#" className={`CenterCenter block py-[19px]`}>
                      {obj}
                    </a>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
