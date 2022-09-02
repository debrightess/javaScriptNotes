function palindrome(str) {
  let word = str;
  word = word.replace(/[^A-Za-z0-9]/g, '');
  word = word.toLowerCase();
  console.log(word);

  function reverseWord(word) {
    var splitWord = word.split('');
    var reverseArray = splitWord.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
  }

  if (word === reverseWord(word)) {
    return true;
  } else {
    return false;
  }
}

palindrome('eye');
palindrome('2A3*3a2');
palindrome('_eye');
palindrome('0_0 (: /- :) 0-0');
