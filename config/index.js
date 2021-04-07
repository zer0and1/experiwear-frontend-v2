const isProd = process.env.CONFIG_ENV === 'production'

const PROXY_URL = isProd ? 'https://hawks.api.experiwear.com' : 'https://hawks-dev.api.experiwear.com'
const SOCKET_URL = isProd ? 'https://hawks.api.experiwear.com' : 'https://hawks-dev.api.experiwear.com'

export {
  PROXY_URL,
  SOCKET_URL
}
