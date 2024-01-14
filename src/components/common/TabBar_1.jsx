'use client';
import {Fragment} from 'react';

export default function TabBar_1() {
  return (
    <>
      <div className='TabBar_1'>
        <article className='TabButtonList'>
          {['아이디 찾기', '비밀번호 찾기'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className='flex-1'>
                  <button className={`${idx == 0 && `On`} TabButton`}>{obj}</button>
                </div>
              </Fragment>
            );
          })}
        </article>
      </div>
    </>
  );
}