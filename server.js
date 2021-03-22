const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const cluster = require('cluster')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const portHttp = process.env.HTTP_PORT || 3000
const isCluster = process.env.CLUSTER || false

if (cluster.isMaster && isCluster) {
  const cpuCount = require('os')
    .cpus().length
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  app.prepare()
    .then(() => {
      createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
      })
        .listen(portHttp, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${portHttp}`)
        })
    })
}


