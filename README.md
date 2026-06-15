<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event Registration Portal</title>
<style>
body{
font-family:Arial;
background:#f4f4f4;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.box{
background:white;
padding:20px;
border-radius:10px;
width:300px;
box-shadow:0 0 10px gray;
}

input,button{
width:100%;
padding:10px;
margin-top:10px;
}

button{
background:blue;
color:white;
border:none;
}
</style>
</head>

<body>

<div class="box">
<h2>Event Registration</h2>

<input type="text" id="name" placeholder="Enter Name">

<input type="email" id="email" placeholder="Enter Email">

<button onclick="register()">Register</button>

<p id="msg"></p>
</div>

<script>
function register(){
let name=document.getElementById("name").value;

document.getElementById("msg").innerHTML=
"Successfully Registered: "+name;
}
</script>

</body>
</html>