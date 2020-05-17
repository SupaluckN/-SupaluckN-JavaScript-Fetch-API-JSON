(() => {
    fetch('customers.json')
        .then( response => response.json())
        .then( data => appendData(data))
        .catch(err => {console.log(err)});

    function appendData(data) {
        const myData = document.getElementById("data");
        for (let i = 0; i < data.length; i++) {
            const div = document.createElement("div");
            div.innerHTML = "Name : " + data[i].firstName 
                + ' ' + data[i].lastName;
            myData.appendChild(div);
;        }
    }
})();