import { useState } from "react";
import IconButton from "@mui/material/IconButton";
// @mui
import { Divider, Stack, Typography } from "@mui/material";
// components
import Iconify from "../../../components/Iconify.tsx";
import MenuPopover from "../../../components/MenuPopover.tsx";
import SettingMode from "../../../components/settings/SettingMode.tsx";
// import useSettings from '../../../hooks/useSettings';

// ----------------------------------------------------------------------

// const LANGS = [
//   {
//     label: 'English',
//     value: 'en',
//     icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
//   },
//   {
//     label: 'German',
//     value: 'de',
//     icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_de.svg',
//   },
//   {
//     label: 'French',
//     value: 'fr',
//     icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_fr.svg',
//   },
// ];

// ----------------------------------------------------------------------

export default function ModePopOver() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
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
          width: 40,
          height: 40,
          ...(open && { bgcolor: "action.selected" }),
        }}
      >
        <Iconify icon="eva:options-2-fill" width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {/* {LANGS.map((option) => (
            <MenuItem key={option.value} selected={option.value === LANGS[0].value} onClick={handleClose}>
              <Image disabledEffect alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))} */}
          <Stack
            style={{ width: "100px" }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Typography variant="subtitle1">Mode</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack spacing={1.5}>
              <SettingMode />
            </Stack>
          </Stack>
        </Stack>
      </MenuPopover>
    </>
  );
}
