import { ethers } from 'ethers';

import logo from '../assets/logo.svg';



const Navigation = ({ account, setAccount }) => {

    const connectHandler = async () => {

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const account = ethers.utils.getAddress(accounts[0])

        setAccount(account);

    }



    const loginHandler = () => {

        // Replace with your actual login website URL

        window.location.href = 'https://your-login-website.com/login';

    }



    return (

        <nav>

            <ul className='nav__links'>

                <li><a className="left-button" href="#">Home </a></li>

                <li><a className="left-button" href="#">About </a></li>

                <li><a className="left-button" href="#">Contact Us </a></li>

            </ul>



            <div className='nav__brand'>

                <img src={logo} alt="Logo" />

                <h1>SmartEstate</h1>

            </div>



            <div className="nav__buttons">

            {account ? (

                <button

                    type="button"

                    className='nav__connect'

                >

                    {account.slice(0, 6) + '...' + account.slice(38, 42)}

                </button>

            ) : (

                <button

                    type="button"

                    className='nav__connect'

                    onClick={connectHandler}

                >

                    Connect

                </button>

                )}



                <button

                    type="button"

                    className='nav_login'

                    

                >

                    Login

                </button>

            </div>

        </nav>

    );

}



export default Navigation;