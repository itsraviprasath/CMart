import React from 'react'
import '../assets/css/components/TopNav.scss'


const TopNav = () => {
    return (
        <>
            <div className="topnav">
                <div className="info-nav">
                    <div className="content">
                        <div className="location">
                            <span className="material-symbols-outlined icon">
                                location_on
                            </span>
                            <span className='text'>121 King Street, Melbourne</span>
                        </div>
                        <div className="mail">
                            <span className="material-symbols-outlined icon">
                                mail
                            </span>
                            <span className='text'>info.123@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div className="btn">
                    <div className="buttons">
                        <button className='login'>Login</button>
                        <button className='register'>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav