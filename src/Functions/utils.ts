
const isArray = (array: object[]) => Array.isArray(array)

const destructureArrayOfObjectsIntoSigleObject = (array: object[]) =>
    isArray(array) ? array.reduce((acc, el) => ({...acc, ...el}), {}) : array;

const getFromLast =  (array: object[]) => {
    if (!isArray(array)) return [];
    const lastIndex = array.length - 1;
    return (index:number) => array[lastIndex - index];
};

const shuffle = (array: any[]) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export {isArray, destructureArrayOfObjectsIntoSigleObject, getFromLast, shuffle};

