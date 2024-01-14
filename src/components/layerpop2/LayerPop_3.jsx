'use client';

import Cpnt_120105016 from '@/components/common/Cpnt_120105016';
import Cpnt_120105016_2 from '@/components/common/Cpnt_120105016_2';
import PagingSet_1 from '@/components/common/PagingSet_1';
import { Fragment } from 'react';

export default function LayerPop_3({ className, children }) {
  return (
    <>
      <div
        className={`${className} w-[1008px] p-[60px] bg-white rounded-[32px]`}
      >
        <div className={`LayerPopupTitle_1`}>키워드기반 VOC RowDate</div>
        <article
          className={`mt-[48px] CenterCenter p-[24px] border-solid border-[1px] border-[#E0DFEA] rounded-[12px] w-[195px]`}
        >
          <div className={`text-[#26262C] text-[18px] font-[600]`}>
            선택된 키워드
          </div>
          <div className={`ml-[16px] text-[#5D45FF] text-[16px] font-[400]`}>
            캠핑
          </div>
        </article>
        <article className={`mt-[24px] TopBetween gap-[24px]`}>
          <div className={`flex-1`}>
            <Cpnt_120105016 />
          </div>
          <div className={`flex-1`}>
            <Cpnt_120105016_2 />
          </div>
        </article>
        <PagingSet_1 className={`mt-[48px]`} />
        <article className={`mt-[80px] CenterCenter`}>
          <div>
            <button className={`Button_1 Lg w-[220px]`}>확인</button>
          </div>
        </article>
      </div>
    </>
  );
}
