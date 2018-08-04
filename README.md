### 对象数组根据叶子属性去重，并根据给定规则返回指定元素

### how to use (example)
```javascript
// 下载
npm install arr-rm-repeat

// 引入
var arr_rm_repeat = require('arr-rm-repeat')

// 使用
/**
 * oldArr: 对象数组
 * keys: String[]-去重属性的叶子访问顺序，只支持叶子结点
 * callback: 去重规则，返回布尔值的函数，其参数为两个去重叶子结点一样的元素，若返回true,是保留第一个参数元素，否则返回第二个参数元素
 * */
var newArr = arr_rm_repeat(oldArr, keys?, callback?)

// example
var arr = [
  {
    grade: {
      science: 88,
      english: 90
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '深圳'
        }
      }
    }
  },
  {
    grade: {
      science: 88,
      english: 91
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '深圳'
        }
      }
    }
  },
  {
    grade: {
      science: 80,
      english: 97
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '广州'
        }
      }
    }
  },
  {
    grade: {
      science: 77,
      english: 91
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '广州'
        }
      }
    }
  },
  {
    grade: {
      science: 70,
      english: 91
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '佛山'
        }
      }
    }
  }, 
  {
    grade: {
      science: 75,
      english: 97
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '佛山'
        }
      }
    }
  }, 
  {
    grade: {
      science: 67,
      english: 89
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '东莞'
        }
      }
    }
  },
  {
    grade: {
      science: 60,
      english: 89
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '东莞'
        }
      }
    }
  },
  {
    grade: {
      science: 88,
      english: 89
    },
    address: {
      province: {
        provinceName: '广东',
        detail: {
          city: '东莞'
        }
      }
    }
  }
]
//根据城市名称去重，并返回最高平均成绩
var arr = arr_rm_repeat(arr,['address', 'province', 'detail', 'city'], (e1, e2) => {
  if ((e1.grade.science +e1.grade.english) > (e2.grade.science +e2.grade.english)) {
    return true;
  } else {
    return false;
  }
})
//////////////////// 结果
{ grade: { science: 88, english: 91 },
  address: { province: { provinceName: '广东', detail: {city: '深圳'} } } }
{ grade: { science: 80, english: 97 },
  address: { province: { provinceName: '广东', detail: {city: '广州'} } } }
{ grade: { science: 75, english: 97 },
  address: { province: { provinceName: '广东', detail: {city: '佛山'} } } }
{ grade: { science: 88, english: 89 },
  address: { province: { provinceName: '广东', detail: {city: '东莞'} } } }


```