'use client';
export default function Alert_2_a() {
  return (
    <>
      <div className='Alert_2 w-[368px]'>
        <div className='Body'>
          <div>
            비공개 게시글 입니다.
            <br/>
            작성시 입력한 비밀번호를 입력해주세요.
          </div>
          <div className='mt-[20px]'>
            <div className='TextInput_1 w-full'>
              <input type='password' placeholder='비밀번호를 입력해주세요.'/>
              <button className='ResetBtn'>
                <img src='/icon/input_delete.svg' alt=''/>
              </button>
              <button className='EyeBtn'>
                <img className="[input[type='text']~button>&]:hidden" src='/icon/eye.svg' alt=''/>
                <img className="[input[type='password']~button>&]:hidden" src='/icon/eye_on.svg' alt=''/>
              </button>
            </div>
            <div className='FormMsg Type2 text-left'>비밀번호가 일치하지 않습니다.</div>
          </div>
          <div className='mt-[20px]'>
            <article className='CenterCenter gap-[10px]'>
              <div>
                <button className='Button_3 Sm w-[110px]'>닫기</button>
              </div>
              <div>
                <button className='Button_1 Sm w-[110px]'>확인</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}