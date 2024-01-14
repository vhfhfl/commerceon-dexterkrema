'use client';
import { Fragment } from 'react';

export default function RadioGroup_1_b() {
  return (
    <>
      <div className="RadioGroup_1 Sm">
        {['오늘', '1개월', '3개월', '1년'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <label>
                <input type="radio" defaultChecked={idx == 0} />
                <div className="Label">{obj}</div>
              </label>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
