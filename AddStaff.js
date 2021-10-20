import React, { useState }  from 'react'

export const AddStaff= ()=> {

    var [name,setName]=useState()
    var[contact,setContact]=useState()
    var [email,setEmail]=useState()
    var [address,setAddress]=useState()

    const nameUpdate=(event)=>{ 
      setName(event.target.value)
  }

  const emailUpdate=(event)=>{ 
      setEmail(event.target.value)
  }
  const contactUpdate=(event)=>{ 
      setContact(event.target.value)
  }
  const addressUpdate=(event)=>{ 
    setAddress(event.target.value)
}
    const handleSubmit=()=> { 
        if ( !name ) {
      alert("please enter name");
      return false;
  }
  if (!email) 
			{
		         alert("please enter Email");
		         return false;
		     }
		 else
		 {
			var str1,p;
			str1=email;
			p=str1.indexOf('@');
			if(p<0)
			{
				alert("Please enter Valid Email");
				return false;
			}
		 }
     if (!contact) {
            alert("please enter Contact");
            return false;
        }

      var strContact;
      strContact=contact;
        
      if(strContact.length!==10)
      {
      alert("Contact must has length of 10 digit");
            return false;
      }
      if (!address) {
        alert("please enter Address");
        return false;
    }
        //const postURL = "http://dry-bayou-99944.herokuapp.com/profiles/" 
        const postURL = "http://dry-bayou-99944.herokuapp.com/profiles/" 
        fetch(postURL, {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": '*',
                
            },
            body: JSON.stringify({ 
                name: name,
                email:email,
                contact:contact,
                address:address
  

            })
        })
        .then(response => response.json())
    }

  

    return (
        <div>
            <div className="mainbox">

                <div className="formbox">

                    <form onSubmit={handleSubmit}>
                    
                        <div className="form_input">
                        
                            <b>Name : </b><input type="text"  onChange={nameUpdate} /><br/><br/><br/><br/><br/>
                            <b>Email : </b><input type="text"  onChange={emailUpdate}/><br/><br/><br/><br/><br/>
                            <b>Contact : </b><input type="text"  onChange={contactUpdate}/><br/><br/><br/><br/><br/>
                            <b>Address : </b><input type="text" onChange={addressUpdate}/><br/><br/><br/><br/><br/>
                            <input type="submit" value="sumbit" />

                        

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
    
}

export default AddStaff