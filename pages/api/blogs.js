// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'node:fs';

export default async function handler(req, res) {
    let data= await fs.promises.readdir('blogdata')
    let allblogs =[];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let myfile = await fs.promises.readFile(('blogdata/' + item),'utf8')
        allblogs.push(JSON.parse(myfile))
    }
res.status(200).json(allblogs)
 
  
}
