'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <div>Index</div>
        {/*{ComponentList.common.map((DynamicComponent, idx) => {*/}
        {/*  return (*/}
        {/*    <Fragment key={idx}>*/}
        {/*      /!*<DynamicComponent />*!/*/}
        {/*    </Fragment>*/}
        {/*  );*/}
        {/*})}*/}
      </main>
      <Footer_1 />
    </>
  );
}
