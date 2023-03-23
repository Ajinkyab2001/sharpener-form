function myfunc(event){
    event.preventDefault();
     var myobj = {
        full_name : document.getElementById("Name").value,
        email_id : document.getElementById("Email").value,
        phone_no : document.getElementById("Phone").value,
        dates : document.getElementById("date").value,
        times : document.getElementById("time").value,
     }

    localStorage.setItem('user_details',JSON.stringify(myobj));
 
    
}