import React from "react";
import "./Sign_in.css";

const Sign_in =()=>{
    return(
        <div>

<br></br>

<br></br>
<br></br>
	 <div id="fgf">
     <div class=" box">
	    <span class="boderLine"></span>
	     <form name="aa" action="" onsubmit="return verification(), match()">
		     <h2>sign in</h2>
			 <div class="inputBox">
				 <input type="text"  required="required"/>
				 <span>username</span>
				 <i></i>
			 </div>
			 
			 <div class="inputBox">
				 <input type="text" name="email" required="required"/>
				 <span>email</span>
				 <i></i>
			 </div>
			 <div class="inputBox">
				 <input type="password" name="password"  required="required"/>
				 <span>password</span>
				 <i></i>
			 </div>
			 <div class="inputBox">
				 <input type="password" name="password2"  required="required"/>
				 <span>confirmpassword</span>
				 <i></i>
			 </div>
	        <input type="submit" value="login"/>
			<input type="reset" value="reset"/>
			
         </form>	 	 
	 
         </div>
         </div>




    </div>) }
    export default Sign_in;