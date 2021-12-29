export const shuffleArray = (arr) => {
  const arrCopy = arr.slice();
  for (let i = arrCopy.length -1; i > 0; i--) {
    let randomIdx = Math.floor(Math.random() * i);
    let temp = arrCopy[i];
    arrCopy[i] = arrCopy[randomIdx];
    arrCopy[randomIdx] = temp;
  }
  return arrCopy;
}