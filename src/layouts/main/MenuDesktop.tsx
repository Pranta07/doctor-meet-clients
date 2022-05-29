import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  MenuItem,
  CardActionArea,
} from "@mui/material";
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const LinkStyle: any = styled(Link)(({ theme }: any) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const ListItemStyle = styled(ListItem)(
  ({
    theme,
    to,
    component,
    underline,
  }: {
    theme?: any;
    to: {};
    component: {};
    underline: string;
  }) => ({
    ...theme.typography.body2,
    padding: 0,
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary,
    transition: theme.transitions.create("color"),
    "&:hover": {
      color: theme.palette.text.primary,
    },
  })
);
const MenuItemStyle = styled(MenuItem)(
  ({
    theme,
    to,
    component,
    underline,
  }: {
    theme?: any;
    to: {};
    component: {};
    underline: string;
  }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    transition: theme.transitions.create("color"),
    "&:hover": {
      color: theme.palette.text.primary,
    },
  })
);

// ----------------------------------------------------------------------

MenuDesktop.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuDesktop({ isOffset, isHome, navConfig }: any) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link: any) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(["item", "subheader"]),
};

function IconBullet({ type = "item" }) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

MenuDesktopItem.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

function MenuDesktopItem({
  item,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}: any) {
  const { title, path, children }: any = item;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ...(isHome && { color: "common.dark" }),
            ...(isOffset && { color: "text.primary" }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-upward-fill"
                : "eva:arrow-ios-downward-fill"
            }
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 720 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={onClose}
          PaperProps={{
            sx: {
              mx: 3,
              m: "auto",
              borderRadius: 2,
              minWidth: "150px",
              boxShadow: (theme: any) => theme.customShadows.z24,
            },
          }}
        >
          <Grid>
            {children.map((list: any, index: number) => {
              const { subheader, items } = list;

              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={subheader === "Dashboard" ? 6 : 2}
                >
                  <List>
                    {items.map((item: any) => (
                      <MenuItemStyle
                        key={item.title}
                        to={item.path}
                        component={RouterLink}
                        underline="none"
                        sx={{
                          "&.active": {
                            color: "text.primary",
                            typography: "subtitle2",
                          },
                        }}
                      >
                        {item.title === "Dashboard" ? (
                          <CardActionArea
                            sx={{
                              py: 5,
                              px: 10,
                              borderRadius: 2,
                              color: "primary.main",
                              bgcolor: "background.neutral",
                            }}
                          ></CardActionArea>
                        ) : (
                          <>{item.title}</>
                        )}
                      </MenuItemStyle>
                    ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  }

  return (
    <>
      <LinkStyle
        to={path}
        component={RouterLink}
        end={path === "/"}
        sx={{
          ...(isHome && { color: "common.dark" }),
          ...(isOffset && { color: "text.primary" }),
          "&.active": {
            color: "primary.main",
          },
        }}
      >
        {title}
      </LinkStyle>
    </>
  );
}
