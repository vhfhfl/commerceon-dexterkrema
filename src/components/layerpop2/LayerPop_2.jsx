'use client';

import Cpnt_9 from '@/components/common/Cpnt_9';
import { Fragment } from 'react';

export default function LayerPop_2() {
  return (
    <>
      <div className={`w-[1008px] p-[60px] bg-white rounded-[32px]`}>
        <div className={`LayerPopupTitle_1`}>키워드 볼륨 순위</div>
        <div className={`mt-[48px] DataGrid_1 NoScroll`}>
          <div className={`GridHead`}>
            <table>
              <colgroup>
                <col className={`w-[5.95%]`} />
                <col className={``} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
              </colgroup>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>볼륨</th>
                  <th>볼륨</th>
                  <th>점유율(%)</th>
                  <th>CPC</th>
                  <th>경쟁도</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className={`GridBody`}>
            <table>
              <colgroup>
                <col className={`w-[5.95%]`} />
                <col className={``} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
                <col className={`w-[16.56%]`} />
              </colgroup>
              <tbody>
                {[...Array(20).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr>
                        <td>{idx + 1}</td>
                        <td>
                          <Cpnt_9 />
                        </td>
                        <td>1,300</td>
                        <td>00%</td>
                        <td>3.35</td>
                        <td>
                          <div className={`CenterCenter h-full`}>
                            {idx == 0 && (
                              <div
                                className={`text-center mx-auto w-[65px] bg-[#F8E1E6] text-[#F3436D] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}
                              >
                                High
                              </div>
                            )}
                            {idx == 1 && (
                              <div
                                className={`text-center mx-auto w-[65px] bg-[#FAECE6] text-[#FB9F5D] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}
                              >
                                Medium
                              </div>
                            )}
                            {idx != 0 && idx != 1 && (
                              <div
                                className={`text-center mx-auto w-[65px] bg-[#F0EFF6] text-[#5D45FF] text-[12px] font-[800] leading-[12px] rounded-[8px] py-[6px]`}
                              >
                                Low
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}