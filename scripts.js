var signupArr =[];
var loginArr =[];

function signUpValidation(){
var fname = document.getElementById("n1").value;
var lname = document.getElementById("n2").value;
var signmobNum = document.getElementById("m1").value;
var signupPwd = document.getElementById("p1").value;
var birthField = document.getElementById("DOB_field").value;

//code for paassword validation

    if(fname == null && fname == ""){
        alert("Name field can't be blank");
        return false;
    }
    if(lname == null && lname == ""){
        alert("Name field can't be blank");
        return false;
    }
        if(signmobNum == null && signmobNum == ""){
        alert("Enter valid mobile number");
        return false;
    }
        if(signupPwd.length<6){
        alert("Password must be atleaset 6 char long");
        return false;
    }
        if(birthField == null && birthField ==""){
        alert("Select your Birth DOB");
        return false;
    }
        else if(document.getElementById('Male').checked == false && document.getElementById('Female').checked == false 
        && document.getElementById('Custom').checked == false ) { 
        alert("Please select your gender");
        return false;
    } 
        var radio = document.querySelector('input[name=sex]:checked').value;
        signupArr.push(fname,lname,signmobNum,signupPwd,birthField,radio);//signup array
        //document.write(arr);
        console.log(signupArr);
        console.log("signupNum: "+signupArr[2])
        console.log("suppwd: " +signupArr[3])
     }
      
        //loginFn
        function login(){
        var logMobNum = document.getElementById("l1").value; 
        var logMobPwd = document.getElementById("l2").value;
        loginArr.push(logMobNum,logMobPwd);  //login array
        console.log('logMobNum='+ loginArr[0]+ 'logMobPwd' + loginArr[1]);

        if(loginArr[0] === signupArr[2] && loginArr[1] === signupArr[3]){
          alert("successfully login");//yes
        }
        if(loginArr[0] != signupArr[2]){
          alert("please register!!") //yes
        }
        if(loginArr[1] != signupArr[3]){
            alert("password is incorrect");//yes
        }
}

