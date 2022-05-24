import { useSlider, useSliderThumb } from "@react-aria/slider";
import { useSliderState } from "@react-stately/slider";
import { useNumberFormatter } from "@react-aria/i18n";
import React from "react";
import Thumb from "../Thumb";

function PharmacyPriceSlide(props: any) {
  let trackRef = React.useRef(null);
  // console.log(trackRef)
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );
  props.setLowerPrice(state.getThumbValue(0));
  props.setUpperPrice(state.getThumbValue(1));

  return (
    <div
      {...groupProps}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        touchAction: "none",
      }}
    >
      <div style={{ display: "flex", alignSelf: "stretch" }}>
        {props.label && <label {...labelProps}>{props.label}</label>}
        <output {...outputProps} style={{ flex: "1 0 auto", textAlign: "end" }}>
          {`${state.getThumbValueLabel(0)} - ${state.getThumbValueLabel(1)}`}
        </output>
      </div>
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          position: "relative",
          height: 30,
          width: " 100%",
          background: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "grey",
            height: 3,
            top: 13,
            width: "100%",
            background: "skyblue",
          }}
        />
        <Thumb index={0} state={state} trackRef={trackRef} />
        <Thumb index={1} state={state} trackRef={trackRef} />
      </div>
    </div>
  );
}

export default PharmacyPriceSlide;
