
function sendCommand(method, url, body) {
  var url = `http://${hubIP}/api/${apiKey}/${url}`;
  var fetchOpts = {
    method: method
  };
  if (body) {
    fetchOpts.mode = 'cors';
    fetchOpts.body = JSON.stringify(body);
    fetchOpts.headers = {  
      "Content-type": "application/javascript"  
    }
  }
  return fetch(url, fetchOpts)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return response;
    });
}
