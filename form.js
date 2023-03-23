function myfunc(event){
    event.preventDefault();

    var full_name = document.getElementById("Name").value;
    var email_id = document.getElementById("Email").value;
    var phone_no = document.getElementById("Phone").value;
    var dates = document.getElementById("date").value;
    var times = document.getElementById("time").value;
 
    localStorage.setItem('is_full_name',full_name);
    localStorage.setItem('is_email_id',email_id);
    localStorage.setItem('is_phone_no',phone_no);
    localStorage.setItem('is_date',dates);
    localStorage.setItem('is_times',times);
    
}