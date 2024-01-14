'use client';

import IconStar from '@/components/icon/IconStar';
import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';

export default function Page() {
  return (
    <>
      <main>
        <h1 className={`H1 Sticky Top`}>Button</h1>
        <section className={`HBox`}>
          <div className={`Inner`}>
            <h2 className={`H2`}>Style & State</h2>
            <article
              className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[10px] items-stretch justify-center`}
            >
              {[...Array(20).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div
                      className={`p-[5px] space-y-[5px] outline-dashed outline-[red] outline-[1px]`}
                    >
                      <button className={`Button_${idx + 1} w-full`}>
                        .Button_{idx + 1}
                      </button>
                      <button className={`Button_${idx + 1} w-full On`}>
                        .Button_{idx + 1}.On
                      </button>
                      <button
                        className={`Button_${idx + 1} w-full`}
                        disabled={true}
                      >
                        .Button_{idx + 1}[disabled]
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
        <section className={`HBox mt-[50px]`}>
          <div className={`Inner`}>
            <h2 className={`H2`}>Size</h2>
            <div className={`space-y-[30px]`}>
              {[...Array(10).keys()].map((obj2, idx2) => {
                return (
                  <Fragment key={idx2}>
                    <article
                      className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[10px] items-stretch justify-center`}
                    >
                      {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <div>
                              <button
                                className={`Button_${idx2 + 1} ${obj} w-full`}
                              >
                                Button_{idx2 + 1}.{obj}
                              </button>
                            </div>
                          </Fragment>
                        );
                      })}
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
        <section className={`HBox`}>
          <div className={`Inner`}>
            <h2 className={`H2`}>ETC Buttons</h2>
            <article className={`space-y-[30px]`}>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_0</h3>
                <div className={`CenterLeft gap-[10px]`}>
                  <button className={`Btn_0`}>
                    <div>인기순</div>
                    <div className={`[button:hover>&]:text-[red]`}>
                      <IconStar />
                    </div>
                  </button>
                </div>
              </div>
              <div className={`RR p-[10px]`}>
                <ul className={`space-y-[20px]`}>
                  <li>
                    <h3 className={`H3`}>Btn_1</h3>
                    <button className={`Btn_1 w-[200px]`}>
                      <div>2024-01-01</div>
                      <img src={`/icon/input_calendar.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <h3 className={`H3`}>Btn_1 Sm</h3>
                    <button className={`Btn_1 Sm w-[200px]`}>
                      <div>2024-01-01</div>
                      <img src={`/icon/input_calendar.svg`} alt={``} />
                    </button>
                  </li>
                </ul>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_2</h3>
                <a
                  className={`Btn_2`}
                  href={`https://www.google.com`}
                  target={`_blank`}
                >
                  비밀번호 변경하기
                  <img src={`/icon/2312121021.svg`} alt={``} />
                </a>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_3</h3>
                <button className={`Btn_3 w-[290px]`}>
                  사용플랜 혜택
                  <img src={`/icon/2312121108_1.svg`} alt={``} />
                </button>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_4</h3>
                <button className={`Btn_4 w-[290px]`}>
                  플랜 변경
                  <img src={`/icon/2312121108_2.svg`} alt={``} />
                </button>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_5</h3>
                <button className={`Btn_5 w-[290px]`}>
                  충전하기
                  <img src={`/icon/2312121108_1.svg`} alt={``} />
                </button>
              </div>
              <div className={`RR p-[10px]`}>
                <ul className={`space-y-[20px]`}>
                  <li>
                    <h3 className={`H3`}>Btn_6</h3>
                    <div className={`group`}>
                      <button
                        className={`CenterCenter Btn_6 w-full group-[&.On]:text-[#5d45ff]`}
                      >
                        모든 혜택 보기
                        <ReactSVG
                          className={`ml-[4px] group-[&.On]:rotate-180`}
                          src={`/icon/2401081347.svg`}
                        />
                      </button>
                    </div>
                  </li>
                  <li>
                    <h3 className={`H3`}>Btn_6 On</h3>
                    <div className={`On group`}>
                      <button
                        className={`CenterCenter Btn_6 w-full group-[&.On]:text-[#5d45ff]`}
                      >
                        모든 혜택 숨기기
                        <ReactSVG
                          className={`ml-[4px] group-[&.On]:rotate-180`}
                          src={`/icon/2401081347.svg`}
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_7</h3>
                <button className={`Btn_7`}>키워드 선택</button>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_8</h3>
                <button className={`Btn_8`}>
                  키워드 선택
                  <img src="/icon/2312261558.svg" alt={``} />
                </button>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>Btn_9</h3>
                <button className={`Btn_9`}>키워드 선택</button>
              </div>
              <div className={`RR p-[10px]`}>
                <h3 className={`H3`}>TabButton_1</h3>
                <article className={`CenterCenter gap-[10px]`}>
                  {[...Array(4).keys()].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className={`flex-1`}>
                          <button
                            className={`${
                              idx == 0 ? 'On' : ''
                            } TabButton_1 w-full`}
                          >
                            <div
                              className={`CenterCenter text-[16px] font-[600] leading-[1em]`}
                            >
                              <div>Text1</div>
                              <div
                                className={`w-[1px] h-[14px] bg-[#A3A1B1] mx-[6px]`}
                              ></div>
                              <div>Text2</div>
                            </div>
                            <div
                              className={`mt-[6px] text-[14px] font-[400] leading-[1em]`}
                            >
                              볼륨량 / %
                            </div>
                          </button>
                        </div>
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
