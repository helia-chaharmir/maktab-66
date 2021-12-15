function getSameCount(str1, str2) {
    let count = 0;
    const obj = str2.split("");
    for(str of str1){
      let idx = obj.findIndex(s => s === str);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      }
    }
    return count;
  }
  console.log(getSameCount("abcd", "aad"));
  console.log(getSameCount("aad", "abcd"));
  console.log(getSameCount("aabcc", "adcaa"));
  console.log(getSameCount("aaaaa","a"));