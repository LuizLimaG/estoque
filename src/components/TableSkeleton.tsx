import React from "react";

interface TableSkeletonProps {
  rowsCount?: number;
  columnsCount?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rowsCount = 5,
  columnsCount = 3,
}) => {
  return (
    <div className="w-full animate-pulse">
      <div className="border-b border-gray-200">
        <div className="flex items-center h-12 px-6 bg-gray-50">
          <div className="w-4 h-4 mr-4 bg-gray-200 rounded"></div>

          {[...Array(columnsCount)].map((_, index) => (
            <div
              key={`header-${index}`}
              className={`flex-1 h-4 bg-gray-200 rounded ${
                index !== columnsCount - 1 ? "mr-4" : ""
              }`}
            ></div>
          ))}

          <div className="w-20 h-4 ml-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {[...Array(rowsCount)].map((_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="border-b border-gray-200 hover:bg-gray-50"
        >
          <div className="flex items-center h-16 px-6">
            <div className="w-4 h-4 mr-4 bg-gray-200 rounded"></div>

            {[...Array(columnsCount)].map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`flex-1 h-4 bg-gray-200 rounded ${
                  colIndex !== columnsCount - 1 ? "mr-4" : ""
                }`}
              ></div>
            ))}

            <div className="flex gap-2 ml-4">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
