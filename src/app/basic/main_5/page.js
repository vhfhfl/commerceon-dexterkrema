'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import HTMLReactParser from 'html-react-parser';
import Data_2312261937 from '@/dummy/Data_2312261937';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[127px]'>
        <section className='HBox py-[80px]'>
          <div className='Inner'>
            <div className='Montserrat text-[#26262c] text-[20px] font-[700]'>
              Who we are
            </div>
            <div className='mt-[32px]'>
              <div className='text-[#26262c] text-[46px] font-[700] leading-[64px]'>
                고객사들의 브랜드 성장과 혁신을 위한
                <br/>
                맞춤형 마케팅 솔루션을 제공하여
                <br/>
                창의력과 전문성을 바탕으로 성장합니다.
              </div>
              <div className='mt-[80px]'>
                <ul className='CenterLeft gap-[52px]'>
                  {Data_2312261937.map((obj, idx) => {
                    const {제목, 내용} = obj;

                    return (
                      <Fragment key={idx}>
                        <li>
                          <div className='text-[#26262c] text-[24px] font-[400]'>{제목}</div>
                          <div className='text-[#5d45ff] text-[68px] font-[900]'>{내용}</div>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
              <div className='mt-[24px] w-[900px] text-[#26262c] text-[18px] font-[400] leading-[28px]'>
                덱스터크레마(구 크레마월드와이드)는 2009년에 설립된 디지털 종합대행사로서
                <br/>
                300여 억원의 매출과 100여명의 전문 인력을 보유하고 있습니다. 지난 14년간, 글로벌 대기업부터 혁신적인 스타트업에
                <br/>
                이르기까지 다양한 고객사들의 브랜드 성장과 혁신을 위한 맞춤형 마케팅 솔루션을 제공해왔습니다.
                <br/>
                또 한 칸, 뉴욕페스티벌, 원쇼 등의 국제 광고제에서 17회 수상한 경력과 2명의 심사위원 배출로 증명되는 창의력과
                <br/>
                전문성을 바탕으로 성장하고 있는 기업입니다.
              </div>
            </div>
          </div>
        </section>
        <section className='HBox py-[80px] bg-[#f0eff6]'>
          <div className='Inner'>
            <div className='Montserrat text-[#26262c] text-[20px] font-[700]'>
              Creative that works
            </div>
            <div className='mt-[32px]'>
              <div className='text-[#26262c] text-[46px] font-[700] leading-[64px]'>
                트랜드를 접목하여
                <br/>
                분석적이고 효율적이며
                <br/>
                최적화된 서비스를 제공합니다.
              </div>
              <div className='mt-[32px]'>
                <ul className='CenterLeft'>
                  {['최신 트랜드<br/>마케팅 기술<br/>도입 및 최적화', '데이터기반의<br/>초개인화 마케팅', 'Mission<br/><br/>클라이언트의<br/>실질적인<br/>마케팅 목표 달성'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        {idx == 2 ? (
                          <li
                            className={`w-[220px] CenterCenter aspect-square rounded-full text-[#fff] text-[18px] font-[600] leading-[28px] text-center bg-[#7a67fd] border-[4px] border-solid border-[#d0d5fa] shadow-[0_0_32px_rgba(20,8,104,0.16)]`}>
                            <div>
                              {HTMLReactParser(obj)}
                            </div>
                          </li>
                        ) : (
                          <li
                            className={`w-[220px] CenterCenter aspect-square rounded-full text-[#26262c] text-[18px] font-[600] leading-[28px] text-center border-[4px] border-solid border-[#d0d5fa] shadow-[0_0_32px_rgba(20,8,104,0.16)]`}>
                            <div>
                              {HTMLReactParser(obj)}
                            </div>
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
              <div className='mt-[24px] w-[900px] text-[#26262c] text-[18px] font-[400] leading-[28px]'>
                덱스터크레마의 미션은 강력하면서도 실제로 실행 가능한 아이디어를 도출하여 클라이언트의 영업 및 판매를 촉진하는 것입니다.
                <br/>
                구글, 세일즈포스와 같은 주요 빅테크 플랫폼과의 파트너십을 통해 과업 수행 능력을 인정받았으며,
                <br/>
                데이터 기반의 초개인화 마케팅, 메타버스, 버추얼 휴먼, 버추얼 스튜디오 제작 등 최신 트렌드를 접목하여 분석적이고,
                <br/>
                효율적이며, 최적화된 서비스를 제공합니다.
              </div>
            </div>
          </div>
        </section>
        <section className='HBox py-[80px] bg-[#1c1c20]'>
          <div className='Inner'>
            <div className='text-[#9fafff] text-[20px] font-[700]'>
              애드플로러
            </div>
            <div className='mt-[32px]'>
              <div className='text-[#fff] text-[46px] font-[700] leading-[64px]'>
                사람의 판단력과 AI의 보조기능을
                <br/>
                최적화하는데 초점을 맞춘
                <br/>
                통합 광고 솔루션입니다.
              </div>
              <div className='mt-[24px] w-[900px] text-[#fff] text-[18px] font-[400] leading-[28px]'>
                애드플로러는 AI의 한계로 일컬어지는 환각 효과(Hallucination)를 배제하고 사람의 판단력과 AI의 보조기능을
                <br/>
                최적화하는데 초점을 맞춘 통합 광고 솔루션으로, 고도의 마케팅 능력을 필요로 하는 대기업 광고주들에게 제공되는
                <br/>
                현업 실제 프로세스에 기반하여 초개인화 마케팅 솔루션으로 개발되었습니다.
                <br/>
                애드플로러는 앞으로 지속적인 업데이트를 통해 광고 자동화, 고퀄리티 동영상 제작, 버추얼 모델, 버츄얼 프로덕션 등과
                <br/>
                결합하여 서비스 영역을 무한히 확장해 나갈 예정입니다.
              </div>
            </div>
            <div className='mt-[60px]'>
              <img src='/icon/2312261837.svg' alt=''/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[261px]'>
          <div className='Inner'>
            <div className='text-[#26262c] text-[50px] font-[700] leading-[66px] text-center'>
              애드플로러와
              <br/>
              혁신을 만들어가는 파트너
            </div>
            <div className='mt-[60px]'>
              <ul className='CenterCenter gap-[4.16%]'>
                {[...Array(4).keys()].map((obj, idx) => {
                  const 로고 = `/icon/2312191908_${idx + 1}.svg`;
                  return (
                    <Fragment key={idx}>
                      <li>
                        <img src={로고} alt=''/>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className='HBox mt-[129px]'>
          <div className='Inner'>
            <Swiper_6/>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}