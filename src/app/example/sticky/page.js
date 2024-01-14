'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';

export default function Page() {
  return (
    <>
      <main>
        <h1 className='H1 Sticky Top'>Fixed & Sticky</h1>
        <section>
          <img src='https://gifpng.com/560x1315/ffd4d4/ff4444' alt=''/>
        </section>
        <section className='RR Sticky top-[48px]'>
          <div className='bg-[#fff980]'>CSS sticky</div>
        </section>
        <section>
          <img src='https://gifpng.com/560x1315/ffd4d4/ff4444' alt=''/>
        </section>
      </main>
    </>
  );
}
