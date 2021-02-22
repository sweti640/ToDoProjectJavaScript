function Addtask()
{
	var taskname=document.getElementById("name").value;
	var dec=document.getElementById("desc").value;
	
	var arr=JSON.parse(localStorage.getItem("taskList"));
	
	if (arr==null) 
	{
		arr=[]
	}
	
	var temp=localStorage.getItem("currentUser");
	var obj ={tm:taskname,td:dec,status:"pending",email:temp};
	arr.push(obj);

localStorage.setItem("taskList",JSON.stringify(arr))
}

function showtask()
{
	alert("Welcome");

	var arr=JSON.parse(localStorage.getItem("taskList"));
	var temp=localStorage.getItem("currentUser");

      var html=` <div class="container">
  							<h2>showing your tast</h2> 
  							<table class="table table-bordered" >
   					 <thead>
      				<tr>
        					<th>Task_Name</th>
        					<th>Description</th>
        					<th>Statu</th>
        					<th>    </th>
        					<th>    </th>
        					<th>    </th>
      				</tr>
      				</thead>
      				<tbody>`;
	for(let i=0;i<arr.length;i++)
	{
		if(arr[i].email==temp)
		{
			// alert("hello")
			// document.getElementById('userlist').innerHTML=" "
			
			

			
				var tname=arr[i].tm;
				var dec=arr[i].td;
				var statu=arr[i].status;

				

				
				
           
  					html = html +`
      				
      					<tr>
					        <td><input type="text" class="form-control" id="task_detail${i}" size="90" disabled value=${tname}></td>
					        <td><input type="text" class="form-control" id="des_detail${i}" size="90"disabled value=${dec}></td>
					        <td><input type="text" class="form-control" id="statu_detail${i}" size="50" disabled value=${statu}></td>
					        <td><button class="btn btn-danger" onclick="Delete_user(${i})" id="delete${i}"> Delete  </button></td>
					        <td><button class="btn btn-warning" onclick="Edit_user(${i})" id="Edit${i}"> Edit  </button> </td>
					        <td><button class="btn btn-success" onclick="Update_user(${i})" id="Update${i}"> Update  </button></td>
						</tr>`
				   
		}

	}

	html = html + `</tbody>
				  </table>
				</div>`

		// document.getElementById('userlist').insertAdjacentHTML("beforeend",html);
		document.getElementById('userlist').innerHTML=html;

}
function Delete_user(i){
// console.log(i)

var arr=JSON.parse(localStorage.getItem("taskList"))
arr.splice(i,1);
localStorage.setItem("taskList",JSON.stringify(arr));
showtask();
}

function Edit_user(i){
	document.getElementById(`task_detail${i}`).removeAttribute("disabled")
	document.getElementById(`des_detail${i}`).removeAttribute("disabled")
	document.getElementById(`statu_detail${i}`).removeAttribute("disabled")

}



function Update_user(i){
var arr=JSON.parse(localStorage.getItem("taskList"))

var name =document.getElementById(`task_detail${i}`).value
var tdec=document.getElementById(`des_detail${i}`).value
var statu=document.getElementById(`statu_detail${i}`).value

var obj={tm:name,td:tdec,status:statu}
arr[i]=obj;

localStorage.setItem("taskList",JSON.stringify(arr));
	document.getElementById(`task_detail${i}`).setAttribute("disabled","disabled")
	document.getElementById(`des_detail${i}`).setAttribute("disabled","disabled")
	document.getElementById(`statu_detail${i}`).setAttribute("disabled","disabled")

}




function DisplaySignOut()
{
	if(confirm("You want to signOut?"))
	{
		localStorage.removeItem("currentUser");
		document.getElementById("foo").href="signup.html";
	}
	
	
	
}
	
	
	
	
		

	
