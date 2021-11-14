import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
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
                <Link to="/addaQues">Login</Link>
                <Link to="/addaQues">Logout</Link>
            </nav>
        </>
    )
}

export default Header

