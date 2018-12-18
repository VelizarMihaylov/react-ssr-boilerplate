import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackDevConfig from '../../webpack.dev'
import hotClient from 'webpack-hot-client'


const hmrService = (app, conf = { port: 8080 }) => {
  const compiler = webpack(webpackDevConfig)
  const hot = hotClient(compiler, conf)
  const { server } = hot
  const devMiddleware = webpackDevMiddleware(compiler)

  return server.on('listening', () => {
    app.use(async (ctx, next) => {
      await devMiddleware.waitUntilValid(
        await devMiddleware(
          ctx.req,
          {
            end: payload => { ctx.body = payload },
            setHeader: ctx.set.bind(ctx),
            locals: ctx.state
          },
          next
        )
      )
    })
  })
}

export default hmrService
