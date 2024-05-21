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
          <pre className="bg-white p-4 rounded shadow-md overflow-x-auto mt-2">
            <code>
              {`const bubbleSort = (arr) => {
                const n = arr.length;
                for (let i = arr.length-1; i >= 0; i--){
                    let smallest = i;
                    for (let j = i-1; j >= 0; j--) {
                        if(arr[smallest] < arr[j]){
                            [arr[smallest], arr[j]] = [arr[j], arr[smallest]]
                        } else{
                            smallest = j;
                        }
                    }
                }
                return arr;
            }
            
            bubbleSort(["card", "flight", "abs", "night"])
            //output: ['abs', 'card', 'flight', 'night']`}
            </code>
          </pre>
        </div>

        <div className="my-8">
          <h3 className="text-xl pb-2">Characteristics: </h3>
          <ul>
            <li>
              <b>Time Complexity:</b> O(n^2) in the worst and average cases,
              where n is the number of items being sorted.
            </li>
            <li>
              <b>Space Complexity:</b> O(1) because it is an in-place sorting
              algorithm.
            </li>
          </ul>
        </div>

        <div className="my-8">
          <p>
            Bubble Sort is an intuitive but inefficient sorting algorithm for
            large datasets due to its O(n^2) time complexity. It performs well
            on small or nearly sorted datasets and is easy to implement and
            understand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
