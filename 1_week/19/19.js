/*

아이유가 두 개의 배열의 값들이 서로 같은지 비교하는 함수를 만들었어요!
만든 함수를 테스트 했더니 다음과 같은 결과가 나왔습니다.

checkEquals([1, 2], [1, 3])   -> false
checkEquals([1, 2], [1, 2])   -> false

으잉? 두 번째 테스트는 똑같은 배열 같은데 false가 나왔네요!
왜 이지경이 되었을까요??
잘 생각해보고 아이유가 만든 아래의 함수를 고쳐 보세요!

 */

function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true
  } else {
    return false
  }
}

module.exports = checkEquals;

₩