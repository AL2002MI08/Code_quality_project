// Write a function(s) that checks the level of nesting of an array.
//Then, use that function to flatten the array into a single-dimensional array.
function flatten(array) {
  let result = [];

  function depth(array) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        depth(element);
      } else {
        result.push(element);
      }
    });
  }
  depth(array);
  
  return result;
}