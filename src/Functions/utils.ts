
const isArray = (array: object[]) => Array.isArray(array);

const destructureArrayOfObjectsIntoSigleObject = (array: object[]) =>
    isArray(array) ? array.reduce((acc, el) => ({...acc, ...el}), {}) : array;

const getFromLast =  (array: object[]) => {
    if (!isArray(array)) return [];
    const lastIndex = array.length - 1;
    return (index:number) => array[lastIndex - index];
};

export {isArray, destructureArrayOfObjectsIntoSigleObject, getFromLast};