import React from 'react';
import logo from "../assets/images/Union.png"
import {Link} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

const Navbar : React.FC = ()=>{
    return (
        
            <div className="flex justify-between items-center ml-10">
             <div className="flex gap-2 justify-center items-center">
                <img src={logo} alt="logo"/>
                <span>MetaBlog</span>
             </div>
             <nav className="flex justify-around gap-6">
                
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/singlepost">Single Post</Link>
                    <Link to="/pages">Pages</Link>
                    <Link to="/contact">Contact</Link>   
                
             </nav>
             <div className="relative rounded-sm border border-black m-20">
                <input type='text' placeholder='search' className='p-2'/>
                <FaSearch className='absolute right-5 top-3.5'/> 
                

             </div>

            </div>
        
    )

}

export default Navbar;