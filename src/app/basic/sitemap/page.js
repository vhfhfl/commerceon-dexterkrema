'use client';

import SiteMapLink from '@/components/etc/SiteMapLink';
import menu_data from '@/js/menu_data';
import '@/scss/sitemap.scss';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main className="pb-[20px]">
        <h1 className="H1 Sticky Top px-[20px]">
          <article className="Montserrat CenterLeft gap-2">
            SiteMap
            <span className="hidden [[data-env='development']_&]:block">
              Development
            </span>
            <span className="hidden [[data-env='production']_&]:block">
              Production
            </span>
          </article>
        </h1>
        <section className="HBox hidden [[data-env='development']_&]:block">
          <div className="Inner">
            <article className="CenterRight gap-[10px]">
              <div>
                <article className="CenterLeft bg-black text-white text-[14px] font-[400] p-[5px_10px] rounded-md">
                  <div id="CurrentCnt">Current</div>/
                  <div id="TotalCnt">Total</div>
                </article>
              </div>
              <div>
                <button id="BuildHtml" className="Button_1">
                  BUILD
                </button>
              </div>
            </article>
          </div>
        </section>
        <div id="Sitemap">
          <ul>
            {menu_data.map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <SiteMapLink data={obj} />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
