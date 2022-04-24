import React from "react";
import Pagination from "react-responsive-pagination";

const DonorPagination = (props: any) => {
    const { currentPage, setCurrentPage, pageCount } = props;
    return (
        <div className="d-flex justify-content-center">
            <Pagination
                current={currentPage}
                total={pageCount}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default DonorPagination;
