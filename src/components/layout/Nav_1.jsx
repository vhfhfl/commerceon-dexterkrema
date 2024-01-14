'use client';
import { Fragment, useState } from 'react';
import { ReactSVG } from 'react-svg';
import Data_2401041450 from '@/dummy/Data_2401041450';

export default function Nav_1() {
  const [active_idx, setActiveIdx] = useState();

  return (
    <>
      <nav className={`w-[314px] px-[28px] py-[20px]`}>
        <div className={`p-[12px]`}>
          <img src="/icon/logo/dashboard_logo.svg" alt="" />
        </div>
        <article
          className={`mt-[16px] TopBetween bg-[#F0EFF6] rounded-[16px] py-[16px] px-[20px]`}
        >
          <div className={`Fc flex-1 text-center`}>
            <div
              className={`text-[#3D3C42] text-[14px] font-[500] leading-[14px]`}
            >
              구독정보
            </div>
            <div className={`mt-[8px]`}>
              <div
                className={`inline-block p-[8px] text-[#fff] text-[14px] font-[700] leading-[14px] bg-[#3D3C42] rounded-[10px] Montserrat`}
              >
                Premium
              </div>
            </div>
          </div>
          <div
            className={`Fc flex-1 text-center border-l-[1px] border-l-[#fff]`}
          >
            <div
              className={`text-[#3D3C42] text-[14px] font-[500] leading-[14px]`}
            >
              보유토큰
            </div>
            <article className={`mt-[8px] CenterCenter py-[3px]`}>
              <img src="/icon/2312191213.svg" alt="" />
              <div
                className={`ml-[5px] text-[#26262C] text-[14px] font-[700] leading-[14px] tracking-[-0.14px]`}
              >
                42,500
              </div>
            </article>
          </div>
        </article>
        <div className={`mt-[16px]`}>
          {/* #ProjectListButton On 클래스를 주면 #ProjectListWrap 보이게끔 처리함 */}
          <button
            id={`ProjectListButton`}
            className={`ProjectListButton Button_8 w-full On`}
          >
            <ReactSVG src={`/icon/2312191218.svg`} />
            <div className={`ml-[12px]`}>프로젝트 리스트</div>
          </button>
          <div
            id={`ProjectListWrap`}
            className={`mt-[4px] hidden [#ProjectListButton.On+&]:block`}
          >
            <button className={`CenterLeft w-full py-[10px] px-[12px]`}>
              <img src="/icon/2312191221.svg" alt="" />
              <div
                className={`ml-[8px] text-[#5D45FF] text-[16px] font-[500] leading-[16px]`}
              >
                프로젝트 추가
              </div>
            </button>
            <ul className={`mt-[8px] pl-[12px] space-y-[8px]`}>
              <li
                className={`CenterLeft bg-[#F0EFF6] rounded-[8px] py-[8px] pl-[4px] pr-[16px]`}
              >
                <div className={`Fc w-[24px]`}>
                  <div
                    className={`text-right pr-[3px] text-[#3D3C42] text-[16px] font-[500] leading-[16px]`}
                  >
                    1.
                  </div>
                </div>
                <div className={`Fc flex-1 ml-[8px]`}>
                  <div
                    className={`line-clamp-[1] text-[#3D3C42] text-[14px] font-[500] leading-[22px]`}
                  >
                    첫번째 테스트 프로젝트 입니다.
                  </div>
                </div>
                <div className={`Fc ml-[2px]`}>
                  <article className={`CenterCenter gap-[6px]`}>
                    <div>
                      <button>
                        <img src="/icon/2312191411_on.svg" alt="" />
                      </button>
                    </div>
                    <div className={`On Fc relative group`}>
                      <button>
                        <img src="/icon/2312191413_on.svg" alt="" />
                      </button>
                      <div
                        className={`hidden group-[.On]:block ToolTip_3 top-0 right-[16px] translate-y-[-19px] translate-x-[-24px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)]`}
                      >
                        <img
                          className={`absolute right-[-12px] top-[20px] z-10`}
                          src={`/icon/2401090905.svg`}
                          alt={``}
                        />
                        <ul className={`space-y-[12px]`}>
                          {Data_2401041450.map((obj, idx) => {
                            const { 아이콘1, 아이콘2, 버튼 } = obj;

                            return (
                              <Fragment key={idx}>
                                <li className={`group/item`}>
                                  <button
                                    className={`CenterLeft text-[#3D3C42] group-hover/item:text-[#5D45FF] text-[16px] font-[500]`}
                                  >
                                    <img
                                      className={`group-hover/item:hidden`}
                                      src={아이콘1}
                                      alt={``}
                                    />
                                    <img
                                      className={`hidden group-hover/item:block`}
                                      src={아이콘2}
                                      alt={``}
                                    />
                                    <div className={`ml-[8px]`}>{버튼}</div>
                                  </button>
                                </li>
                              </Fragment>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </li>
              <li
                className={`CenterLeft bg-[#F0EFF6] rounded-[8px] py-[8px] pl-[4px] pr-[16px]`}
              >
                <div className={`Fc w-[24px]`}>
                  <div
                    className={`text-right pr-[3px] text-[#3D3C42] text-[16px] font-[500] leading-[16px]`}
                  >
                    2.
                  </div>
                </div>
                <div className={`Fc flex-1 ml-[8px]`}>
                  <div
                    className={`line-clamp-[1] text-[#3D3C42] text-[14px] font-[500] leading-[22px]`}
                  >
                    테스트 프로젝트
                  </div>
                </div>
                <div className={`Fc ml-[2px]`}>
                  <article className={`CenterCenter gap-[6px]`}>
                    <button>
                      <img src="/icon/2312191411.svg" alt="" />
                    </button>
                    <button>
                      <img src="/icon/2312191413.svg" alt="" />
                    </button>
                  </article>
                </div>
              </li>
              <li
                className={`CenterLeft bg-[#F0EFF6] rounded-[8px] py-[8px] pl-[4px] pr-[16px]`}
              >
                <div className={`Fc w-[24px]`}>
                  <div
                    className={`text-right pr-[3px] text-[#3D3C42] text-[16px] font-[500] leading-[16px]`}
                  >
                    3.
                  </div>
                </div>
                <div className={`Fc flex-1 ml-[8px]`}>
                  <input
                    className={`text-[#8C8A9A] text-[14px] font-[500] leading-[22px] bg-white outline-0`}
                    type="text"
                    defaultValue={`테스트 프로`}
                  />
                </div>
                <div className={`Fc ml-[7px]`}>
                  <button className={`text-[#5D45FF] text-[12px] font-[500]`}>
                    저장
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {/**/}
          <div className={`mt-[16px]`}>
            <ul className={`space-y-[16px]`}>
              {Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li>
                      <div
                        className={`text-[#8C8A9A] text-[16px] font-[400] leading-[16px] px-[12px] py-[16px]`}
                      >
                        Section
                      </div>
                      <ul className={`mt-[4px] space-y-[4px]`}>
                        {Array.from(Array(3)).map((obj2, idx2) => {
                          return (
                            <Fragment key={idx2}>
                              <li>
                                <button
                                  className={`Button_8 w-full ${
                                    active_idx == `${idx}${idx2}` ? 'On' : ''
                                  }`}
                                  onClick={(e) => setActiveIdx(`${idx}${idx2}`)}
                                >
                                  <ReactSVG src={`/icon/2312191447.svg`} />
                                  <div className={`ml-[12px]`}>
                                    ButtonLabel {idx}
                                    {idx2}
                                  </div>
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
            <button className={`Button_3 w-full`}>종합 결과 다운로드</button>
          </article>
        </div>
      </nav>
    </>
  );
}
