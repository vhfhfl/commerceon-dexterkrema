'use client';
import Textarea_2 from '@/components/textinput/Textarea_2';

export default function TableUi_2_e() {
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
            <td>홍길동</td>
          </tr>
          <tr>
            <th>
              회사명 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>애드플로러</td>
          </tr>
          <tr>
            <th>
              이메일 주소 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>dex*****@dexterkrema.com</td>
          </tr>
          <tr>
            <th>
              연락처 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>010-1234-1234</td>
          </tr>
          <tr>
            <th>
              제목 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <div className="TextInput_1 w-[320px]">
                <input placeholder="제목을 입력해주세요." />
                <button className="ResetBtn">
                  <img src="/icon/input_delete.svg" alt="" />
                </button>
              </div>
              <div className="FormMsg Type2">제목을 입력해주세요.</div>
            </td>
          </tr>
          <tr>
            <th>
              문의내용 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <Textarea_2 />
              <div className="FormMsg Type2">문의내용을 입력해주세요.</div>
            </td>
          </tr>
          <tr>
            <th>
              자동 등록방지 <span className="text-[#5d45ff]">*</span>
            </th>
            <td>
              <article className="flex items-start">
                <div>
                  <div>
                    <img src="https://gifpng.com/340x88" alt="" />
                  </div>
                  <div className="mt-[8px]">
                    <a
                      className="text-[#5d45ff] text-[14px] font-[600] underline underline-offset-2"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      문자 새로고침
                    </a>
                  </div>
                </div>
                <div className="ml-[64px]">
                  <div className="CenterLeft">
                    <div className="TextInput_1 w-[320px]">
                      <input placeholder="자동 등록방지 코드를 입력해주세요." />
                      <button className="ResetBtn">
                        <img src="/icon/input_delete.svg" alt="" />
                      </button>
                    </div>
                    <button className="ml-[12px] Button_3 w-[100px]">
                      확인
                    </button>
                  </div>
                  <div className="FormMsg Type2">
                    자동등록방지 문구를 정확하게 입력해주세요.
                  </div>
                </div>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}