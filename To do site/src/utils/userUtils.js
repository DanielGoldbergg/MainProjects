import UtilsLayer from "./generalUtils";

const getShapedData = async() => {
//getting all Raw responses
    let usersResp = await UtilsLayer.getAll(`https://jsonplaceholder.typicode.com/users`)
    let todosResp = await UtilsLayer.getAll(`https://jsonplaceholder.typicode.com/todos`)
    let postsResp = await UtilsLayer.getAll(`https://jsonplaceholder.typicode.com/posts`)
    // extracting data
    let allUsers = usersResp.data
    let allTodos = todosResp.data
    let allPosts = postsResp.data
    //get from usersArr only relevent data
    let shapedUsers = allUsers.map(user => user = {
        id: user.id,
        name:user.name,
        email:user.email,
        address:{
            street:user.address.street,
            city:user.address.city,
            zipcode:user.address.zipcode
        }
    })
    //adding all relevant posts to all users  - do for todos as well
    shapedUsers.forEach(user=>{
        user.posts =[]
        user.todos=[]
        allPosts.forEach(post => {
            if(post.userId === user.id){
                let obj ={
                    id:post.id,
                    title:post.title,
                    body:post.body
                }
                user.posts.push(obj)
            }
            
        })
        allTodos.forEach(todo=>{
            if(todo.userId===user.id){
                let obj = {
                    id: todo.id,
                    title : todo.title,
                    completed : todo.completed
                }
                user.todos.push(obj)
            }
        })

    })
    
    return shapedUsers;




}

export default {getShapedData}