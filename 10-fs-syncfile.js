const {readFileSync,writeFileSync}=require('fs');

const first =readFileSync('./Content/subfolder/first.txt','utf-8')
const second =readFileSync('./Content/subfolder/second.txt','utf-8');
console.log(first,second);

writeFileSync('./Content/result-sync.txt',`Here is result :${first},${second}`)
