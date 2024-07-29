const json_server=require('json-server')
const cors=require('cors')

const emsServer=json_server.create()
const middleware=json_server.defaults()
const routes=json_server.router('data.json')

emsServer.use(cors())
emsServer.use(middleware)
emsServer.use(routes)

const PORT=8000
emsServer.listen(PORT,()=>{
    console.log(`Server started running at Port ${PORT} `);
})