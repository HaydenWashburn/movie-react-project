function selectRandomRangeFromList(arr, length) {
  if (length >= arr.length) return [...arr];

  let availableIdxs = arr.map((_, idx) => idx);
  let result = [];
  while (result.length < length) {
    let randomAvailableIdx = Math.floor(Math.random() * availableIdxs.length);
    let idx = availableIdxs[randomAvailableIdx];
    result.push(arr[idx]);
    availableIdxs.splice(randomAvailableIdx, 1);
  }
  return result;
}

export default selectRandomRangeFromList;