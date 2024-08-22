// Write a function(s) that checks the level of nesting of an array.
//Then, use that function to flatten the array into a single-dimensional array.
function flattenArray(array) {
  return array.reduce(
    (acc, value) => acc.concat(Array.isArray(value) ? flattenArray(value) : value),
    []
  );
}
function nestLevel(arr){
    let depth = 0
    arr.forEach(element => {
      if(Array.isArray(element)){
        let currentDepth = nestLevel(element)
        if(currentDepth + 1 > depth){
            depth = currentDepth + 1
        }
      }  
    })
    return depth
}