import '@babel/polyfill'
import Koa from 'koa'
import mount from 'koa-mount'
import serve from 'koa-static'
import path from 'path'
import ssrMiddleware from './ssr-middleware'
import hmrService from './hmr-service'

const port = process.env.PORT || 9000
const app = new Koa()

app.use(mount('/', serve(path.resolve('./dist/public'))))

if (process.env.HOT === 'true') hmrService(app)

if (!process.env.HOT) app.use(ssrMiddleware)


app.listen(port)

console.log(`Your app is running on ${port}`)
