'use client';
import Keyword_1 from '@/components/common/Keyword_1';
import Keyword_2 from '@/components/common/Keyword_2';
import Data_2401041450 from '@/dummy/Data_2401041450';
import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';

export default function Nav_2() {
  return (
    <>
      <div className={`w-[360px] bg-white`}>
        <div
          className={`text-[#26262C] text-[18px] font-[600] py-[24px] px-[28px]`}
        >
          프로젝트 타이틀
        </div>
        <ul className={`border-b-[1px] border-b-[#E0DFEA]`}>
          <li className={`group`}>
            <button
              className={`CenterBetween w-full py-[12px] pl-[12px] pr-[20px] border-solid border-y-[1px] border-y-[#E0DFEA] text-left`}
            >
              <div>관심키워드</div>
              <ReactSVG
                className={`group-[&.On]:rotate-180 text-[#8C8A9A] group-[&.On]:text-[#5D45FF]`}
                src={`/icon/2312200919.svg`}
              />
            </button>
            <div className={`bg-[#F0EFF6]`}>
              <button
                className={`CenterLeft p-[12px_28px] text-[#5D45FF] text-[14px] font-[500] leading-[14px]`}
              >
                <ReactSVG src={`/icon/2312191221.svg`} />
                <div className={`ml-[6px]`}>카테고리 생성</div>
              </button>
              <ul>
                <li className={`group`}>
                  <div
                    className={`CenterBetween cursor-pointer w-full py-[12px] pl-[28px] pr-[20px] text-[#26262C] text-[14px] font-[500]`}
                  >
                    <div className={`Fc`}>
                      <article className="CenterLeft">
                        <ReactSVG
                          className={`text-[#8C8A9A] group-[&.On]:rotate-180 group-[&.On]:text-[#5D45FF]`}
                          src={`/icon/2312200919.svg`}
                        />
                        <div className={`ml-[6px]`}>새 카테고리</div>
                      </article>
                    </div>
                    <div className={`Fc`}>
                      <img src="/icon/2312191413.svg" alt="" />
                    </div>
                  </div>
                  <ul className={`hidden group-[&.On]:block`}>
                    {[...Array(2).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <li className={`pl-[40px]`}>
                            <Keyword_1 />
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </li>
              </ul>
              <ul>
                {[...Array(2).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li>
                        <Keyword_1 />
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
              <ul>
                <li className={`group On`}>
                  <div
                    className={`CenterBetween cursor-pointer w-full py-[12px] pl-[28px] pr-[20px] text-[#26262C] text-[14px] font-[500]`}
                  >
                    <div className={`Fc`}>
                      <article className="CenterLeft">
                        <ReactSVG
                          className={`text-[#8C8A9A] group-[&.On]:rotate-180 group-[&.On]:text-[#5D45FF]`}
                          src={`/icon/2312200919.svg`}
                        />
                        <div className={`ml-[6px]`}>새 카테고리</div>
                      </article>
                    </div>
                    <div className={`On Fc relative group`}>
                      <img src="/icon/2312191413_on.svg" alt="" />
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
                  </div>
                  <ul className={`hidden group-[&.On]:block`}>
                    {[...Array(2).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <li className={`pl-[40px]`}>
                            <Keyword_1 />
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          {[...Array(6).keys()].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li className={`group ${idx != 0 ? 'On' : ''}`}>
                  <button
                    className={`CenterBetween w-full py-[12px] pl-[12px] pr-[20px] border-solid border-t-[1px] border-t-[#E0DFEA] text-left`}
                  >
                    <article className="CenterLeft">
                      <article className="CenterLeft text-[#26262C] text-[16px] font-[600] leading-[16px]">
                        <div>Awareness</div>
                        <div
                          className={`w-[1px] h-[14px] bg-[#A3A1B1] mx-[10px]`}
                        ></div>
                        <div>Search</div>
                      </article>
                      <div
                        className={`ml-[10px] p-[8px] rounded-[8px] border-solid border-[1px] border-[#E0DFEA] text-[#26262C] text-[14px] font-[400] leading-[14px]`}
                      >
                        3929.32%
                      </div>
                    </article>
                    <ReactSVG
                      className={`group-[&.On]:rotate-180 text-[#8C8A9A] group-[&.On]:text-[#5D45FF]`}
                      src={`/icon/2312200919.svg`}
                    />
                  </button>
                  <div className={`bg-[#F0EFF6] hidden group-[&.On]:block`}>
                    <ul>
                      <li className={`group`}>
                        <div
                          className={`CenterBetween cursor-pointer w-full py-[12px] pl-[28px] pr-[20px] text-[#26262C] text-[14px] font-[500]`}
                        >
                          <div className={`Fc`}>
                            <article className="CenterLeft">
                              <ReactSVG
                                className={`text-[#8C8A9A] group-[&.On]:rotate-180 group-[&.On]:text-[#5D45FF]`}
                                src={`/icon/2312200919.svg`}
                              />
                              <div className={`ml-[6px]`}>Product option</div>
                              <div
                                className={`w-[1px] h-[14px] bg-[#E0DFEA] mx-[4px]`}
                              ></div>
                              <div
                                className={`text-[#8C8A9A] text-[14px] font-[400] leading-[14px]`}
                              >
                                3929.32%
                              </div>
                            </article>
                          </div>
                          <div className={`Fc`}>
                            <img src="/icon/2312191413.svg" alt="" />
                          </div>
                        </div>
                        <ul className={`hidden group-[&.On]:block`}>
                          {[...Array(2).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <li className={`pl-[40px]`}>
                                  <Keyword_2 />
                                </li>
                              </Fragment>
                            );
                          })}
                        </ul>
                      </li>
                      <li className={`group On`}>
                        <div
                          className={`CenterBetween cursor-pointer w-full py-[12px] pl-[28px] pr-[20px] text-[#26262C] text-[14px] font-[500]`}
                        >
                          <div className={`Fc`}>
                            <article className="CenterLeft">
                              <ReactSVG
                                className={`text-[#8C8A9A] group-[&.On]:rotate-180 group-[&.On]:text-[#5D45FF]`}
                                src={`/icon/2312200919.svg`}
                              />
                              <div className={`ml-[6px]`}>Product option</div>
                              <div
                                className={`w-[1px] h-[14px] bg-[#E0DFEA] mx-[4px]`}
                              ></div>
                              <div
                                className={`text-[#8C8A9A] text-[14px] font-[400] leading-[14px]`}
                              >
                                3929.32%
                              </div>
                            </article>
                          </div>
                          <div className={`Fc`}>
                            <img src="/icon/2312191413.svg" alt="" />
                          </div>
                        </div>
                        <ul className={`hidden group-[&.On]:block`}>
                          {[...Array(2).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <li className={`pl-[40px]`}>
                                  <Keyword_2 />
                                </li>
                              </Fragment>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
        {/**/}
      </div>
    </>
  );
}
