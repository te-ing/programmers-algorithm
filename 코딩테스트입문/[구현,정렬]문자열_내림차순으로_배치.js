/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * 
 * @문제
 * 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
 * s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

 * @풀이방식
 * "a".charCodeAt() 사용가능
 * @다른사람의_풀이
 * s.split('').sort().reverse().join('')
 */
function solution(s) {
  return s.split('').sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join("")
}

console.log(solution("Zbcdefg") === "gfedcbZ");