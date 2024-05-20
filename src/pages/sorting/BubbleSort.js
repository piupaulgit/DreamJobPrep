import React from "react";

const BubbleSort = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Bubble Sort</h1>
      <div className="p-4 bg-gray-100 rounded shadow-md">
        <p>
          Bubble Sort is a simple comparison-based sorting algorithm. It is
          named for the way larger/smaller elements "bubble" to the top of the
          list through successive swaps. Despite its simplicity, it is not
          suitable for large datasets as its average and worst-case time
          complexity is quite high.
        </p>
        <div className="my-8">
          <h3 className="text-xl pb-2">How Bubble Sort Works: </h3>
          <ul className="list-disc list-inside">
            <li>
              <b>Iterate through the list:</b> Compare each pair of adjacent
              elements.
            </li>
            <li>
              <b>Swap elements if necessary:</b> If the current element is
              greater than the next element, swap them.
            </li>
            <li>
              <b>Repeat:</b> Continue iterating through the list until no more
              swaps are needed.
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h3 className="text-xl pb-2">Full Implementation: </h3>
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
