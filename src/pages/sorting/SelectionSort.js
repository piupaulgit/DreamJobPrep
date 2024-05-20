import React from "react";

const SelectionSort = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Selection Sort (Brute Force)
      </h1>
      <div className="p-4 bg-gray-100 rounded shadow-md">
        <p>
          Selection sort is a simple sorting algorithm that repeatedly selects
          the smallest (or largest, depending on sorting order) element from the
          unsorted portion of the array and swaps it with the element at the
          beginning of the unsorted portion. This process continues until the
          entire array is sorted.
        </p>
        <div className="my-8">
          <h3 className="text-xl pb-2">How Selection Sort Works: </h3>
          <ul className="list-disc list-inside">
            <li>
              <b>Find the minimum:</b> Iterate through the unsorted portion of
              the array to find the smallest element.
            </li>
            <li>
              <b>Swap:</b> Swap the smallest element with the first element of
              the unsorted portion.
            </li>
            <li>
              <b>Repeat:</b> Move the boundary of the sorted and unsorted
              portions by one element and repeat the process until the array is
              fully sorted.
            </li>
          </ul>
        </div>
        <div className="my-8">
          <h2 className="text-xl pb-2">Full Implementation: </h2>
          <pre className="bg-white p-4 rounded shadow-md overflow-x-auto mt-2">
            <code>
              {`function selectionSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;
}

// Example usage
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
`}
            </code>
          </pre>
        </div>
        <div className="my-8">
          <h3 className="text-xl pb-2">Characteristics: </h3>
          <ul className="list-disc list-inside">
            <li>
              <b>Time Complexity:</b> O(n^2) for all cases (worst, average, and
              best).
            </li>
            <li>
              <b>Space Complexity:</b> O(1) - it is an in-place sorting
              algorithm..
            </li>
          </ul>
        </div>
        <div className="my-8">
          <h3 className="text-xl pb-2">Applications: </h3>
          <ul className="list-disc list-inside">
            <li>
              Selection sort is useful for small data sets or when the
              simplicity of the algorithm is more important than its speed.
            </li>
            <li>
              It is used in educational contexts to illustrate the concept of
              sorting.
            </li>
          </ul>
        </div>
        <p>
          Selection sort, despite its simplicity, is not efficient for large
          datasets due to its quadratic time complexity. However, its simplicity
          makes it easy to implement and understand, which can be useful for
          teaching and learning about sorting algorithms.
        </p>
      </div>
    </div>
  );
};

export default SelectionSort;
