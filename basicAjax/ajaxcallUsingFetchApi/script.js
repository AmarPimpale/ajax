let contianer = document.querySelector('#info-contianer')
let button = document.querySelector('.btn')

button.addEventListener('click',function(){
    fetch("https://reqres.in/api/users?page=2")
.then(function(actualData){
    console.log(actualData) //here we get data in json format but we want in javascript object
    // using the json method for converting the json format to javascript object
    return actualData.json()
})
.then(function(actualData){
    console.log(actualData)
    return renderHtml(actualData.data)
}) 
.catch(function(error){
    console.log(error)
})})

function renderHtml(data){
    let htmlData =`
<div>
<p>${data[0].first_name}</p>
<p>${data[0].last_name}</p>
<p>${data[0].email}</p>
<p>${data[0].id}</p>
<p> <img src=${data[0].avatar} ></p>
</div>`

contianer.insertAdjacentHTML('beforeend',htmlData)
}