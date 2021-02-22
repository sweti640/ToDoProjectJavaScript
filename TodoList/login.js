function AddUser(){
	
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var gender=document.getElementById("gen").value;
	var bday=document.getElementById("d").value;
	var email=document.getElementById("ename").value;
	var pass=document.getElementById("pass").value;
	var cpass=document.getElementById("compass").value;

	if(pass==cpass)
		{
			// var d=new Date()
	  //       var curnnentDate=d.getFullYear()
	  //       alert(curnnentDate+"yayaya current year");
	        
	        // alert(bday.getFullYear()+"yayaya birthday year")

			alert("You successfully signup.....")
			
	var arr=JSON.parse(localStorage.getItem("studList"));
	
	if (arr==null) 
	{
		arr=[]
	}
	
	
	var obj ={fm:fname,ln:lname,gender:gender,bd:bday,e:email,p:pass,status:"activate"};
	arr.push(obj);

     localStorage.setItem("studList",JSON.stringify(arr))
 }

else
{
	alert("password do not match... please check your both password and then try again!!!!");
	return false;
}
}

	// var d=new Date()
	// var curnnentDate=d.getFullYear()
	// //alert(curnnentDate );

	// var newdate=bday.getFullYear()
	// alert(newdate);
	// var d=new Date()
	// var curnnentDate=d.getFullYear()
	// //alert(curnnentDate );

	// var newdate=bday.getFullYear()
	// alert(newdate);
	
		// if(fname.length==0)
		// {
		// 	alert("please enter your name");
		// 	alert("false")
		// 	return false
		// }
		

	

