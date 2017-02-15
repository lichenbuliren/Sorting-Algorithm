/**
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 * 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len.length; i++) {
    preIndex = i - 1;
    // 当前值
    current = arr[i];
    // 如果前面的大于后面的
    while (preIndex >= 0 && arr[preIndex] > current) {
      // 整体数组往后移动
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    // 将数据插入到合适的值后面
    arr[preIndex + 1] = current;
  }
  return arr;
}