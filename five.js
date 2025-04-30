function findMedianSortedArrays(nums1, nums2) {
   
    let arr=[...nums1,...nums2];
    let len= arr.length;
    let m=Math.floor(len/2);
    arr.sort();
    if(len%2!=0){
       return arr[m];
    }else{
        return (arr[m-1]+arr[m])/2;
    }
}
console.log(findMedianSortedArrays([3,4],[1,2]) )