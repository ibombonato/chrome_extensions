const sendToApi = async (message) => {

    myBody = JSON.stringify({ 'msg' : message });

    const response = await fetch('http://127.0.0.1:5325/text', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }

  sendToApi(document.documentElement.innerHTML);

let observer = new MutationObserver(mutations => {
    sendToApi(document.documentElement.innerHTML);
 });

 observer.observe(document, { childList: true, subtree: true });
