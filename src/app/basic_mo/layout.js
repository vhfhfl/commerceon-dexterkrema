'use client';
import BottomRightUtil_2 from '@/components/layout/BottomRightUtil_2';
import '@/scss/basic_mo.scss';

export default function Layout({ children }) {
  return (
    <>
      <div id="Page" className={`[&>main]:pt-[--header-hei]`}>
        {children}
      </div>
      <BottomRightUtil_2 />
    </>
  );
}
