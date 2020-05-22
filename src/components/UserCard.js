import React from 'react'
const UserCard =({user})=> {
 return <div className="card text-white bg-success mb-3">
     <div className="card-body">
         <img className="card-img-left" src={user.avatar_url}></img>
<h1 className="card-title text-center">{user.name}</h1>
<p>{user.compnay}</p>
<p>{user.bio}</p>
<p>{user.email}</p>

     </div>
 </div>
 
 
};

export default UserCard;