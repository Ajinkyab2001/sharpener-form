function myfunc(event){
    event.preventDefault();
     var myobj = {
        full_name : document.getElementById("Name").value,
        email_id : document.getElementById("Email").value,
        phone_no : document.getElementById("Phone").value,
        dates : document.getElementById("date").value,
        times : document.getElementById("time").value,
     }

   
     let user_records = [];
   
     user_records.push({
        "user_details": myobj,
     
      })

      showUserOnScreen(myobj)
     localStorage.setItem(myobj.email_id ,JSON.stringify(user_records));

}


function showUserOnScreen(myobj){
    const parentItem = document.getElementById('ddd');
    const childItem = document.createElement('div');
    childItem.textContent = myobj.full_name +' '+myobj.email_id+' ';
    parentItem.appendChild(childItem);
}

