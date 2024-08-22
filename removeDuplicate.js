// Implement a JavaScript function to remove duplicate elements from an array.
function removeDuplicates(array){
return array.filter((el, i) => array.indexOf(el) === i)
}