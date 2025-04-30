function findMthSmallest(arr, m) {
    arr.sort();
    return arr[m-1]
}
console.log(findMthSmallest([12, 45, 23, 89, 65],2))