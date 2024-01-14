'use client';
import {Fragment} from 'react';

export default function Modal_3() {
  return (
    <>
      <div className='Modal_3'>
        <div className='Head'>
          <div>
            콘텐츠 생성형 최고의 서비스
            <br/>
            <span className='text-[#5d45ff]'>애드플로러 AI</span>로 경험하세요.
          </div>
        </div>
        <div className='Body'>
          <article className='flex items-start justify-between gap-[44px]'>
            <ul className='space-y-[24px]'>
              {['고객 페르소나 도출', 'VOC', '아티클 생성', '생성배너 및 성과예측', 'AI 생성 컨텐츠 자동화 구축',].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <li>
                      <button className={`${idx == 0 && `On`} Button_10 Xl w-[298px]`}>
                        {obj}
                      </button>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
            <div className='flex-1 max-h-[692px] overflow-y-auto'>
              <div>
                <article className='CenterLeft text-[#26262c] text-[22px] font-[700]'>
                  <div className='text-[#5d45ff]'>STEP1.</div>
                  <div className='ml-[16px]'>
                    소비자의 의도를 파악하고, 우리의 타겟들을 발굴해보세요.
                  </div>
                </article>
                <div className='mt-[16px] text-[#26262c] text-[18px] font-[400] leading-[26px]'>
                  산업 카테고리, 자사, 경쟁사 키워드만 입력하면 연관 검색 키워드를 바탕으로, 고객이 어떤 키워드를 통해 자사 브랜드를 발견하고 제품 or 서비스를 구매하는지 파악할 수 있습니다. 고객의 검색 키워드를 기반으로 해당 시장에서 최적의 마케팅 전략을 구성해보세요.
                </div>
                <div className='mt-[32px]'>
                  <img src='https://gifpng.com/646x376?text=관리자 에디터 영역' alt=''/>
                  <div className='mt-[32px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className='Foot'>
          <article className='CenterCenter gap-[10px]'>
            <div>
              <button className='Button_3 Lg w-[220px]'>닫기</button>
            </div>
            <div>
              <button className='Button_1 Lg w-[220px]'>서비스 구독신청</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}