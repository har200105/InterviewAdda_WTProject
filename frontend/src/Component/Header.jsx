import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const logout=()=>{
        localStorage.removeItem("jwt");
        window.location.reload();
    }
    return (
        <>
        <Link to="/">
            <h1 class="heading">Interview Adda</h1>
        </Link>     
            <nav class="navMenu">
                <Link to="/">Home</Link>
                <Link to="/opportunities">Opportunities</Link>
                <Link to="/interviewexp">Experiences Corner</Link>
                <Link to="/addaQues">Add a Question</Link>
             {
             localStorage.getItem("jwt") === null ? 
               <Link to="/Login">Login</Link> : <a onClick={logout} className="logout">
                   Logout
               </a>
             }
                {/* <Link to="/addaQues">Logout</Link> */}
            </nav>
        </>
    )
}

export default Header

