'use client';
export default function SelectBox_2() {
  return (
    <>
      <div className={`SampleList`}>
        <div>
          <label className={`FormLabel_1`}>Basic</label>
          <div className={`SelectBox_2`}>
            <select defaultValue={``}>
              <option value={``} disabled={true} hidden={true}>
                선택
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className={`FormLabel_1`}>.Success</label>
          <div className={`SelectBox_2`}>
            <select className={`Success`}>
              <option value={``} disabled={true} hidden={true}>
                선택
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className={`FormLabel_1`}>.Error</label>
          <div className={`SelectBox_2`}>
            <select defaultValue={``} className={`Error`}>
              <option value={``} disabled={true} hidden={true}>
                선택
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className={`FormLabel_1`}>[disabled]</label>
          <div className={`SelectBox_2`}>
            <select defaultValue={``} disabled={true}>
              <option value={``} disabled={true} hidden={true}>
                선택
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>BBB</option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className={`FormLabel_1`}>[selected]</label>
          <div className={`SelectBox_2`}>
            <select defaultValue={'bbb'}>
              <option value={``} disabled={true} hidden={true}>
                선택
              </option>
              <option value={`aaa`}>AAA</option>
              <option value={`bbb`}>
                BBB
              </option>
              <option value={`ccc`}>CCC</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}