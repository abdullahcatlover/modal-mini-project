import { useState } from 'react'
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa'
import {ImYoutube } from 'react-icons/im'

import './tabs.scss'

const Tabs = () => {


    const [tabIndex, setTabIndex] = useState(1);


    const handleShowTab = (index) => {
        setTabIndex(index);
    }

    return (
        <section className='tabs-section --flex-center'>
            {/* --------------------------------------------container start----------------------------------- */}
            <div className="container">
                {/* ------------------------------heading statrt --------------------------*/}
                <div className="tabs-heading --text-center">
                    <h2 className='--line'>More About Us</h2>
                    <p className='--text-sm'>Click the a tab to kearn more</p>
                </div>
                {/* ------------------------------heading end --------------------------*/}


                {/*  -------------------------------tabs start------------------------------------ */}
                <div className='tabs --flex-start --bg-light'>
                    <div className="tabs-title ">
                        <button className={tabIndex === 1 ? 'tab active-tab' : 'tab'}
                            onClick={() => handleShowTab(1)}
                        >Who We Are</button>
                        <button className={tabIndex === 2 ? 'tab active-tab' : 'tab'}
                            onClick={() => handleShowTab(2)}
                        >What we do</button>
                        <button className={tabIndex === 3 ? 'tab active-tab' : 'tab'}
                            onClick={() => handleShowTab(3)}>Get In Touch</button>
                    </div>


                    {/* ----------------------------------tab content start--------------------------------- */}
                    <div className="tabs-content">
                        <article className={tabIndex === 1 ? 'content active-content' : 'content'}>
                            <h4>Who Am I...</h4>
                            <p>I am Abdullah, front-end software developer, ethical hacker,
                            </p>
                        </article>
                        <article className={tabIndex === 2 ? 'content active-content' : 'content'}>
                            <h4>What I Do...</h4>
                            <p> I build of of the outsdanding projects related to web-development, the most beautiful ones,
                                and I test the security of web-sites, things like finding leaking information,
                                finding valnurabilities and so on.
                            </p>
                        </article>
                        <article className={tabIndex === 3 ? 'content active-content' : 'content'}>
                            <h4>Get In Touch...</h4>
                            <p>I am available in social media platforms like facebook, instagram and telegram

                            </p>
                            <div className="media">
                                <i className='media__icons  youtube'><ImYoutube/></i>
                                <i className='media__icons facebook'><BsFacebook /></i>
                                <i className='media__icons instagram'><FaInstagramSquare /></i>
                                <i className='media__icons telegram'><BsTelegram /></i>
                            </div>
                        </article>
                    </div>
                    {/* ----------------------------------tab content end--------------------------------- */}
                </div>
                {/*  ----------------------------------------------------tabs end----------------------------------- */}
            </div>
            {/* --------------------------------------------container end----------------------------------- */}
        </section>
    )
}

export default Tabs