document.getElementById("fetch").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then (response => {
        if(!response.ok){
            throw new Error("request failed" );
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayData(data);
    })
    .catch (error => displayError("error fetching data"));
});

function displayData(data){
    const dataOutput = document.getElementById("showing-data");
    dataOutput.innerHTML = "<h3>${data.title}</h3><p>${data.body}</p>";
}

function displayError(error){
    const dataOutput = document.getElementById("showing-data");
    dataOutput.innerHTML = "<p>Error: ${error.message}</p>";
}


document.getElementById("XHR").addEventListener("click", function(){
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/posts/2", true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4)
            if (xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        displayData(data);
    }else{
        displayError ("error");
    }
    };
        xhr.send();
});

