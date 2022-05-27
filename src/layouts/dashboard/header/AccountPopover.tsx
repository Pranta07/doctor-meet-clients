import { useEffect, useState } from "react";
// @mui
import IconButton from "@mui/material/IconButton";
import "./style/AccountPopover.css";
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

import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/actions/userAction";
import usePremiumMembershipStatus from "../../../hooks/usePremiumMembersipStatus";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Dashboard",
    linkTo: "/dashboard",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { user }: any = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const { premiumMemberCategory, premiumMembershipStatus } =
    usePremiumMembershipStatus();

  useEffect(() => {
    if (premiumMemberCategory === "Silver") {
      setImageUrl("https://i.ibb.co/4FbbqJb/silver-cup.png");
    } else if (premiumMemberCategory === "Gold") {
      setImageUrl("https://i.ibb.co/RCL70Y2/ingots.png");
    } else if (premiumMemberCategory === "Diamond") {
      setImageUrl("https://i.ibb.co/F0BP5V1/diamond.png");
    }
  }, [user, premiumMemberCategory]);
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
        <Avatar
          src={user?.image || ""}
          alt="avatar"
          className="badge-container"
        />
        {premiumMembershipStatus && (
          <div className="badge">
            <img src={imageUrl} alt="badge" className="badge-image" />
          </div>
        )}
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
