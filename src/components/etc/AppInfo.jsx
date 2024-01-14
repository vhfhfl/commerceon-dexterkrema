'use client';
import GlobalContext from '@/app/GlobalContext';
import {getCss} from '@/js/common';
import {Fragment, useContext, useEffect, useState} from 'react';
import UAParser from 'ua-parser-js';

// https://www.npmjs.com/package/ua-parser-js
const up = new UAParser();
const UA = UAParser();

export default function AppInfo() {
  const { GVar, setGVar } = useContext(GlobalContext);

  const [visible_ruler, setVisibleRuler] = useState(false);
  const [visible_gv_table, setVisibleGVTable] = useState(false);

  useEffect(() => {
    // mount
    console.log('AppInfo.jsx mount');
    infoDeviceOS();
    infoWhellDirection();
    infoOnTouch();
    infoScrollDirection();
    infoReadyState();
    infoPath();
    infoScrollTop();
    infoBreakPoint();
    infoiOSSafeArea();
  }, []);

  return (
    <>
      <div
        id={`ScrollWidBox`}
        className={`RR z-[9999] fixed top-[-100%] left-[-100%] overflow-y-scroll`}
      >
        <div>ScrollWidBox</div>
      </div>
      <div
        id="AppInfo"
        className="hidden [[data-scroll-top='0']_&]:flex z-[9999] fixed top-[0] left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,.7)] p-[5px] text-[yellow] text-[12px] font-[400] whitespace-nowrap flex-row items-center justify-center gap-[10px]"
      >
        <div>
          <a
            href="/"
            className="flex flex-row items-center justify-center gap-[5px]"
          >
            <div>
              <div className="hidden xs:max-sm:block">Xs</div>
              <div className="hidden sm:max-md:block">Sm</div>
              <div className="hidden md:max-lg:block">Md</div>
              <div className="hidden lg:max-xl:block">Lg</div>
              <div className="hidden xl:max-2xl:block">Xl</div>
              <div className="hidden 2xl:max-3xl:block">2Xl</div>
              <div className="hidden 3xl:block">3Xl</div>
            </div>
            <div>🔴</div>
            <div>
              <div className="pc:hidden">MO</div>
              <div className="hidden pc:block">PC</div>
            </div>
            <div>🔴</div>
            <div className="wid">wid</div>
            <div>x</div>
            <div className="hei">hei</div>
          </a>
        </div>
        <div className={`CenterLeft gap-[5px]`}>
          <button
            onClick={(e) => setVisibleRuler(!visible_ruler)}
            className="bg-[linear-gradient(45deg,_#b8cbb8_0%,_#b8cbb8_0%,_#b465da_0%,_#cf6cc9_33%,_#ee609c_66%,_#ee609c_100%)] text-white font-[800] px-[5px] rounded-[5px]"
          >
            Ruler {visible_ruler.toString()}
          </button>
          <button
            onClick={(e) => setVisibleGVTable(!visible_gv_table)}
            className="bg-[linear-gradient(175deg,rgba(34,193,195,1)_0%,rgba(253,187,45,1)_100%)] text-white font-[800] px-[5px] rounded-[5px]"
          >
            GVTable
          </button>
        </div>
      </div>
      <div
        id="ContentsRuler"
        className={`${
          visible_ruler ? 'On' : ''
        } HBox opacity-0 [&.On]:opacity-100 pointer-events-none z-[999999] fixed w-full h-full text-[20px] font-bold text-center top-0 left-0 bg-[rgba(10,127,235,0.5)]`}
      >
        <div className="RR Inner bg-[rgba(255,255,0,0.5)] h-full flex flex-row items-center justify-center gap-[0]">
        </div>
      </div>
      <div
        id="GlobalVarTable"
        className={`${
          visible_gv_table ? 'block' : 'hidden'
        } bg-[rgba(0,0,0,0.8)] p-[20px] rounded-[20px] text-[#fff] text-[14px] font-[400] z-[999] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
      >
        <table
          className={`text-[#fff] text-[14px] [&_th]:border-solid [&_th]:border-[1px] [&_th]:border-[#fff] [&_th]:p-[5px] [&_td]:border-solid [&_td]:border-[1px] [&_td]:border-[#fff] [&_td]:p-[5px]`}
        >
          <thead className={`font-[900]`}>
            <tr>
              <th>KEY</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(GVar).map((key, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>{key}</td>
                    <td>{JSON.stringify(GVar[key])}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function infoDeviceOS() {
  const device = UA.device;
  const os = UA.os;
  const cpu = UA.cpu;
  const browser = UA.browser;
  const engine = UA.engine;

  const el_html = document.querySelector('html');
  el_html.setAttribute(`data-device-model`, device.model);
  el_html.setAttribute(`data-device-type`, device.type);
  el_html.setAttribute(`data-device-vendor`, device.vendor);

  el_html.setAttribute(`data-os-name`, os.name);
  el_html.setAttribute(`data-os-version`, os.version);

  el_html.setAttribute(`data-cpu`, cpu.architecture);

  el_html.setAttribute(`data-browser-model`, browser.major);
  el_html.setAttribute(`data-browser-name`, browser.name);
  el_html.setAttribute(`data-browser-version`, browser.version);

  el_html.setAttribute(`data-engine-name`, engine.name);
  el_html.setAttribute(`data-engine-version`, engine.version);
}

function infoWhellDirection() {
  const el_html = document.querySelector('html');

  window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      el_html.setAttribute(`data-wheel-direction`, 'up');
    } else if (event.deltaY > 0) {
      el_html.setAttribute(`data-wheel-direction`, 'down');
    }
  });
}

function infoOnTouch() {
  const el_html = document.querySelector('html');
  el_html.setAttribute('data-is-touch', false);

  document.addEventListener('touchstart', (evt) => {
    el_html.setAttribute('data-is-touch', true);
  });

  document.addEventListener('touchend', (evt) => {
    el_html.setAttribute('data-is-touch', false);
  });
}

function infoScrollDirection() {
  const el_html = document.querySelector('html');
  el_html.setAttribute('data-scroll-diretion', '');

  let prevSt = 0;
  let prevDir;
  let distance = 0;

  function update() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st <= 0) st = 0;
    const limit_y = el_html.scrollHeight - el_html.clientHeight;
    if (limit_y <= st) st = limit_y;

    if (st > 0 && limit_y > st) {
      let dir;
      if (prevSt - st > 0) {
        dir = 'up';
      } else {
        dir = 'down';
      }

      distance += prevSt - st;

      if (prevDir != dir) {
        // console.log('dir change!');
        distance = 0;
      }

      const distance_k = 0;
      if (Math.abs(distance) > distance_k) {
        el_html.setAttribute('data-scroll-diretion', dir);
      }

      prevDir = dir;
      prevSt = st;
    }
  }

  update();

  window.addEventListener('scroll', (evt) => {
    update();
  });
}

function infoReadyState() {
  document.addEventListener('readystatechange', () => {
    const el_html = document.querySelector('html');
    el_html.setAttribute(`data-ready-state`, document.readyState);
    if (document.readyState === 'complete') {
      el_html.setAttribute(`data-is-loading`, false);
    } else {
      el_html.setAttribute(`data-is-loading`, true);
    }
  });
}

function infoPath() {
  const el_html = document.querySelector('html');
  const path = window.location.pathname;
  el_html.setAttribute(`data-path`, path);
}

function infoBreakPoint() {
  const el_html = document.querySelector('html');

  function update() {
    const wid = window.innerWidth;
    let prefix = '';
    if (wid < 640) prefix = 'xs';
    if (640 <= wid && wid < 768) prefix = 'sm';
    if (768 <= wid && wid < 1024) prefix = 'md';
    if (1024 <= wid && wid < 1280) prefix = 'lg';
    if (1280 <= wid && wid < 1536) prefix = 'xl';
    if (1536 <= wid && wid < 1800) prefix = '2xl';
    if (1800 <= wid) prefix = '3xl';
    el_html.setAttribute(`data-app-breakpoint`, prefix);

    const el_wid = document.querySelector(`#AppInfo .wid`);
    el_wid.textContent = wid;

    const el_hei = document.querySelector(`#AppInfo .hei`);
    el_hei.textContent = window.innerHeight;
  }

  update();

  window.addEventListener('resize', (evt) => {
    update();
  });
}

function infoiOSSafeArea() {
  const el_html = document.documentElement;
  const html_style = getComputedStyle(el_html);
  const sab = html_style.getPropertyValue('--sab');
  el_html.setAttribute(`data-safe-area-bottom`, sab);
}

function infoScrollTop() {
  const el_html = document.querySelector('html');

  function update() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    el_html.setAttribute('data-scroll-top', st);

    // 스크롤의 위치가 헤더를 넘었는지 여부
    const header_hei = parseInt(getCss('--header-hei'));
    const is_over = st > header_hei;
    // el_html.setAttribute('data-scroll-header-over', is_over);
  }

  update();

  window.addEventListener('scroll', (evt) => {
    update();
  });
}
