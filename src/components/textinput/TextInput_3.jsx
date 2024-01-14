'use client';
export default function TextInput_3() {
  return (
    <>
      <ul className={`p-[10px] space-y-[30px]`}>
        <li>
          <div className={`H3`}>Basic</div>
          <div className="TextInput_3 w-full">
            <input placeholder="placeholder" />
            <button>
              <img src="/icon/input_delete.svg" alt="" />
            </button>
            <button>
              <img src="/icon/input_search.svg" alt="" />
            </button>
            <button>
              <img src="/icon/eye.svg" alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className={`H3`}>readonly</div>
          <div className="TextInput_3 w-full">
            <input placeholder="placeholder" readOnly={true} />
          </div>
        </li>
      </ul>
    </>
  );
}
