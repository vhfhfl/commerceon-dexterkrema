'use client';

export default function TableUi_2_f() {
  return (
    <>
      <table className='TableUi_2'>
        <colgroup>
          <col className='w-[20.625%]' />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th>
            <td>홍길동</td>
          </tr>
          <tr>
            <th>회사명</th>
            <td>애드플로러</td>
          </tr>
          <tr>
            <th>이메일 주소</th>
            <td>dex*****@dexterkrema.com</td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>010-1234-1234</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>문의드립니다.</td>
          </tr>
          <tr>
            <th>문의내용</th>
            <td>
              문의 내용을 입력해주세요.
              <br/>
              문의 내용을 입력해주세요.
              <br/>
              문의 내용을 입력해주세요.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}