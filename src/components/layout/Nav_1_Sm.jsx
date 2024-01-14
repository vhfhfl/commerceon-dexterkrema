'use client';
import { Fragment, useState } from 'react';
import { ReactSVG } from 'react-svg';

export default function Nav_1_Sm() {
  const [active_idx, setActiveIdx] = useState();

  return (
    <>
      <nav className={`w-[86px] py-[20px] px-[12px]`}>
        <div className={`p-[2px] w-[54px] mx-auto`}>
          <img src="/icon/logo/dashboard_logo.svg" alt="" />
        </div>
        <article className="mt-[20px] flex flex-col items-center justify-center gap-[0] p-[16px_10px] bg-[#F0EFF6] rounded-[12px]">
          <img src="/icon/2312201406.svg" alt="" />
          <div className={`w-[32px] h-[1px] bg-white my-[10px]`}></div>
          <img src="/icon/2312191213.svg" alt="" />
          <div className={`mt-[8px] Montserrat text-[#26262C] text-[12px] font-[700] leading-[12px] tracking-[-0.12px]`}>42,500</div>
        </article>

        <div className={`mt-[16px]`}>
          {/* #ProjectListButton On 클래스를 주면 #ProjectListWrap 보이게끔 처리함 */}
          <button id={`ProjectListButton`} className={`ProjectListButton Button_9 Xl w-full On`}>
            <ReactSVG src={`/icon/2312191218.svg`} />
          </button>
          <div className={`mt-[16px]`}>
            <ul className={`space-y-[16px]`}>
              {Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li>
                      <div className={`text-[#8C8A9A] text-[16px] font-[400] leading-[16px] px-[12px] py-[16px]`}>Sec</div>
                      <ul className={`mt-[4px] space-y-[4px]`}>
                        {Array.from(Array(3)).map((obj2, idx2) => {
                          return (
                            <Fragment key={idx2}>
                              <li>
                                <button className={`Button_9 Xl w-full ${active_idx == `${idx}${idx2}` ? 'On' : ''}`} onClick={(e) => setActiveIdx(`${idx}${idx2}`)}>
                                  <ReactSVG src={`/icon/2312191447.svg`} />
                                </button>
                              </li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          {/**/}
          <article className={`mt-[32px]`}>
            <button className={`whitespace-nowrap w-full border-solid border-[1px] border-[#26262C rounded-[12px] p-[12px_10px] text-[#3D3C42] text-[12px] font-[400] leading-[12px]`}>
              <div>종합결과</div>
              <img className={`mt-[4px] mx-auto`} src="/icon/2312201413.svg" alt="" />
            </button>
          </article>
        </div>
      </nav>
    </>
  );
}
