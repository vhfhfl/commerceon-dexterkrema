'use client';
import {Fragment} from 'react';

export default function TableUi_1_b() {
  return (
    <>
      <table className='TableUi_1 CenterMode'>
        <colgroup>
          <col/>
        </colgroup>
        <thead>
          <tr>
            <th>발생일시</th>
            <th>충전/차감</th>
            <th>토큰 사용 상세</th>
            <th>차감 토큰</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-12-01 13:15:13</td>
            <td className='text-[#5d45ff]'>충전</td>
            <td>-</td>
            <td className='text-[#5d45ff]'>100</td>
          </tr>
          {
            Array.from(Array(9)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>2024-12-01 13:15:13</td>
                    <td>차감</td>
                    <td>배너 +이미지 생성</td>
                    <td>1</td>
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