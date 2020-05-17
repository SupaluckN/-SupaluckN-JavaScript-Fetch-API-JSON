(() => {
    fetch('customers.json')
        .then( response => response.json())
        .then( data => addCustomer(data))
        .catch(err => {console.log(err)});

    function addCustomer(data) {
        const myData = document.getElementById("data");
        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML =  "<td>" + data[i].id + "</td>"
                + "<td>" +  data[i].firstName 
                + ' ' + data[i].lastName + "</td>" 
                + "<td> " + data[i].age + "</td>"
                + "<td> " + data[i].country + "</td>";
            myData.appendChild(tr);
;        }
    }
})();