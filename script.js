document.getElementById("regForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let event=document.getElementById("event").value;

    document.getElementById("msg").innerHTML =
    `Successfully Registered!<br>
    Name: ${name}<br>
    Email: ${email}<br>
    Event: ${event}`;
});