'use client';
import DescList_6 from '@/components/common/DescList_6';
import Textarea_3 from '@/components/textinput/Textarea_3';
import {Fragment} from 'react';
import FormLabel_1 from '@/components/textinput/FormLabel_1';

export default function Modal_2_c() {
  return (
    <>
      <div className='Modal_2'>
        <div className='Head'>
          <div>
            서비스에 대해서
            <br/>
            무엇이든 물어보세요
          </div>
        </div>
        <div className='Body'>
          <DescList_6/>
          <div className='mt-[40px] ShadowBox_1'>
            <div className='text-[#26262c] text-[24px] font-[700]'>
              컨텐츠 기획부터 운영까지 모든 문제를 해결해 드립니다.
              <br/>
              <span className='text-[#5d45ff]'>지금 바로</span> 문의주세요.
            </div>
            <ul className='mt-[66px] space-y-[44px]'>
              {['회사명', '성명', '연락처', '이메일 주소', '웹사이트'].map((obj, idx) => {
                return (
                <Fragment key={idx}>
                  <li>
                    <FormLabel_1>{obj}</FormLabel_1>
                    <div className='mt-[8px]'>
                      <div className='CenterLeft'>
                        <div className='TextInput_3 w-full'>
                          <input placeholder='placeholder'/>
                          <button className='ResetBtn'>
                            <img src='/icon/input_delete.svg' alt=''/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </Fragment>
                );
              })}
              <li>
                <FormLabel_1>산업 카테고리</FormLabel_1>
                <div className='mt-[8px]'>
                  <select className={`SelectBox_2 Lg`} defaultValue={``}>
                    <option value={``} disabled={true} hidden={true}>
                      산업 카테고리를 선택해주세요.
                    </option>
                    <option value={`aaa`}>AAA</option>
                    <option value={`bbb`}>BBB</option>
                    <option value={`ccc`}>CCC</option>
                  </select>
                </div>
              </li>
              <li className='flex items-start justify-center gap-[20px]'>
                <div className='flex-1'>
                  <FormLabel_1 require={false}>유입경로</FormLabel_1>
                  <div className='mt-[8px]'>
                    <select className={`SelectBox_2 Lg`} defaultValue={``}>
                      <option value={``} disabled={true} hidden={true}>
                        유입경로를 선택해주세요.
                      </option>
                      <option value={`aaa`}>AAA</option>
                      <option value={`bbb`}>BBB</option>
                      <option value={`ccc`}>CCC</option>
                    </select>
                  </div>
                </div>
                <div className='flex-1'>
                  <FormLabel_1 require={false}>마케팅 예산</FormLabel_1>
                  <div className='mt-[8px]'>
                    <select className={`SelectBox_2 Lg`} defaultValue={``}>
                      <option value={``} disabled={true} hidden={true}>
                        마케팅 예산을 선택해주세요.
                      </option>
                      <option value={`aaa`}>AAA</option>
                      <option value={`bbb`}>BBB</option>
                      <option value={`ccc`}>CCC</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>
                <FormLabel_1>문의제목</FormLabel_1>
                <div className='mt-[8px]'>
                  <div className='CenterLeft'>
                    <div className='TextInput_3 w-full'>
                      <input placeholder='placeholder'/>
                      <button className='ResetBtn'>
                        <img src='/icon/input_delete.svg' alt=''/>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <Textarea_3/>
            </ul>
          </div>
        </div>
        <div className='Foot'>
          <article className='CenterCenter gap-[10px]'>
            <div>
              <button className='Button_3 Xl w-[245px]'>닫기</button>
            </div>
            <div>
              <button className='Button_1 Xl w-[245px]'>문의 등록하기</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}