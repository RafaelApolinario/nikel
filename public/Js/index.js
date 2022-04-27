
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const password=document.getElementById("password-create-input").value;
    
    console.log(email, password);
})