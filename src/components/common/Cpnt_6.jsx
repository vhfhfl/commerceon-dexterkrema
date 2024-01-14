'use client';
import Cpnt_10 from '@/components/common/Cpnt_10';
import Cpnt_11 from '@/components/common/Cpnt_11';
import { Fragment } from 'react';

export default function Cpnt_6({ className }) {
  return (
    <>
      <div className={`${className} space-y-[24px]`}>
        <div className={`DataGrid_1 NoScroll`}>
          <div className={`GridHead`}>
            <table>
              <colgroup>
                <col className={`w-[182px]`} />
                <col className={`w-[16.88%]`} />
                <col className={`w-[16.88%]`} />
              </colgroup>
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>관련 키워드 리스트</th>
                  <th>타겟 관심사 키워드</th>
                  <th>페르소나</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className={`GridBody`}>
            <table>
              <colgroup>
                <col className={`w-[182px]`} />
                <col className={`w-[16.88%]`} />
                <col className={`w-[16.88%]`} />
              </colgroup>
              <tbody>
                {[...Array(3).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr>
                        <td>
                          <div>
                            <img
                              className={`mx-auto rounded-[12px]`}
                              src="https://gifpng.com/140x140"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <Cpnt_10 />
                        </td>
                        <td>
                          <Cpnt_10 />
                        </td>
                        <td>
                          <Cpnt_11 />
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`DataGrid_1 NoScroll`}>
          <div className={`GridBody`}>
            <table>
              <colgroup>
                <col className={`w-[182px]`} />
                <col className={`w-[16.88%]`} />
                <col className={`w-[16.88%]`} />
              </colgroup>
              <tbody>
                {[...Array(3).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr>
                        <td>
                          <div>
                            <img
                              className={`mx-auto rounded-[12px]`}
                              src="https://gifpng.com/140x140"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <Cpnt_10 />
                        </td>
                        <td>
                          <Cpnt_10 />
                        </td>
                        <td>
                          <Cpnt_11 />
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
