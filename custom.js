var tbody = document.getElementById("tbody");
var data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(veri=>{
    veri.forEach(element => {     
        tbody.innerHTML+=`
        <tr>
        <td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>  
        </tr>`
    });
});
