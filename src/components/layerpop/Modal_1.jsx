'use client';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Modal_1() {
  return (
    <>
      <div className='Modal_1'>
        <div className='Head'>
          <div>비밀번호 변경</div>
        </div>
        <div className='Body'>
          <ul className='space-y-[60px]'>
            <li>
              <FormLabel_1 require={false}>이전 비밀번호 입력</FormLabel_1>
              <div className='mt-[8px]'>
                <div className='TextInput_3 w-full'>
                  <input type='password' placeholder='이전 비밀번호를 입력해주세요.'/>
                  <button className='ResetBtn'>
                    <img src='/icon/input_delete.svg' alt=''/>
                  </button>
                  <button className='EyeBtn'>
                    <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                    <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                  </button>
                </div>
              </div>
              <div className='FormMsg Type2'>
                이전 비밀번호와 일치하지 않습니다.
              </div>
            </li>
            <li>
              <FormLabel_1 require={false}>새 비밀번호 입력</FormLabel_1>
              <div className='mt-[8px]'>
                <div className='TextInput_3 w-full'>
                  <input type='password' placeholder='새로운 비밀번호를 입력해주세요.'/>
                  <button className='ResetBtn'>
                    <img src='/icon/input_delete.svg' alt=''/>
                  </button>
                  <button className='EyeBtn'>
                    <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                    <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                  </button>
                </div>
              </div>
              <div className='FormMsg Type3 leading-[18px]'>
                영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여
                <br/>
                최소 10자리 이상으로 설정해주세요.
              </div>
              <div className='FormMsg Type2 leading-[18px]'>
                영문(소문자,대문자), 숫자, 특수문자 중 3종류 이상을 조합하여
                <br/>
                최소 10자리 이상으로 설정해주세요.
              </div>
            </li>
            <li>
              <FormLabel_1 require={false}>새 비밀번호 재입력</FormLabel_1>
              <div className='mt-[8px]'>
                <div className='TextInput_3 w-full'>
                  <input type='password' placeholder='새로운 비밀번호를 다시 입력해주세요.'/>
                  <button className='ResetBtn'>
                    <img src='/icon/input_delete.svg' alt=''/>
                  </button>
                  <button className='EyeBtn'>
                    <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                    <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
                  </button>
                </div>
              </div>
              <div className='FormMsg Type2'>
                새 비밀번호가 일치하지 않습니다.
              </div>
            </li>
          </ul>
        </div>
        <div className='Foot'>
          <button className='Button_1 Xl w-full'>비밀번호 변경하기</button>
        </div>
      </div>
    </>
  );
}