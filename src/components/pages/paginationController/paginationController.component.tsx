import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './paginationController.module.css';

const PaginationController = (props:any) => {

  let {pageCount,setSkip,limit} = props;
  let [activePageNum,setActivePageNum] = useState(0);

  console.log(pageCount);

  const handlePageClick = (data: any) => {
    let selected = data.selected;
    setActivePageNum(selected);
    setSkip(selected * limit);  
  };

  return (
    <>
    
      <ReactPaginate
          previousLabel={'PREV'}
          nextLabel={'NEXT'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={styles.container}
          pageClassName={styles.li}
          // subContainerClassName={'pages pagination'}
          activeClassName={styles.active}
          nextClassName={activePageNum === pageCount - 1 ? styles.disable : styles.next}
          previousClassName={activePageNum === 0 ? styles.disable : styles.prev}
          nextLinkClassName={styles.nextLink}
          previousLinkClassName={styles.prevLink}
 
        />
    </>
  );
}

export default PaginationController;
