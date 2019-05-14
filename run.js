const fs = require('fs'),
      http = require('http')

let patnName = `导航条.html`
let result = ``
fs.readFile(`${__dirname}/${patnName}`,{encoding: 'utf-8'},(err,data)=> {
    if (err) throw err
    result = data
})
http.createServer((res,req)=> {
        
        req.end(`${result}`)
    })
    .listen(2333)