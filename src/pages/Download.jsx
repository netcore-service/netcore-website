import React from "react";
import "./Download.css";
//Use Language Components
//import { useLanguage } from "../contexts/LanguageContext.jsx";
//Import Components
import Navbar from "../components/Navbar.jsx";
//import Footer from "../components/Footer.jsx";
//Import Assets Images
import cyplotechlogo from "../assets/downloadpages/cyplotechlogo.png";

function Download(){
    //const { t } = useLanguage();

    return(
        <div className="download-container">
            <div className="download-top-nav">
                <Navbar />
            </div>   

            <div className="download-main-section">
                <div className="android-application">
                    <p>Android applications download</p>
                    <table className="cyplo-tech-download">                     
                        <tr>
                            <th>App Icons</th>
                            <th>Application Name</th>
                            <th>Download Links</th>
                        </tr>
                        <tr>
                            <td>
                                <img src={cyplotechlogo} alt="Cyplo-Tech Application Icon" />
                            </td>
                            <td className="app-name-txt">Cyplo-Tech (Pro/Agent)</td>
                            <td>
                                <a href="">Download</a>
                            </td>
                        </tr>
                    </table>
                </div>
                {/*
                <div className="desktop-application">
                    <p>Desktop applications download</p>
                </div>
                */}

            </div>

            <div className="contact-footer">
                {/*<Footer />*/}
            </div>
        </div>
    )
}

export default Download;