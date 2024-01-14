'use client';
import Textarea_2 from '@/components/textinput/Textarea_2';

export default function TableUi_2_c() {
  return (
    <>
      <table className="TableUi_2">
        <colgroup>
          <col className="w-[20.625%]" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>
              작성자 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input
                  placeholder="작성자명을 입력해주세요."
                  defaultValue="홍길동"
                />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              비밀번호 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <button>
                <img src="/icon/2312111943.svg" alt="" />
              </button>
            </td>
          </tr>
          <tr>
            <th>
              회사명 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input
                  placeholder="회사명을 입력해주세요."
                  defaultValue="애드플로러"
                />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              이메일 주소 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input
                  placeholder="이메일주소를 입력해주세요."
                  defaultValue="dex*****@dexterkrema.com"
                />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              연락처 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input
                  placeholder="-을 제외한 숫자만 입력해주세요."
                  defaultValue="010-1234-1234"
                />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              제목 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input
                  placeholder="제목을 입력해주세요."
                  defaultValue="문의드립니다."
                />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              문의내용 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <Textarea_2 />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}