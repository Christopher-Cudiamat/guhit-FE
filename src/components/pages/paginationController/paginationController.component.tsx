import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './paginationController.module.css';

const PaginationController = (props:any) => {

  let {pageCount,setPage,setRowPerPage,rowPerPage} = props;

  let [offset,setOffset] = useState(0);

  const handlePageClick = (data: any) => {
    let selected = data.selected + 1;
    setPage(selected * rowPerPage);
    setRowPerPage(rowPerPage * 2);
    console.log("SELECTED",selected);
    // let offset = Math.ceil(selected * perPage);

    // this.setState({ offset: offset }, () => {
    //   this.loadCommentsFromServer();
    // });
  };

  return (
    <>
      <ReactPaginate
          previousLabel={'PREV'}
          nextLabel={'NEXT'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={styles.container}
          pageClassName={styles.li}
          // subContainerClassName={'pages pagination'}
          activeClassName={styles.active}
          nextClassName={styles.next}
          previousClassName={styles.prev}
        />
    </>
  );
}

export default PaginationController;
