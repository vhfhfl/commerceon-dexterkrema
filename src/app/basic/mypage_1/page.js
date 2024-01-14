'use client';

import TabBar_2 from '@/components/common/TabBar_2';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[102px]'>
        <section className='HBox pt-[100px] pb-[60px] bg-[#f0eff6]'>
          <div className='Inner'>
            <div className='text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              마이페이지
            </div>
            <article className='mt-[44px] CenterBetween'>
              <div className='text-[#26262c] text-[22px] font-[400]'>
                <span className='font-[700]'>애드플로러</span>의 성공적인 마케팅
                플랜을 기원합니다.
              </div>
              <div>
                <a className='Btn_2' href='https://www.google.com' target='_blank'>
                  비밀번호 변경하기
                  <img src='/icon/2312121021.svg' alt=''/>
                </a>
              </div>
            </article>
            <article className='mt-[32px] flex items-stretch justify-between gap-[2.5%]'>
              <div className='flex-1 px-[3.05%] py-[44px] bg-[#fff] border-[1px] border-solid border-[#e0dfea] rounded-[24px]'>
                <article className='flex items-end justify-between'>
                  <div>
                    <div className='text-[#26262c] text-[22px] font-[700]'>
                      사용플랜
                    </div>
                    <div className='mt-[20px] Montserrat text-[#5d45ff] text-[40px] font-[700] leading-[40px] tracking-[-0.4px]'>
                      Premium
                    </div>
                  </div>
                  <div className='text-[#8c8a9a] text-[18px] font-[400] text-right'>
                    <div>다음 결제일 : 2023.12.01</div>
                    <div className='mt-[12px]'>계정당 동시 접속 : 3대</div>
                  </div>
                </article>
                <div className='mt-[56px]'>
                  <article className='CenterCenter gap-[4.84%]'>
                    <div className='flex-1'>
                      <button className='Btn_3 w-full'>
                        사용플랜 혜택
                        <img src='/icon/2312121108_1.svg' alt=''/>
                      </button>
                    </div>
                    <div className='flex-1'>
                      <button className='Btn_4 w-full'>
                        플랜 변경
                        <img src='/icon/2312121108_2.svg' alt=''/>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
              <div className='flex-1 px-[3.05%] py-[44px] bg-[#fff] border-[1px] border-solid border-[#e0dfea] rounded-[24px]'>
                <div className='text-[#26262c] text-[22px] font-[700]'>
                  보유토큰
                </div>
                <article className='mt-[20px] CenterLeft'>
                  <div className='Montserrat text-[#26262c] text-[40px] font-[700] leading-[40px] tracking-[-0.4px]'>
                    1,000,000
                  </div>
                  <div className='ml-[8px] text-[#8c8a9a] text-[20px] font-[400]'>
                    토큰 보유
                  </div>
                </article>
                <div className='mt-[56px]'>
                  <article className='CenterCenter gap-[4.84%]'>
                    <div className='flex-1'>
                      <button className='Btn_5 w-full'>
                        충전하기
                        <img src='/icon/2312121108_1.svg' alt=''/>
                      </button>
                    </div>
                    <div className='flex-1'>
                      <button className='Btn_4 w-full'>
                        토큰 사용내역
                        <img src='/icon/2312121108_2.svg' alt=''/>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <TabBar_2/>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <article className='flex items-stretch justify-between gap-[1.94%]'>
              {['최근 결제 내역', '1:1 문의내역'].map((obj, idx) => {
                return (
                <Fragment key={idx}>
                  <div className='flex-1 px-[2.5%] py-[36px] bg-[#fff] border-[1px] border-solid border-[#e0dfea] rounded-[24px]'>
                    <div className='text-[#26262c] text-[24px] font-[700]'>
                      {obj}
                    </div>
                    <div className='mt-[28px] space-y-[12px]'>
                      <article className='grid grid-cols-[100px_1fr_114px] text-[#26262c] text-[18px] font-[500]'>
                        <div className='text-[#8c8a9a] text-[16px]'>2023-10-25</div>
                        <div className='truncate'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                        </div>
                        <div className='text-right'>100,000</div>
                      </article>
                      <article className='grid grid-cols-[100px_1fr_114px] text-[#26262c] text-[18px] font-[500]'>
                        <div className='text-[#8c8a9a] text-[16px]'>2023-10-25</div>
                        <div className='text-[#5d45ff] truncate'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                        </div>
                        <div className='text-[#5d45ff] text-right'>100,000</div>
                      </article>
                      <article className='grid grid-cols-[100px_1fr_114px] text-[#26262c] text-[18px] font-[500]'>
                        <div className='text-[#8c8a9a] text-[16px]'>2023-10-25</div>
                        <div className='truncate'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                        </div>
                        <div className='text-right'>
                          <div className='Badge_2'>답변대기</div>
                        </div>
                      </article>
                      <article className='grid grid-cols-[100px_1fr_114px] text-[#26262c] text-[18px] font-[500]'>
                        <div className='text-[#8c8a9a] text-[16px]'>2023-10-25</div>
                        <div className='truncate'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                        </div>
                        <div className='text-right'>
                          <div className='Badge_2 Style1'>답변완료</div>
                        </div>
                      </article>
                    </div>
                    <div className='mt-[32px] text-right'>
                      <a className='Btn_2' href='https://www.google.com'>
                        내역 상세보기
                        <img src='/icon/2312121021.svg' alt=''/>
                      </a>
                    </div>
                  </div>
                </Fragment>
                );
              })}
            </article>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}