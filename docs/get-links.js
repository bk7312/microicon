
const geomiconsKeys = require('../geomicons-keys')
const relineKeys = require('../reline-keys')

const keys = [
  ...relineKeys,
  ...geomiconsKeys
]

const domain = 'https://microicon-six.vercel.app'

const links = keys.map(key => {
  const url = `${domain}/${key}`
  return `- [![${key}](${url})](${url})`
})

console.log(links.join('\n'))

