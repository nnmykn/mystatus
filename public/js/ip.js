fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  .then(json => console.log(json.ip))
