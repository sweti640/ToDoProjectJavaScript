function showUser()
{
	
	alert("Welcome Admin..");
	document.getElementById('userlist').innerHTML=""
	var arr=JSON.parse(localStorage.getItem("studList"));
	console.log(arr)
	
	var html=`<div class="container">
  							<h2>showing your tast</h2> 
  							<table class="table table-bordered" >
   					 <thead>
      				<tr>
        					<th>First_name</th>
        					<th>Last_name</th>
        					<th>Gender</th>
        					<th>Birthdate</th>
        					<th>Email</th>
        					<th>password</th>
        					<th>Statu</th>
                  <th>Action</th>
      				</tr>
      				</thead>
      				<tbody>`;
        for(let i=0;i<arr.length;i++){

        var f_name=arr[i].fm;
        // alert(f_name);
        var l_name=arr[i].ln;
        // alert(l_name);
        var gen=arr[i].gender;
        var birth=arr[i].bd;
        var mail=arr[i].e;
        var pass=arr[i].p;
        var statu=arr[i].status;

       			html = html +`	<tr>
       						
                  <td><input type="text" class="form-control" id="first_name${i}" disabled value=${f_name}></td>
                  <td><input type="text" class="form-control" id="last_name${i}" disabled value=${l_name}></td>
                  <td><input type="text" class="form-control" id="gennder${i}" disabled value=${gen}></td>
       						<td><input type="text" class="form-control" id="birth_detail${i} " size="50" disabled value=${birth}></td>
                  <td><input type="text" class="form-control" id="email_mail_detail${i}" size="120" disabled value=${mail}></td>
                  <td><input type="text" class="form-control" id="pass_detail${i} " size="50" disabled value=${pass}></td>
                  <td><input type="text" class="form-control" id="statu_detail${i}"  size="50" disabled value=${statu}></td>
                  <td><button class="btn btn-warning" onclick="Change_status(${i})" id="change${i}"> Change_Status  </button> </td>
                 
					        
						</tr>`
          }
 				html = html +	`</tbody>
      				
				  </table>
				</div>`
      			
      			 // document.getElementById('userlist').innerHTML=html;
      			document.getElementById('userlist').insertAdjacentHTML("beforeend",html);
    }


function DisplaySignOut()
{
  
  if(confirm("You want to signOut?"))
  {
    localStorage.removeItem("currentUser");
    alert("thank You for visiting....")
    document.getElementById("foo").href="signup.html";
  }
  
  
  
}
function Change_status(j)
{
  
  var arr=JSON.parse(localStorage.getItem("studList"));
  for(let i=0;i<arr.length;i++){
    alert("i m in change"+i);

       if(i==j)
       {
        var statu=arr[i].status
        if(statu=="activate")
        {
          arr[i].status="deactivate";
        }
        else
        {
          arr[i].status="activate"
        }
        localStorage.setItem("studList",JSON.stringify(arr));
         showUser();
       }
        
      }

}

