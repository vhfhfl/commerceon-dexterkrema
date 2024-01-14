'use client';
import { Fragment } from 'react';

export default function PagingSet_1({ className, children }) {
  return (
    <>
      <div className={`${className} PagingSet_1`}>
        <div className="Area Left">
          <div className="NavBtnBox">
            <a href="#">
              <img src="/icon/paging_first_1.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icon/paging_prev_1.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="Area Center">
          <div className="NumBtnBox">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(
              (obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <a
                      className={`${idx == 0 && `On`}`}
                      href="#"
                      target="_blank"
                    >
                      {obj}
                    </a>
                  </Fragment>
                );
              },
            )}
          </div>
        </div>
        <div className="Area Right">
          <div className="NavBtnBox">
            <a href="#">
              <img src="/icon/paging_next_1.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icon/paging_last_1.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
