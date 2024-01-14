'use client';
import {Fragment} from 'react';

export default function TableUi_1_d() {
  return (
    <>
      <table className='TableUi_1 CenterMode'>
        <colgroup>
          <col className='w-[15.83%]'/>
          <col/>
          <col className='w-[15.83%]'/>
        </colgroup>
        <thead>
          <tr>
            <th>작성일시</th>
            <th>제목</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.from(Array(7)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>2024-12-01 13:15:13</td>
                    <td>
                      <div className='px-[3.65%] line-clamp-1'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi vel. Quod?
                      </div>
                    </td>
                    <td>답변대기</td>
                  </tr>
                </Fragment>
              );
            })
          }
          <tr>
            <td>2024-12-01 13:15:13</td>
            <td>
              <div className='px-[3.65%] line-clamp-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem deleniti
                esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat, saepe sapiente sequi
                vel. Quod?
              </div>
            </td>
            <td className='text-[#5D45FF]'>답변완료</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}