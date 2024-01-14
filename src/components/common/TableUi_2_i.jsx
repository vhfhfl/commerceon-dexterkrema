'use client';
export default function TableUi_2_i() {
  return (
    <>
      <table className='TableUi_2'>
        <colgroup>
          <col className='w-[37.125%]'/>
          <col/>
        </colgroup>
        <tbody>
          <tr>
            <th>구독 신청 상품</th>
            <td>Enterprise</td>
          </tr>
          <tr>
            <th>결제일시</th>
            <td>2023-11-02 20:20:20</td>
          </tr>
          <tr>
            <th>이용기간</th>
            <td>2023-11-02 ~ 2023-12-01</td>
          </tr>
          <tr>
            <th>결제방식</th>
            <td>신용카드</td>
          </tr>
          <tr>
            <th>결제금액</th>
            <td className='text-[#5d45ff]'>3,300,000 원</td>
          </tr>
          <tr>
            <th>다음 결제일</th>
            <td className='text-[#5d45ff]'>2023-12-02</td>
          </tr>
          <tr>
            <th>다음 결제 예정금액</th>
            <td className='text-[#5d45ff]'>3,300,000원</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}