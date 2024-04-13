console.log('testing')
const http = require('http')

const port = 808

const server = http.createServer(function(req,res){
    res.write('Hello World')
    res.end()

})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong',error)
    }else{
        console.log('server is listening on port' + ': ' + port)
    }
})

/*module.exports = app;*/