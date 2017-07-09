var XHR;

if (window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
    XHR.open('GET', 'http://127.0.0.1:8000/api/tasks/1', true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            console.log(JSON.parse(XHR.responseText));
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log('Página no encontrada');
        }
    }
    XHR.send(JSON.stringify({"name":"Python serverJavaScript mola"}));
}