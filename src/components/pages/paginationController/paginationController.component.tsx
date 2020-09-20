import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './paginationController.module.css';

const PaginationController = (props:any) => {

  let {pageCount,setSkip,limit,filterType} = props;
  let [activePageNum,setActivePageNum] = useState(0);

  // useEffect(() => {
  //   setActivePageNum(0);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filterType]);

  const handlePageClick = (data: any) => {
    let selected = data.selected;
    setActivePageNum(selected);
    setSkip(selected * limit);  
  };

  return (
    <>
      <ReactPaginate
          // forcePage={0}
          previousLabel={'PREV'}
          nextLabel={'NEXT'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.container}
          pageClassName={styles.li}
          activeClassName={styles.active}
          nextClassName={activePageNum === pageCount - 1 ? styles.disable : styles.next}
          previousClassName={activePageNum === 0 ? styles.disable : styles.prev}
          nextLinkClassName={styles.nextLink}
          previousLinkClassName={styles.prevLink}/>
    </>
  );
}

export default PaginationController;
