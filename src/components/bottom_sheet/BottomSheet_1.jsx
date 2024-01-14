'use client';
export default function BottomSheet_1() {
  return (
    <>
      <div className="SampleList">
        <div className="BottomSheet_1 w-[360px]">
          <div className="Head">
            <button className="Handlebar" />
          </div>
          <div className="Body">
            <div className="BottomSheetSelectBtnList">
              <button className="On">신규 등록순</button>
              <button>할인율순</button>
              <button>낮은 가격순</button>
              <button>높은 가격순</button>
            </div>
          </div>
        </div>
        <div className="BottomSheet_1 w-[360px]">
          <div className="Head">
            <button className="Handlebar" />
          </div>
          <div className="Body">
            <div className="TitleBar">판매방법 안내</div>
            <div className="mt-[19px] text-center text-[#000] text-[12px] font-[400] leading-[20px]">
              <p>현재 고객님은</p>
              <p>
                <strong className="Color1">컬쳐랜드에 판매</strong>를 선택하셨습니다.
              </p>
              <p>컬쳐랜드 판매의 경우 정해진 매입가로 컬쳐랜드에서</p>
              <p>즉시 매입하여 정산해드립니다.</p>
              <br />
              <p>
                * 판매금액 직접선택을 원하시면 취소 후, <strong className="Color2">개인판매를</strong>진행해주세요.
              </p>
            </div>
            <article className="mt-[25px] CenterCenter">
              <button className="flex-1">취소</button>
              <button className="flex-1">확인</button>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
