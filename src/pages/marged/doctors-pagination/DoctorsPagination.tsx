import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DoctorsPagination = (props: any) => {
    const { page, handleChange } = props;
    const totalPages = Math.ceil(props.total / 6);
    // console.log(page);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                my: 3,
            }}
        >
            <Stack spacing={2}>
                <Pagination
                    shape="rounded"
                    count={totalPages}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                            }}
                            {...item}
                        />
                    )}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </Box>
    );
};

export default DoctorsPagination;
