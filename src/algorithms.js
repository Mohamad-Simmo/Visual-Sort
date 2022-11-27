export const bubbleSortAnimation = (arr) => {
  const animations = [];
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      const animation = {};
      animation.compare = [j, j + 1];

      if (arr[j] > arr[j + 1]) {
        animation.swap = [j, j + 1];
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      animations.push(animation);
    }
    animations.push(i);

    if (noSwaps) break;
  }
  return animations;
};
