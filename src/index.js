
// You should implement your task here.

module.exports =   function towelSort (matrix) {
    let arr = [];  
     if(matrix === undefined) return [];  
    matrix.forEach((item,index) => {
            if(index % 2 === 0) {  
                arr.push(item);
                arr = arr.flat();
            } else {    
            arr.push(item.reverse());  
            arr = arr.flat();
            }
    }) 

   return arr ; 
}

 
 
