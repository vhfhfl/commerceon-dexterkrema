'use client';

import GlobalContext from '@/app/GlobalContext';
import GlobalVar from '@/app/GlobalVar';
import AppInfo from '@/components/etc/AppInfo';
import Modal from '@/components/etc/Modal';
import Head_1 from '@/components/meta/Head_1';
import { appIsReady } from '@/js/common';
import '@/scss/global.scss';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  // 전역 변수 사용 위해 설정
  const [globalVar, setGlobalVar] = useState(GlobalVar);

  useEffect(() => {
    // mount
    console.log('app unmount');
    appIsReady();
  }, []);

  return (
    <html className={`Loading`}>
      <Head_1 />
      <body>
        <GlobalContext.Provider
          value={{
            GVar: globalVar,
            setGVar: (set_key, set_value) => {
              const ori = { ...globalVar };
              ori[set_key] = set_value;
              setGlobalVar(ori);
            },
          }}
        >
          <AppInfo />
          <Modal />
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
