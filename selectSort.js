/**
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 */
function selectSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  console.log('排序前：', arr);
  for (var i = 0; i < len; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 保存最小数的索引
      }
    }

    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log('排序后：', arr);
  return arr;
}

selectSort([1, 3, 6, 2, 4, 5, 7, 9, 0]);