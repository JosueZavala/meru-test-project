import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { PaginationProps } from "@/typings/aplication";

import cn from "classnames";

const Pagination: React.FC<PaginationProps> = ({
  count = 0,
  currentPage = 1,
  currentSize = 20,
  totalPages = 10,
  onPageChange,
}) => {
  const prevDisabled = currentPage - 1 === 0;
  const nextDisabled = currentPage + 1 > totalPages;

  const goToPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const goToNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 text-base text-grey-800 h-7">
      <div className="h-7">
        <span className="text-grey-400">{`Showing `}</span>

        <strong>
          {currentPage * currentSize - currentSize + 1} -{" "}
          {currentPage * currentSize}
        </strong>

        <span className="text-grey-400">{` of `}</span>

        <strong>{(count > 0 ? count : totalPages) ?? "..."}</strong>
      </div>

      <div className="inline-block w-40 h-7">
        <div className="flex flex-row justify-center">
          <div className="flex justify-center w-1/6 text-left">
            <button
              type="button"
              className={cn({
                "cursor-not-allowed text-grey-400": prevDisabled,
              })}
              onClick={goToPrevious}
              disabled={prevDisabled}
            >
              <HiOutlineArrowLeft />
            </button>
          </div>

          <div className="w-4/6 text-center whitespace-no-wrap">
            <span>{currentPage}</span>
            <span className="text-grey-400"> of {totalPages ?? "..."}</span>
          </div>

          <div className="flex justify-center w-1/6 text-right">
            <button
              type="button"
              className={cn({
                "text-grey-400 cursor-not-allowed": nextDisabled,
              })}
              onClick={goToNext}
              disabled={nextDisabled}
            >
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
