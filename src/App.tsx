import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import './App.css';
import PhpProjects from "./PhpProjects";
import JavaProjects from "./JavaProjects";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScrollToTop from "./ScrollToTop";

function App() {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible((prevIsContentVisible) => !prevIsContentVisible)
    }

    return (
        <Router basename="/">
            <div className="App">
                <header className="App-header">
                    <h1 className="App-header-name underlineColor">Liviu G. Andrei</h1>
                    <h3 className="App-header-jobTitle underlineTextColor">Software Engineer</h3>

                    <div className="App-introduction">
                        <button onClick={toggleContent} className="button">
                            {isContentVisible ? 'SHOW INTRODUCTION' : 'HIDE INTRODUCTION'}
                        </button>

                        {!isContentVisible && (
                            <article className="App-header-introduction">
                                <div className="App-header-introduction-box box-size">
                                    <p>Hello, my name is Liviu, and I work as a full stack software engineer.</p>
                                    <p>
                                        I began my professional career in January 2022, specializing in PHP as my
                                        primary
                                        programming language at an ecommerce
                                        logistics company.
                                    </p>

                                    <p>
                                        Prior to 2022, I worked as a freelancer for approximately 2-3 years,
                                        assisting friends and working on personal projects.
                                    </p>

                                    <p>
                                        Throughout my programming journey, I have gained experience in various
                                        programming
                                        languages
                                        such as PHP (specifically Laravel),
                                        JavaScript (React/Vue), C# (for small games in Unity), C++ (for small games in
                                        Unreal
                                        Engine),
                                        Python, and Java.
                                    </p>

                                    <p>
                                        However, if I were to choose the programming languages I use the most
                                        frequently, they would be PHP and Java.
                                    </p>
                                </div>
                                <div className="App-header-introduction-box">
                                    <h4 className="underlineColor3">Languages I know best:</h4>
                                    <ul>
                                        <li>PHP (+Laravel)</li>
                                        <li>Java (+Spring Boot)</li>
                                        <li>HTML/CSS (+Bootstrap, +MaterialUI, +SCSS)</li>
                                        <li>JavaScript (+React, +Vue)</li>
                                        <li>SQL (mainly MySQL)</li>
                                    </ul>
                                    <h4 className="underlineColor3">Languages I dabbled with:</h4>
                                    <ul>
                                        <li>C++ (small console apps & Unreal Engine)</li>
                                        <li>C# (writing simple scripts for Unity games)</li>
                                    </ul>
                                </div>
                            </article>
                        )}
                    </div>
                </header>

                <nav className="App-navigation">
                    <NavLink to="/" className="button buttonTab">
                        PHP PROJECTS
                    </NavLink>
                    <NavLink to="/java-projects" className="button buttonTab">
                        JAVA PROJECTS
                    </NavLink>
                </nav>

                <div className="divider-footer underlineColor"></div>

                <Routes>
                    <Route path="/" element={<PhpProjects/>}/>
                    <Route path="/java-projects" element={<JavaProjects/>}/>
                </Routes>

                <div className="divider-footer underlineColor"></div>

                <footer className="footer">
                    <ul className="footer-list">
                        <li>
                            <a href="mailto:liviuandrei.dev@gmail.com" className="footer-list-l">
                                <EmailIcon />
                                <span>liviuandrei.dev@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/OblivionLi" target="_blank" rel="noreferrer"  className="footer-list-l">
                                <GitHubIcon />
                                <span>OblivionLi</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/liviugandrei/" target="_blank" rel="noreferrer"  className="footer-list-l">
                                <LinkedInIcon />
                                <span>liviugandrei</span>
                            </a>
                        </li>
                    </ul>
                </footer>

                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
