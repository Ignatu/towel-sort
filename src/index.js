
// You should implement your task here.

module.exports = function towelSort (array) {
  let arrayJ = array.join(',').split(',');
  for (i=0; i<arrayJ.length; i++) {
    arrayJ[i] = Number(arrayJ[i])}
    return arrayJ.sort()
}

