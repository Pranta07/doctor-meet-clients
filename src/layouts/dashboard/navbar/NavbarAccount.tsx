import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Link, Typography, Avatar } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { useAppSelector } from "../../../redux/store";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }: any) {
  const { user }: any = useAppSelector((state) => state.user);

  return (
    <Link underline="none" color="inherit">
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: "transparent",
          }),
        }}
      >
        <Avatar src={user?.name[0]} alt="avatar" className="badge-container" />

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create("width", {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}
        >
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: "text.secondary" }}>
            {user?.role}
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  );
}
