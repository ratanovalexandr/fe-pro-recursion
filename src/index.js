/**
 * Принимает два объекта, должна вернуть или true или false, если объекты идентичны внутри, возвращает
 * true, если есть различие, false. То есть проверяет каждое свойство, вне зависимости от вложенности,
 * делаем через рекурсию(а других вариантов и нет)
 */
export const deepEqual = (obj, anotherObject) => {
  // if (JSON.stringify(obj) === JSON.stringify(anotherObject)) {
  //   return true;
  // } else {
  //   return false;
  // }

  const objK = Object.keys(obj);
  const anotherObjK = Object.keys(anotherObject);

  if (objK.length !== anotherObjK.length) {
    return false;
  }

  for (let i = 0; i < objK.length; i++) {
    if (!anotherObjK.includes) {
      return false;
    }
    if (typeof obj[objK[i]] === 'object') {
      return deepEqual(obj[objK[i]], anotherObject[objK[i]]);
    }
    if (obj[objK[i]] !== anotherObject[anotherObjK[i]]) {
      return false;
    }
  }

  return true;
};

/**
 * Принимает объект, возвращает его глубокую копию, то есть ни одно свойство
 * не является ссылочным у другого объекта, точно возвращает новое.
 * Если это массив, возвращает новый массив(map) и если элемент массива не простого типа,
 * то тогда в рекурсию. С объектом также. Поскольку массив при typeof возвращает object, чтобы
 * их различить берем метод Array.isArray и он на массивах вернет тру
 */
export const deepCopy = (obj) => {
  let copy = Array.isArray(obj) ? [] : {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      copy[key] = deepCopy(value);
    } else {
      copy[key] = value;
    }
  });
  return copy;
};

/**
 * Мы передаем объект, и должны вернуть массив уникальных названий свойств
 * То есть если у нас объект { name: { bohdan: { name: 'test' } } } вернет ['name', 'bohdan']
 */
export const getAllObjectKeys = (obj) => {
  return Object.entries(obj).reduce((arr, [key, value]) => {
    arr.push(key);
    if (typeof value === 'object') {
      arr.push(...getAllObjectKeys(value));
    }
    return [...new Set(arr)];
  }, []);
};
