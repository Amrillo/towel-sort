
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === "undefined") { 
        return [] }
    matrix.map((item,index)=> {if(index % 2){item.reverse()}});
     return matrix.flat();
}

/*const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

/*if (!Array.isArray(arr)) { 
   return console.log("false")  ;
}
*/
 
