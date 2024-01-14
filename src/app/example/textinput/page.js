'use client';

import ComponentList from '@/pub/ComponentList';
// import { Fragment } from 'react';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className={`H1 Sticky Top`}>Textinput</h1>
        <section className={`HBox`}>
          <div className={`Inner`}>
            <h2 className={`H2`}>Style & State</h2>
            <ul className={`p-[10px] space-y-[30px] bg-[#333]`}>
              <li>
                <article className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[10px] items-stretch justify-center`}>
                  {[...Array(10).keys()].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className={`outline-[1px] outline-amber-300 outline-dashed space-y-[5px] p-[5px]`}>
                          <div className={`TextInput_${idx + 1} w-full`}>
                            <input placeholder={`TextInput_${idx + 1}`}/>
                          </div>
                          <div className={`TextInput_${idx + 1} w-full`}>
                            <input placeholder={`TextInput_${idx + 1}[readOnly]`} readOnly={true}/>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </article>
              </li>
            </ul>
          </div>
        </section>
        <section className={`HBox`}>
          <div className={`Inner`}>
            <h2 className={`H2`}>Size</h2>
            <ul className={`p-[10px] space-y-[30px] bg-[#333]`}>
              {[...Array(10).keys()].map((obj2, idx2) => {
                return (
                  <Fragment key={idx2}>
                    <li>
                      <article className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[10px] items-stretch justify-center`}>
                        {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <div>
                                <div className={`RR TextInput_${idx2 + 1} ${obj} w-full`}>
                                  <input type={`text`} placeholder={`TextInput_${idx2 + 1}.${obj}`}/>
                                  <button className='ResetBtn'>
                                    <img src={`/icon/input_delete.svg`} alt={``}/>
                                  </button>
                                  <button>
                                    <img className={`w-[24px] aspect-square`} src={`/icon/input_search.svg`} alt={``}/>
                                  </button>
                                  <button className={`EyeBtn`}>
                                    <img className={`[input[type='text']~button>&]:hidden`} src={`/icon/eye.svg`} alt={``}/>
                                    <img className={`[input[type='password']~button>&]:hidden`} src={`/icon/eye_on.svg`} alt={``}/>
                                  </button>
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </article>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </section>
        {ComponentList.textinput.map((obj, idx) => {
          const {경로, 컴포넌트} = obj;

          return (
            <Fragment key={idx}>
              <section className={`HBox mt-[50px]`}>
                <div className={`Inner`}>
                  <h2 className={`H2 mb-[10px]`}>{경로}</h2>
                  <컴포넌트/>
                </div>
              </section>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}