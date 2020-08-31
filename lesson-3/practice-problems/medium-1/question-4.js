function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/*
The difference between the two functions is the method called on buffer. The
push method will modify an existing array. While the concat method creates a new
array on each call. That is why it is reassigning buffer on line 10, because
without the reassignment it will not save the correct value in the buffer.*/
