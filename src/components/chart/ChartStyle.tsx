// @mui
import { alpha, useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
// utils
import cssStyles from "../../utils/cssStyles";

// ----------------------------------------------------------------------

export default function ChartStyle() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "&.apexcharts-canvas": {
          // Tooltip
          ".apexcharts-xaxistooltip": {
            //@ts-ignore
            ...cssStyles(theme).bgBlur(),
            border: 0,
            color: theme.palette.text.primary,
            //@ts-ignore
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            "&:before": { borderBottomColor: "transparent" },
            "&:after": {
              borderBottomColor: alpha(theme.palette.background.default, 0.8),
            },
          },
          ".apexcharts-tooltip.apexcharts-theme-light": {
            //@ts-ignore
            ...cssStyles(theme).bgBlur(),
            border: 0,
            //@ts-ignore
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            "& .apexcharts-tooltip-title": {
              border: 0,
              textAlign: "center",
              fontWeight: theme.typography.fontWeightBold,
              //@ts-ignore
              backgroundColor: theme.palette.grey[500_16],
              color:
                theme.palette.text[
                  theme.palette.mode === "light" ? "secondary" : "primary"
                ],
            },
          },
          // Legend
          ".apexcharts-legend": {
            padding: 0,
          },
          ".apexcharts-legend-series": {
            display: "flex !important",
            alignItems: "center",
          },
          ".apexcharts-legend-marker": {
            marginRight: 8,
          },
          ".apexcharts-legend-text": {
            lineHeight: "18px",
            textTransform: "capitalize",
          },
        },
      }}
    />
  );
}
