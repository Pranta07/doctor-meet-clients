import React from 'react';
import Pagination from 'react-responsive-pagination';

const DonorPagination = (props: any) => {
  const { currentPage, setCurrentPage } = props;
  const totalPages = props.count / 2;
  // console.log(currentPage);

  return (
    <div className="d-flex justify-content-center">
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DonorPagination;
