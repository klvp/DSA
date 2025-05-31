function mergeSortedArrays(arr1, arr2) {
    let merge = [];
    const n = arr1.length, m = arr2.length;
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            merge.push(arr1[i])
            i++
        } else {
            merge.push(arr2[j])
            j++
        }
    }
    while (i < n) {
        merge.push(arr1[i])
        i++
    }
    while (j < m) {
        merge.push(arr2[j])
        j++
    }
    return merge
}

var merge = function(nums1, m, nums2, n) {
    let res = []
    let i = 0
    let j = 0
    while(i < m && j < n)
        if(nums1[i] < nums2[j]) {
            res.push(nums1[i])
            i++
        }
        else {
            res.push(nums2[j])
            j++
        }
    while(i < m){
        res.push(nums1[i])
        i++
    }
    while(j < n){
        res.push(nums2[j])
        j++
    }
    return res
};
console.log(mergeSortedArrays([2, 4, 7, 10], [2, 3]))
console.log(merge([2, 4, 7, 10],4, [2, 3],2))