import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div>
      <div className={styles.paginator}>
        {portionCount > 1 && (
          <button
            className={styles.paginatorButton}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Previous
          </button>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                className={currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            className={styles.paginatorButton}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
