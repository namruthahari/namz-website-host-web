let id,name,email;

const add =document.getElementById("add").addEventListener('click',()=>
{   id =document.getElementById("id").value;
    nam =document.getElementById("name").value;
    mail =document.getElementById("email").value;
    
    db.ref("users/"+id).set({
    Name:name,
    Email:email,
})
  
})

const update = document.getElementById("up").addEventListener('click',()=>
{ db.ref()

})

const update = document.getElementById("get").addEventListener('click',()=>
{ db.ref()

})

const update = document.getElementById("del").addEventListener('click',()=>
{ db.ref()

})