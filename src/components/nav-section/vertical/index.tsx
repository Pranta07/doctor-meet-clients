import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { List, Box, ListSubheader } from "@mui/material";
//
import { NavListRoot } from "./NavList";

// ----------------------------------------------------------------------

export const ListSubheaderStyle: any = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }: any) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  isCollapse: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function NavSectionVertical({
  navConfig,
  sx,
  isCollapse = false,
  ...other
}: {
  navConfig?: any;
  sx?: any;
  isCollapse?: boolean;
}) {
  return (
    <Box {...other}>
      {navConfig.map((group: any, index: number) => (
        <List key={index} {...group} disablePadding sx={{ px: 2 }}>
          <ListSubheaderStyle
            sx={{
              ...(isCollapse && {
                opacity: 0,
              }),
            }}
          >
            {group.subheader}
          </ListSubheaderStyle>

          {group.items.map((list: any) => (
            <NavListRoot key={list.title} list={list} isCollapse={isCollapse} />
          ))}
        </List>
      ))}
    </Box>
  );
}
