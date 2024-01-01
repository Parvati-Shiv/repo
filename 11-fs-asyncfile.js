const {readfile,writefile, readFile, write, writeFile}=require('fs');

readFile('Content/subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return 
    }
 const first=result
 readFile('Content/subfolder/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return 
    }
 const second=result;
 writeFile('./Content/subfolder/result-async.txt',`hereis result:${first} & ${second}`)
 ,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)

 }
 
})
})

