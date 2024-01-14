'use client';
import {Fragment} from 'react';

export default function TableUi_1_c() {
  return (
    <>
      <table className='TableUi_1 CenterMode'>
        <colgroup>
          <col/>
        </colgroup>
        <thead>
          <tr>
            <th>발생일시</th>
            <th>결제 목적</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>2024-12-01 13:15:13</td>
          <td className='text-[#5d45ff]'>구독결제</td>
          <td className='text-[#5d45ff]'>1,000,000</td>
        </tr>
          {
            Array.from(Array(9)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>2024-12-01 13:15:13</td>
                    <td>토큰충전</td>
                    <td>500,000</td>
                  </tr>
                </Fragment>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}