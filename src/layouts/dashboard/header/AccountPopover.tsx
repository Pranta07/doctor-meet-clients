import { useState } from "react";
// @mui
import IconButton from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
} from "@mui/material";
// components
import MenuPopover from "../../../components/MenuPopover";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/actions/userAction";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Profile",
    linkTo: "/profile",
  },
  {
    label: "Dashboard",
    linkTo: "/dashboard",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { user }: any = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
        }}
      >
        <Avatar src={user?.image || ""} alt="avatar" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option, index) => (
            <NavLink
              key={index}
              style={{ textDecoration: "none", color: "#637381" }}
              to={option.linkTo}
            >
              <MenuItem>{option.label}</MenuItem>
            </NavLink>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={() => dispatch(logout())} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
