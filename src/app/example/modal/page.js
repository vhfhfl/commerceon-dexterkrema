'use client';

import Confirm_1 from '@/components/alert/Confirm_1';
import SelectOption_1 from '@/components/alert/SelectOption_1';
import BottomSheet_1 from '@/components/bottom_sheet/BottomSheet_1';
import ToolTip_1 from '@/components/layerpop/ToolTip_1';
import LayerPop_1 from '@/components/layerpop2/LayerPop_1';
import Modal_1 from '@/components/layerpop2/Modal_1';
import { modalControl } from '@/js/common';
import { useRef } from 'react';

export default function Page() {
  const ref_tooltip = useRef();
  const ref_confirm = useRef();
  const ref_selecttoption = useRef();
  const ref_bottomsheet = useRef();
  const ref_layer2_modal_1 = useRef();
  const ref_layer2_layerpop = useRef();

  function onOpenTooltip() {
    modalControl.On();

    const $target = ref_tooltip.current;
    $target.classList.add('On');
  }

  function onOpenConfirm() {
    modalControl.On();

    const $target = ref_confirm.current;
    $target.classList.add('On');
  }

  function onOpenSelectOption() {
    modalControl.On();

    const $target = ref_selecttoption.current;
    $target.classList.add('On');
  }

  function onOpenBottomSheet() {
    modalControl.On();

    const $target = ref_bottomsheet.current;
    $target.classList.add('On');
  }

  function onOpenLayer2Modal_1() {
    modalControl.On();

    const $target = ref_layer2_modal_1.current;
    $target.classList.add('On');
  }

  function onOpenLayer2LayerPop() {
    const $target = ref_layer2_layerpop.current;
    $target.classList.add('On');
  }

  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Layerpop</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <div className={`space-y-[30px]`}>
              <button className={`Button_1 w-[30%]`} onClick={onOpenTooltip}>
                Open ToolTip_1
              </button>
              <button className={`Button_1 w-[30%]`} onClick={onOpenConfirm}>
                Open Confirm_1
              </button>
              <button
                className={`Button_1 w-[30%]`}
                onClick={onOpenSelectOption}
              >
                Open SelectOption_1
              </button>
              <button
                className={`Button_1 w-[30%]`}
                onClick={onOpenBottomSheet}
              >
                Open BottomSheet_1
              </button>
              <button
                className={`Button_1 w-[30%]`}
                onClick={onOpenLayer2Modal_1}
              >
                Open layerpop2/Modal_1.jsx
              </button>
              <button
                className={`Button_1 w-[30%]`}
                onClick={onOpenLayer2LayerPop}
              >
                Open layerpop2/LayerPop_1.jsx
              </button>
            </div>
          </div>
        </section>
      </main>
      <div ref={ref_tooltip} className={`LayerPopup`}>
        <ToolTip_1 />
      </div>
      <div ref={ref_confirm} className={`LayerPopup`}>
        <Confirm_1 />
      </div>
      <div ref={ref_selecttoption} className={`LayerPopup`}>
        <SelectOption_1 />
      </div>
      <div ref={ref_bottomsheet} className={`LayerPopup Bottom`}>
        <BottomSheet_1 />
      </div>
      <div ref={ref_layer2_modal_1} className={`LayerPopup RightFull`}>
        <Modal_1 />
      </div>
      <div ref={ref_layer2_layerpop} className={`LayerPopup`}>
        <LayerPop_1 />
      </div>
    </>
  );
}
