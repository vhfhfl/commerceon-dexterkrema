'use client';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import {Fragment} from 'react';

export default function SizeSelect_1() {
  return (
    <>
      <div className={`WhiteBox`}>
        <WhiteBoxTitle_1>Lorem Ipsum is simply</WhiteBoxTitle_1>
        <ul className={`mt-[40px] space-y-[16px]`}>
          {[...Array(5).keys()].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <button className={`${idx == 2 ? 'On' : ''} group w-full text-left p-[16px_21px] border-solid border-[1px] border-[#E0DFEA] [&.On]:border-[#5D45FF] bg-white [&.On]:bg-[#F0EFF6] rounded-[12px]`}>
                    <article className={`flex flex-row gap-[12px]`}>
                      <div className={`Fc`}>
                        <img className={`group-[.On]:hidden`} src={`/icon/2312271031.svg`} alt={``}/>
                        <img className={`hidden group-[.On]:block`} src={`/icon/2312271031_on.svg`} alt={``}/>
                      </div>
                      <div className={`Fc flex-1`}>
                        <div>
                          <div className={`text-[#26262C] group-[.On]:text-[#5D45FF] text-[16px] font-[600] leading-[16px]`}>
                            Lorem Size
                          </div>
                          <div className={`mt-[16px] text-[#8C8A9A] group-[.On]:text-[#5D45FF] text-[14px] font-[400] leading-[14px]`}>
                            FB/ IG/ Linkedin/ Twitter Feed
                          </div>
                          <div className={`mt-[8px] text-[#8C8A9A] group-[.On]:text-[#5D45FF] text-[14px] font-[400] leading-[14px]`}>
                            1080 * 1080
                          </div>
                        </div>
                      </div>
                    </article>
                  </button>
                </li>
              </Fragment>
            );
          })}
          <li>
            <button className={`group w-full text-left p-[16px_21px] border-solid border-[1px] border-[#E0DFEA] [&.On]:border-[#5D45FF] bg-white [&.On]:bg-[#F0EFF6] rounded-[12px]`}>
              <article className={`flex flex-row gap-[12px]`}>
                <div className={`Fc`}>
                  <img className={`group-[.On]:hidden`} src={`/icon/2312271031.svg`} alt={``}/>
                  <img className={`hidden group-[.On]:block`} src={`/icon/2312271031_on.svg`} alt={``}/>
                </div>
                <div className={`Fc flex-1`}>
                  <div>
                    <div className={`text-[#26262C] group-[.On]:text-[#5D45FF] text-[16px] font-[600] leading-[16px]`}>
                      Custom Size
                    </div>
                    <article className={`mt-[14px] CenterBetween gap-[2px]`}>
                      <div className={`flex-1`}>
                        <div className={`TextInput_1 Sm w-full`}>
                          <input placeholder={`가로사이즈 입력`}/>
                        </div>
                      </div>
                      <div className={`text-[#8C8A9A] text-[14px] font-[400] leading-[14px]`}>
                        *
                      </div>
                      <div className={`flex-1`}>
                        <div className={`TextInput_1 Sm w-full`}>
                          <input placeholder={`세로사이즈 입력`}/>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </article>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}