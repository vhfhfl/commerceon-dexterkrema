'use client';
import Cpnt_9 from '@/components/common/Cpnt_9';
import TextBox_1 from '@/components/common/TextBox_1';
import BlankBox from '@/components/etc/BlankBox';
import { Fragment } from 'react';

export default function VolBox_2({ className }) {
  return (
    <>
      <div
        className={`${className} rounded-[12px] border-solid border-[1px] border-[#E0DFEA] overflow-hidden`}
      >
        <div className={`bg-[#F0EFF6] p-[12px]`}>
          <article className={`CenterCenter`}>
            <div
              className={`w-[20px] aspect-square bg-[#5D45FF] rounded-[4px]`}
            ></div>
            <article
              className={`ml-[6px] CenterLeft text-[#26262C] text-[16px] font-[600] leading-[16px]`}
            >
              <div>Text 1</div>
              <div className={`mx-[6px] w-[1px] h-[14px] bg-[#CFCEDC]`}></div>
              <div>Text 2</div>
            </article>
          </article>
          <div
            className={`text-center mt-[10px] text-[#3D3C42] text-[14px] font-[400] leading-[14px]`}
          >
            볼륨량 / %
          </div>
        </div>
        <div className={`p-[16px]`}>
          <BlankBox className={`h-[420px]`}>Chart Area</BlankBox>
          <TextBox_1
            className={`mt-[24px] h-[224px] text-[#3D3C42] text-[14px] font-[500] leading-[20px]`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TextBox_1>
          <div className={`mt-[24px] CenterCenter gap-[8px]`}>
            <div className={`flex-1`}>
              <button className={`Button_6 w-full h-[54px] On`}>
                Main
                <br />
                Keyword
              </button>
            </div>
            <div className={`flex-1`}>
              <button className={`Button_6 w-full h-[54px]`}>
                Niche
                <br />
                Keyword
              </button>
            </div>
          </div>
          <div className={`mt-[16px]`}>
            <div className={`DataGrid_1`}>
              <div className={`GridHead`}>
                <table>
                  <colgroup>
                    <col className={``} />
                    <col className={`w-[74px]`} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>키워드</th>
                      <th>볼륨</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={`GridBody h-[369px]`}>
                <table>
                  <colgroup>
                    <col className={``} />
                    <col className={`w-[74px]`} />
                  </colgroup>
                  <tbody>
                    {[...Array(30).keys()].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <tr>
                            <td>
                              <Cpnt_9 />
                            </td>
                            <td>1,200</td>
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
      </div>
    </>
  );
}
