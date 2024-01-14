'use client';

import GlobalContext from '@/app/GlobalContext';
import Footer_2 from '@/components/layout/Footer_2';
import Header_2 from '@/components/layout/Header_2';
import Nav_1 from '@/components/layout/Nav_1';
import Nav_1_Sm from '@/components/layout/Nav_1_Sm';
import Nav_2 from '@/components/layout/Nav_2';
import '@/scss/dashboard.scss';
import { useContext } from 'react';

export default function Layout({ children }) {
  const { GVar, setGVar } = useContext(GlobalContext);
  const { DASHBOARD_LEFT_OPEN } = GVar;

  return (
    <div
      id="PageDashboard"
      className={`flex flex-row gap-[0] h-[100vh] overflow-hidden bg-[#ECEBF4]`}
    >
      <div
        className={`${
          !DASHBOARD_LEFT_OPEN ? 'hidden' : ''
        } Fc overflow-auto bg-white border-r-[1px] border-r-[#E0DFEA]`}
      >
        <Nav_1 />
      </div>
      <div
        className={`${
          !DASHBOARD_LEFT_OPEN ? 'block' : 'hidden'
        } Fc overflow-auto bg-white border-r-[1px] border-r-[#E0DFEA]`}
      >
        <Nav_1_Sm />
      </div>
      <div className={`Fc flex-1`}>
        <Header_2 />
        <main
          className={`h-[calc(100vh-var(--dashboard-header-hei))] overflow-hidden`}
        >
          <div className={`flex flex-row gap-[0] h-full`}>
            <div className={`Fc h-full overflow-auto`}>
              <Nav_2 />
            </div>
            <div className={`Fc h-full overflow-auto flex-1`}>
              <div className={`p-[36px] [&>section+section]:mt-[40px]`}>
                {children}
              </div>
              <Footer_2 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
