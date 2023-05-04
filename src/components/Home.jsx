import './Home.css'
import React from 'react';
import { Link } from "react-router-dom";
import bmo from '../images/bmo.png';
import paint from "../images/paint.png";
import book from "../images/book.png";
import slider from "../images/bg.png"

export default function Home(){



    return(
        <main>
            <div className="container">
                <div className="waveBox">
                    <img src={slider} alt=""/>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/art">Art</Link></li>
                        <li><Link to="/book">Summmary</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <img id="logo" src="https://img.icons8.com/ios-filled/100/null/artificial-intelligence.png" alt=""/>
                </nav>

                <div className="main-content">

                    <div className="image-pista">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src={bmo} alt=""/></div>
                                <div className="swiper-slide"><img src={paint} alt=""/></div>
                                <div className="swiper-slide"><img src={book} alt=""/></div>
                            </div> 
                        </div>
                    </div>
                    <div className="main-text">
                        <h1>AI HUB</h1>
                        <p>The convergence of various artificial intelligence models & capabilities.</p>
                        <Link to="/about"><button>Know More</button></Link>
                    </div>
                </div>

                <div className="right">
                    <div className="box">
                        <Link to="/chat">
                            <div className="image">
                                <img src={bmo} alt=""/>
                            </div>
                        </Link>
                        <div className="inner-box">
                            <h3>Chat</h3>
                            <p>Have a conversation.</p>
                        </div>
                    </div>
                    <div className="box">
                        <Link to="/art">
                            <div className="image">
                                <img src={paint} alt=""/>
                            </div>
                        </Link>
                        <div className="inner-box">
                            <h3>Art</h3>
                            <p>Generate art.</p>
                        </div>
                    </div>
                    <div className="box">
                        <Link to="/book">
                            <div className="image">
                                <img src={book} alt=""/>
                            </div>
                        </Link>
                        <div className="inner-box">
                            <h3>Summmary</h3>
                            <p>Scale down large information</p>
                        </div>
                    </div>
                </div>

                <div className="social-links">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="far fa-envelope"></i>
                </div>
            </div>
        </main>
    )
}