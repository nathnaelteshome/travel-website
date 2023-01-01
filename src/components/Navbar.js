import React,{ useState,useEffect }from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    //function
    const handleClick = () => setClick(!click);
    const closeMobileMevnu = () =>setClick(false)
    const showButton = () =>{
        if (window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true);
        }
    }


    useEffect(()=>{
        showButton()
    },[])
    
    window.addEventListener('resize',showButton);


  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMevnu}>
                NATE-TRVL
                <i class='fas fa-plane' />
            </Link>  
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' :'nav-menu'}>
                <li className="nav-item">
                    <Link to ='/' className='nav-links' onClick={closeMobileMevnu} >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/services' className='nav-links' onClick={closeMobileMevnu} >
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/products' className='nav-links' onClick={closeMobileMevnu} >
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMevnu} >
                        Sign Up
                    </Link>
                </li>
            </ul> 
            <div className="howdy">

            {button  && <Button  buttonStyle='btn--outline' >SIGN UP</Button>}     
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar