exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let final = 0;
    for (let i = 0; i < arr.length; i++) {
      final = final + arr[i];
    }

    return final;

  },

  remove: function(arr, item) {

    let final = [];

    for(let i = 0; i < arr.length; i++) {
      if ( arr[i] !== item) {
        final.push(arr[i]);
      }
    }
    return final;

  },

  removeWithoutCopy: function(arr, item) {

    let length = 0;

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i,1);
        i--;
        length--;
      }
      
    }

    return arr;

  },

  append: function(arr, item) {

    arr.push(item);
    return arr;

  },

  truncate: function(arr) {

    arr.pop();

    return arr;

  },

  prepend: function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {

    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {

    let arrFinal = [];

    arrFinal = arr1.concat(arr2);

    return arrFinal;

  },

  insert: function(arr, item, index) {

    arr.splice(index, 0, item);

    return arr;

  },

  count: function(arr, item) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if( arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {

    len = arr.length;
    final = [];

    arr.sort();

    for(let i = 1; i < len; i++) {
      if(arr[i] === arr[i-1]) {
        final.push(arr[i]);
        arr.splice((i),1,arr[i]);
        arr.splice((i-1),1,arr[i-1]);
        len = len - 2;
      } else {
        i++;
      }
    }
    return final;
  },

  square: function(arr) {

    final = [];

    for(let i = 0; i < arr.length; i++) {
      final.push(arr[i] * arr[i]);
    }

    return final;

  },

  findAllOccurrences: function(arr, target) {

    final = [];

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        final.push(i);
        i++;
      }
    }
    return final;
  }
};
