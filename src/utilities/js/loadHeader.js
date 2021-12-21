fetch('/html/pageElements/header.html').then(res => res.text()).then(text => {document.querySelector("#header").innerHTML = text;})
