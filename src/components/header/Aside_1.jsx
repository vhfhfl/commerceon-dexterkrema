'use client';
export default function Aside_1() {
  return (
    <>
      <aside id="Aside" className="Aside_1">
        <div className="Bg" />
        <div className="Body">
          <article className="TopRight h-full">
            <div className="w-[100px] h-full text-[0]">여백</div>
            <div className="flex-1 bg-gray-300 h-full flex flex-col">
              <div className="CenterRight p-[10px] border-b-[1px] border-b-[#161616] bg-white">
                <button className="Button_1">CLOSE</button>
              </div>
              <div className="flex-1 h-full overflow-auto">
                <ul className="p-[10px] space-y-[10px]">
                  <li>
                    <a href="#" target="_blank" className="CenterCenter bg-white h-[46px]">
                      LINK
                    </a>
                  </li>
                </ul>
              </div>
              <div className="CenterCenter p-[10px] border-t-[1px] border-t-[#161616] bg-white">© Copyrights by ㅇㅇㅇ. All Rights Reserved.</div>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
}
