//
import { InputSelectIcon } from "./CustomIcons";

// ----------------------------------------------------------------------

export default function Select(theme?: any) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}
