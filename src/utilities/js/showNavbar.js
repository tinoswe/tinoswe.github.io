fetch('/html/pageElements/navbar.html').then(res => res.text()).then(text => {document.querySelector("#nav-placeholder").innerHTML = text;})
