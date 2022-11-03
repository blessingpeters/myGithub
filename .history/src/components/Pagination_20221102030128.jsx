import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currentPage, numberOfPages]);
  return (
    <div>
      <section className="pagination">
        <div className={disabledPrev ? "disabled" : "prev"}>
        <div className="flex">
          <LeftArrow /> <p onClick={prevPage}>  Previous</p>
        </div>
          
        </div>
        <div className="pagination-num flex">
          {pageNum.map((num) => (
            <div key={num}>
              <p
                onClick={() => setCurrentPage(num)}
                className="pagination-child"
              >
                {num}
              </p>
            </div>
          ))}
        </div>
        <div className={disabledNext ? "disabled" : "next"}>
        <div className="flex">
          <p onClick={nextPage}>Next<RightArrow /></p>
          
        </div>
        </div>
      </section>
    </div>
  );
}

export default Pagination;
