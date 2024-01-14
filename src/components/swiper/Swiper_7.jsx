'use client';
import {Fragment} from 'react';

export default function Swiper_7() {
  return (
    <>
      <>
        <div className={`Swiper_7`}>
          <article className={`CenterBetween gap-[2.5%]`}>
            <div>
              <div className={`Disabled NavBtn PrevBtn pointer-events-auto cursor-pointer [&.Disabled]:cursor-default`}>
                <img className={`[.NavBtn.Disabled>&]:hidden`} src={`/icon/swiper/prev_btn_2.svg`} alt={``}/>
                <img className={`hidden [.NavBtn.Disabled>&]:block`} src={`/icon/swiper/prev_btn_2_disabled.svg`} alt={``}/>
              </div>
            </div>
            <div className={`flex-1`}>
              <article className={`CenterCenter gap-[10px] overflow-hidden`}>
                <div>
                  <img className={`w-[220px] aspect-[220/122]`} src={`/image/2317071447.svg`} alt={``}/>
                </div>
                <div className={`relative w-[220px] flex flex-row items-end gap-0 aspect-[220/122] pl-[16px] pb-[16px] rounded-[8px] border-solid border-[1px] border-[#4558FF] bg-[linear-gradient(180deg,#9BC3FF_0%,#518CFF_96.33%)]`}>
                  <div className={`CenterCenter absolute top-[8px] right-[8px] z-10`}>
                    <input className={`Checkbox_2`} type={`checkbox`}/>
                  </div>
                  <div>
                    <div className={`CenterLeft text-[#fff] text-[14px] font-[600] leading-[14px]`}>
                      <div>신한카드</div>
                      <div className={`w-[1px] h-[14px] bg-white mx-[6px]`}/>
                      <div>신용카드</div>
                    </div>
                    <div className={`Montserrat mt-[8px] text-[#fff] text-[12px] font-[600] leading-[12px]`}>
                      40896600****878*
                    </div>
                  </div>
                </div>
                <div className={`w-[220px] flex flex-row items-end gap-0 aspect-[220/122] pl-[16px] pb-[16px] rounded-[8px] border-solid border-[1px] border-[#00BEC0] bg-[linear-gradient(180deg,#70EEFF_0%,#2AA6B7_96.33%)]`}>
                  <div>
                    <div className={`CenterLeft text-[#fff] text-[14px] font-[600] leading-[14px]`}>
                      <div>하나카드</div>
                      <div className={`w-[1px] h-[14px] bg-white mx-[6px]`}/>
                      <div>체크카드</div>
                    </div>
                    <div className={`Montserrat mt-[8px] text-[#fff] text-[12px] font-[600] leading-[12px]`}>
                      40896600****878*
                    </div>
                  </div>
                </div>
              </article>
              <div className={`mt-[20px] CenterCenter`}>
                <select className={`SelectBox_2 Lg w-[220px]`} defaultValue={``}>
                  <option value={``} disabled={true} hidden={true}>
                    일시불
                  </option>
                  <option value={`aaa`}>AAA</option>
                  <option value={`bbb`}>BBB</option>
                  <option value={`ccc`}>CCC</option>
                </select>
              </div>
              <div className={`mt-[30px]`}>
                <article className={`CenterCenter gap-[4px] text-[#26262c] text-[14px] font-[600]`}>
                  <div className={`text-[#5d45ff]`}>1</div>
                  <div>/</div>
                  <div>2</div>
                </article>
              </div>
            </div>
            <div>
              <div className={`NavBtn NextBtn pointer-events-auto cursor-pointer [&.Disabled]:cursor-default`}>
                <img className={`[.NavBtn.Disabled>&]:hidden`} src={`/icon/swiper/next_btn_2.svg`} alt={``}/>
                <img className={`hidden [.NavBtn.Disabled>&]:block`} src={`/icon/swiper/next_btn_2_disabled.svg`} alt={``}/>
              </div>
            </div>
          </article>
        </div>
      </>
    </>
  );
}