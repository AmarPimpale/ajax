
let button = document.querySelector('.btn')
let infoContianer = document.querySelector('#contianer')

button.addEventListener('click', function(){
    let ourRequest = new XMLHttpRequest()
    ourRequest.open('GET','https://reqres.in/api/users?page=2',true)

   ourRequest.onload = function(){
    let ourData = JSON.parse(this.responseText)
    console.log(ourData.data[0])
    renderHtml(ourData.data)
   }

   ourRequest.send()
})


function renderHtml(data){
let htmlData =`
<div>
<p>${data[0].first_name}</p>
<p>${data[0].last_name}</p>
<p>${data[0].email}</p>
<p>${data[0].id}</p>
<p> <img src=${data[0].avatar} ></p>
</div>`

infoContianer.insertAdjacentHTML('beforeend',htmlData)
}