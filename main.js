require(['./hello'], function(hello){
    body = document.body
    body.innerHTML = `<h1>hello,${hello.person}</h1>`
  })