function LoginCheck(){

	// var e=admin@gmail.com
	// var p=123
	var email=document.getElementById("ename").value;
	
	var pass=document.getElementById("pass").value;

	var arr=JSON.parse(localStorage.getItem("studList"));
	
	var c=0;

	for(let i=0;i<arr.length;i++)
	{
		if(arr[i].e==email && arr[i].p==pass  )
		{		    
		   if(arr[i].status=="activate")
		   {
            alert("login Successfully.....");
			alert("Welcome To Create Your Task List....")
			localStorage.setItem("currentUser",email);
			document.getElementById("too").href="task.html";
			c=1;
             break;
		   }
		   else
		   {
		   	alert("you are deactivated by user...");
		   	c=1;
            break;
		   }	
			
		}		
		else if(email=="admin@gmail.com"  && pass=="admin")
		{            
			alert("admin ......");
			localStorage.setItem("currentUser",email);
			document.getElementById("too").href="admin.html";
			c=2;
			break;
		}		
	}
	if(c==0)
	{
         alert("username or password is incorrect......");         
	}	
}
// 	if(email==e && pass==p)
// 		{
// 			alert("in")
// 			var arr=JSON.parse(localStorage.getItem("studList"));

// 			var html=` <div class="container">
//   							<h2>showing your tast</h2> 
//   							<table class="table table-bordered" >
//    					 <thead>
//       				<tr>
//         					<th>Task_Name</th>
//         					<th>Description</th>
//         					<th>Statu</th>
//         					<th>    </th>
//         					<th>    </th>
//         					<th>    </th>
//       				</tr>
//       				</thead>
//       				<tbody>`;

//       				for(let i=0;i<arr.length;i++)
// 					{
// 						var fname=arr[i].fm;
// 						var lname=arr[i].lm;
// 						var gen=arr[i].gender;
// 						var bd=arr[i].bd;
// 						var e=arr[i].e;
// 						var p=arr[i].p;


// 						html = html +`
//       				<tr>
// 					        <td><input type="text" class="form-control" id="task_detail${i}" disabled value=${fname}></td>
// 					        <td><input type="text" class="form-control" id="des_detail${i}" disabled value=${lname}></td>
// 					        <td><input type="text" class="form-control" id="statu_detail${i}" disabled value=${gen}></td>
// 					        <td><input type="text" class="form-control" id="task_detail${i}" disabled value=${bd}></td>
// 					        <td><input type="text" class="form-control" id="task_detail${i}" disabled value=${e}></td>
// 					        <td><input type="text" class="form-control" id="task_detail${i}" disabled value=${p}></td>
					        
// 						</tr>`

// 					}
// 				html = html + `</tbody>
// 				  </table>
// 				</div>`

// 	document.getElementById('userlist').insertAdjacentHTML("beforeend",html);

// 		}

	
	
// }
	

