'use client';
import TopActionBar_1 from '@/components/header/TopActionBar_1';

export default function Header_1() {
  return (
    <>
      <header className="fixed z-[99] top-0 w-full">
        <section
          className={`[[data-scroll-header-over='true']_&]:translate-y-[-100%] duration-300 ease-out will-change-auto`}
        >
          <TopActionBar_1 />
        </section>
      </header>
    </>
  );
}
