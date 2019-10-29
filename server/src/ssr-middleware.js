import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from 'client/App/App'

const ssrMiddleware = (ctx, next) => {
  const app = ReactDOMServer.renderToString(<App />)
  const html = `
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>React Boilerplate</title>
</head>
<body>
  <div id="root">${app}</div>
  <script type="text/javascript" src="/bundle.js"></script>
</body>
</html>
  `

  ctx.type = 'text/html'
  ctx.body = html
}

export default ssrMiddleware
