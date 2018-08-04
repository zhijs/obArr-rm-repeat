var arr_rm_repeat = require('./index.js')
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
//根据名字去重，并返回最高平均成绩
var arr = arr_rm_repeat(arr,['address', 'province', 'detail', 'city'], (e1, e2) => {
  if ((e1.grade.science +e1.grade.english) > (e2.grade.science +e2.grade.english)) {
    return true;
  } else {
    return false;
  }
})
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
console.log(arr_rm_repeat([1,2,3,4,3,3,4,5,6]));