import { useMemo } from "react";

export const DOTS = "...";

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  pageNumber = 1,
  pageSize,
  totalPage,
  siblingCount = 1,
}: {
  pageNumber: number | undefined;
  pageSize: number | undefined;
  totalPage: number;
  siblingCount?: number;
}) => {
  const paginationRange: (number | "...")[] | undefined = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + pageNumber + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPage]
        */
    if (totalPageNumbers >= totalPage) {
      return range(1, totalPage);
    }

    const leftSiblingIndex = Math.max(pageNumber - siblingCount, 1);
    const rightSiblingIndex = Math.min(pageNumber + siblingCount, totalPage);

    /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPage - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPage;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPage];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPage - rightItemCount + 1, totalPage);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, siblingCount, pageNumber, totalPage]);

  return paginationRange;
};
