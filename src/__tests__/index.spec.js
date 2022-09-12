import { deepCopy, deepEqual, getAllObjectKeys } from '../index';

describe('deepEqual', () => {
  it('should return boolean', () => {
    const obj = {
      name: 'test',
      prop: { obj: { name: 'bohdan', arr: [1, 2, 3] } },
    };
    const nextObj = {
      name: 'test',
      prop: { obj: { name: 'bohdan', arr: [1, 2, 3] } },
    };

    expect(deepEqual(obj, nextObj)).toStrictEqual(true);
  });
});
+describe('deepCopy', () => {
  it('should return correct object', () => {
    const obj = { prop: 'bohdan', obj: { arr: [1, 2, 3] } };
    const deepObj = deepCopy(obj);

    expect(obj.obj.arr.length).toStrictEqual(deepObj.obj.arr.length);
    expect(obj !== deepObj).toStrictEqual(true);
    expect(obj.obj !== deepObj.obj).toStrictEqual(true);
  });
});

describe('getAllObjectKeys', () => {
  it('should return correct array', () => {
    const obj = {
      notBla: 'test',
      name: 'bohdam',
      obj: { bla: { notBla: 'test' } },
    };

    expect(getAllObjectKeys(obj)).toStrictEqual([
      'notBla',
      'name',
      'obj',
      'bla',
    ]);
  });
});
