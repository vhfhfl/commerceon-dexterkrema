'use client';

import Textarea_2 from '@/components/textinput/Textarea_2';

export default function TableUi_2_h() {
  return (
    <>
      <table className='TableUi_2'>
        <colgroup>
          <col className='w-[20.625%]'/>
          <col/>
        </colgroup>
        <tbody>
          <tr>
            <th>작성자 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <div className='TextInput_1 w-[320px]'>
                <input placeholder='placeholder'/>
                <button className='ResetBtn'>
                  <img src='/icon/input_delete.svg' alt=''/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>회사명 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <div className='TextInput_1 w-[320px]'>
                <input placeholder='placeholder'/>
                <button className='ResetBtn'>
                  <img src='/icon/input_delete.svg' alt=''/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>이메일 주소 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <div className='TextInput_1 w-[320px]'>
                <input placeholder='placeholder'/>
                <button className='ResetBtn'>
                  <img src='/icon/input_delete.svg' alt=''/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>연락처 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <div className='TextInput_1 w-[320px]'>
                <input placeholder='placeholder'/>
                <button className='ResetBtn'>
                  <img src='/icon/input_delete.svg' alt=''/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>제목 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <div className='TextInput_1 w-[320px]'>
                <input placeholder='placeholder'/>
                <button className='ResetBtn'>
                  <img src='/icon/input_delete.svg' alt=''/>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>문의내용 <span className='text-[#5d45ff]'>*</span></th>
            <td>
              <Textarea_2/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}