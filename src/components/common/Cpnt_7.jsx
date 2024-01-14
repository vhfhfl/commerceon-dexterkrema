'use client';
import Cpnt_9 from '@/components/common/Cpnt_9';
import { Fragment } from 'react';

export default function Cpnt_7() {
  return (
    <>
      <div
        className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}
      >
        <div className={`CenterCenter py-[20px]`}>
          <div
            className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}
          >
            Lorem Ipsum
          </div>
        </div>
        <div className={`border-t-[1px] border-t-[#E0DFEA] p-[12px]`}>
          <div className={`DataGrid_1`}>
            <div className={`GridHead`}>
              <table>
                <colgroup>
                  <col className={``} />
                  <col className={`w-[30.96%]`} />
                </colgroup>
                <thead>
                  <tr>
                    <th>키워드</th>
                    <th>빈도수</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className={`GridBody h-[324px]`}>
              <table>
                <colgroup>
                  <col className={``} />
                  <col className={`w-[30.96%]`} />
                </colgroup>
                <tbody>
                  {[...Array(10).keys()].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <tr>
                          <td>
                            <Cpnt_9 />
                          </td>
                          <td>30</td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
