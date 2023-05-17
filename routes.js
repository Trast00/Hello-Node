const handleRequest = (req, res) => {
  const {url} = req

  res.write('<html>')
  res.write('<head><title>Hello nodeJS</title></head>')
  console.log(url)
  if (url === "/") {
    res.write('<body><h1>Hello World from Node JS!</h1>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form>')
    res.write('</body></html>')
    return res.end()
  }
  else if (url === '/create-user') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const username = parsedBody.split('=')[1]
      console.log("username:",username)
      res.write(`<body>username: <h1>${username}</h1></body>`)
      return res.end()
    })
  }
  else {
    res.write('<body><h1>404: Not Found</h1></body>')
    return res.end()
  }

}

module.exports = handleRequest