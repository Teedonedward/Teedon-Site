function search() {
    let filter = document.getElementById('search').value.toUpperCase;

    let item = document.querySelectorAll('.design');

    let I = document.getElementsByTagName('h1');

    for(var i = 0; i <= 1.length; 1++) {
        let a = item[i].getElementsByTagName('h1')[0];

        let value = a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else
        {
            item[i].style.display = "none";
        }
    }
}