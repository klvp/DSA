let arr = [0, -1, 2, -3, 1]
function findTriplets(arr) {
    let resSet = new Set()
    let map = new Map()
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let s = arr[i] + arr[j]
            
            if (!map.has(s)) {
                map.set(s, [])
            }
            map.get(s).push([i,j])
        }
    }
    // console.log(map);
    for(let i = 0; i < n; i++){
        let rem = -arr[i]
        if(map.has(rem)){
            for(let indexes of map.get(rem)){
                if(indexes[0] != i && indexes[1] != i){
                    let curr = [i,...indexes].sort((a,b) => a-b)
                    resSet.add(curr.toString())
                }
            }
        }
    }
    return Array.from(resSet).map(item => item.split(',').map(Number));
    
}
console.log(findTriplets(arr))