
module.exports = function arr_rm_repeat() {
  if (arguments.length === 0) {
    throw 'Array parama is empty';
  }
  // if (arguments.length === 1) {
  //   return arguments[0];
  // }
  let arr = arguments[0];
  let keys = Array.isArray(arguments[1]) ? arguments[1] : [arguments[1]]
  let map = new Map();
  let newArr = [];
  // 根据某个key进行去重
  for (let i = 0; i < arr.length; i++) {
    let val = getValueStr(arr[i], keys);
    if (!map.has(val)) {
      newArr.push(arr[i])
      map.set(val, [i, newArr.length - 1])
    } else {
      // 根据指定的函数选择保留那个
      if (arguments[2] && typeof arguments[2] === 'function') {
        let fn = arguments[2];
        let position = map.get(val);
        if (!fn(arr[position[0]], arr[i])) {
          newArr[position[1]] = arr[i]
          map.set(val, [i, position[1]])
        }
      }
    }
  }
  return newArr;
  
}

function getValueStr(obj, keys) {
  let typeStr = Object.prototype.toString.call(obj)
  if (keys.length === 1 && 
    keys[0] === undefined 
    && (typeStr === '[object Number]' || typeStr === '[object Boolean]' || typeStr === '[object String]')
  ) {
    return obj
  }
  let copyObj = Object.assign({}, obj);
  for (let i = 0; i < keys.length; i++) {
    copyObj = copyObj[keys[i]];
  }
  if (Object.prototype.toString.call(copyObj) === "[object Undefined]") {
    return 'Undefined-';
  }
  if (Object.prototype.toString.call(copyObj) === "[object Null]") {
    return 'Null-'
  }
  return copyObj;
}