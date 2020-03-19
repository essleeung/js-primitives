// 10.) **BONUS** - Here are a list of `ages`
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14, 2]

// find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.

// Sort ages from youngest to oldest.
let sortedAges = ages.sort(function(a,b){
    return a - b
})
//if the number of observations is even, takes the middle two numbers and divides by 2
if (sortedAges.length % 2 === 0) {
    let middle = Math.floor(sortedAges.length/ 2)
    let midAvg = (sortedAges[middle] + sortedAges[middle - 1]) /2
    console.log(sortedAges)
    console.log("The median of this array is " + midAvg)
//if the number of obserations is odd, takes the middle number of the array
} else {
    let middle = Math.floor(sortedAges.length/ 2)
    console.log(sortedAges)
    console.log("The median of this array is " + sortedAges[middle])
}
