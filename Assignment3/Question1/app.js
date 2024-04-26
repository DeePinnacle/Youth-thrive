let photosElement = document.getElementById('photos');
let commentElement = document.getElementById('comment')
let todoElement = document.getElementById('todos')


// fetch photos
let photos = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos")
    let data = await response.json()
    data.slice(0, 8).map((photo)=>{
        photosElement.innerHTML +=`
            <div class='wrapper'>
                <div class="img-container">
                    <img src='${photo.thumbnailUrl}' />
                </div>
                <p class='el-title'>Photo ID: ${ photo.id }</p>
                <p class='el-title'>Photo Title: <span>${ photo.title }</span></p>
            </div>
        ` 
    })
}

// fetch todos

let todos = async () => {
    let response = await fetch ('https://jsonplaceholder.typicode.com/todos')
    let data = await response.json()
    data.slice(0, 8).map((todo)=>{
        todoElement.innerHTML += `
            <div class='wrapper'>
                <p class='el-title'>ID: <span>${ todo.id }</span></p>
                <p class='el-title'>Title: <span>${ todo.title }</span></p>
                <p class='el-title'>Completed: <span>${ todo.completed }</span></p>
            </div>
        `
    })
}


// fetch comment
let comments = async () => {
    let response = await fetch ('https://jsonplaceholder.typicode.com/comments')
    let data = await response.json();

    data.slice(0, 8).map((comment)=>{
        commentElement.innerHTML += `
            <div class='wrapper'>
                <p class="el-title">comment ID: <span> ${comment.id}</span></p>
                <p class="el-title">comment By: <span> ${comment.name}</span></p>
                <p class="el-title">Email: <span> ${comment.email}</span></p>
                <p class="el-title">Comment: <span> ${comment.body}</span></p>
            </div>
        `
    })
}

// call functions

photos()
comments()
todos()