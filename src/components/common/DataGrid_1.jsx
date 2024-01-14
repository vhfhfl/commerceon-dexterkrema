'use client';
import { Fragment } from 'react';

export default function DataGrid_1() {
  return (
    <>
      <div className={`DataGrid_1`}>
        <div className={`GridHead`}>
          <table>
            <colgroup>
              <col className={`w-[110px]`} />
              <col className={`w-[136px]`} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  Keyword
                  <br />
                  Volume
                </th>
                <th>Website</th>
                <th>
                  Feature
                  <br />
                  <span
                    className={`text-[#8C8A9A] text-[12px] font-[400] leading-[12px]`}
                  >
                    Organic
                  </span>
                </th>
                <th>
                  Content
                  <br />
                  Elements
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={`GridBody h-[200px]`}>
          <table>
            <colgroup>
              <col className={`w-[110px]`} />
              <col className={`w-[136px]`} />
            </colgroup>
            <tbody>
              {[...Array(10).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <tr>
                      <td>422,000</td>
                      <td>
                        <a
                          href="#"
                          target="_blank"
                          className={`block truncate LinkBtn`}
                        >
                          www.google.com www.google.com www.google.com
                          www.google.com
                        </a>
                      </td>
                      <td>30</td>
                      <td>
                        <article className={`CenterCenter gap-[4px]`}>
                          {[...Array(5).keys()].map((obj, idx) => {
                            return (
                              <Fragment key={idx}>
                                <div className={`relative group`}>
                                  <img src="/icon/2312261218.svg" alt="" />
                                  <div
                                    className={`hidden group-hover:block ToolTip_2 top-full left-0 translate-y-[5px]`}
                                  >
                                    TYPE 값 표시
                                  </div>
                                </div>
                              </Fragment>
                            );
                          })}
                          <div
                            className={`ml-[4px] text-[#5D45FF] text-[12px] font-[400] leading-[12px]`}
                          >
                            +5
                          </div>
                        </article>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
