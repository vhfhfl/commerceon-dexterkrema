'use client';
export default function TextInput_1() {
  return (
    <>
      <ul className={`p-[10px] space-y-[30px]`}>
        <li>
          <div className={`H3`}>Basic</div>
          <div className={`TextInput_1 w-full`}>
            <input placeholder={`placeholder`}/>
            <button>
              <img className={`w-[24px]`} src={`/icon/input_delete.svg`} alt={``}/>
            </button>
            <button>
              <img className={`w-[24px]`} src={`/icon/input_search.svg`} alt={``}/>
            </button>
            <button className='EyeBtn'>
              <img className={`w-[24px]`} src={`/icon/eye.svg`} alt={``}/>
            </button>
          </div>
        </li>
        <li>
          <div className={`H3`}>readonly</div>
          <div className={`TextInput_1 ReadOnly w-full`}>
            <input placeholder={`placeholder`} defaultValue={`Value`} readOnly={true}/>
          </div>
        </li>
      </ul>
    </>
  );
}