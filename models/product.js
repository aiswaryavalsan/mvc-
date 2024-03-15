const fs=require('fs');
let product=[];
const path=require('path');
const rootdir=require('../util/path');
const p=path.join(rootdir,'data','products.json');
const getFileDetails=(cb)=>{
    fs.readFile(p,(err,data)=>{
        if(err){
           
            cb([]);
        }
       else{
       cb(JSON.parse(data));
       }

    })
}
module.exports= class Product{
    constructor(t){
     this.title=t;
    }
    save(){
   
     getFileDetails(product=>{
       
        product.push(this)
           fs.writeFile(p,JSON.stringify(product),(err)=>{
               console.log(err);
           })
      
     });
    
    
      
    }
   
    static fetchAll(cb){
      
      getFileDetails(cb);
       
    }
}