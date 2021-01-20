import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// functions

// close alert functions
window.onclick = function (e) {
  if (e.target === document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
}

document.getElementById("close").onclick = function () {
  document.getElementById("popup").style.display = "none";
}