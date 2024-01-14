'use client';
export default function TextInput_2() {
  return (
    <>
      <ul className={`space-y-[30px] bg-black p-[10px]`}>
        <li>
          <div className={`H3 text-white`}>Basic</div>
          <div className="TextInput_2 w-full">
            <input placeholder="placeholder" />
            <button>
              <img className={`w-[24px]`} src="/icon/input_delete.svg" alt="" />
            </button>
            <button>
              <img className={`w-[24px]`} src="/icon/input_search.svg" alt="" />
            </button>
            <button>
              <img className={`w-[24px]`} src="/icon/eye.svg" alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className={`H3 text-white`}>readonly</div>
          <div className="TextInput_2 w-full">
            <input placeholder="placeholder" value={`Value`} readOnly={true} />
          </div>
        </li>
      </ul>
    </>
  );
}
