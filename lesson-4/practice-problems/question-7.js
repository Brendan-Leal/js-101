// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
The callback function is set up weird because map will always return an array
yet the if block is returning the element passed into the callback. So when the
first element is evaluated it is false and is returning undefined. Thuse we get
[ undefined, 'bear' ]
*/
