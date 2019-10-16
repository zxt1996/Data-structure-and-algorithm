// 496.下一个更大元素I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(cur=>{
        let t = nums2.indexOf(cur);
        for(t,len=nums2.length;t<len;t++){
            if(nums2[t]>cur){
                return nums2[t]
            }
        }
        return -1
    })
};