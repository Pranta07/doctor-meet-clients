
// @mui
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
// components
import { Banner } from "../../components/banner";
// ----------------------------------------------------------------------


const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
    ({ theme }) => ({
        zIndex: 10,
        margin: "auto",
        textAlign: "center",
        position: "relative",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            margin: "unset",
            textAlign: "left",
        },
    })
);


export default function HomeHero() {
    return (
        <ContentStyle>
            <Banner />
        </ContentStyle>
    );
}
