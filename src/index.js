module.exports = function check(str, bracketsConfig) {
  let prev = '';
  for (let replaced = str; replaced != prev; prev = replaced, replaced = replaced.replace('()', '[]', '{}', '||', ''))
  return prev == '';


  const arr = [];
   for (let i = 0; i < bracketsConfig.length; i++) {
      arr.push(...bracketsConfig[i]);
   }
  let res = arr.join('');

  const newArr = [res];
  newArr.forEach(item => {
    const result = check(item);
    return (item, result);
  })
  
}
