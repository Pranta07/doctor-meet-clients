import { useSliderThumb } from "@react-aria/slider";
import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";
import { useNumberFormatter } from "@react-aria/i18n";

import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
function Thumb(props: any) {
  let { state, trackRef, index } = props;
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <RootStyle
      style={{
        position: "absolute",
        top: 4,
        transform: "translateX(-50%)",
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <div
        {...thumbProps}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: isFocusVisible
            ? "orange"
            : state.isThumbDragging(index)
            ? "dimgrey"
            : "gray",
        }}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </div>
    </RootStyle>
  );
}

export default Thumb;
