import React from "react";

export default function Navbar(props) {
    const noDisplayed = () => props.setDisplayedNews(null)
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#" onClick={noDisplayed}>Breaking News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory(""); noDisplayed()}}>General</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("business"); noDisplayed()}}>Business</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("health"); noDisplayed()}}>Health</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("science"); noDisplayed()}}>Science</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("technology"); noDisplayed()}}>Technology</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("sports"); noDisplayed()}}>Sports</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active bg-transparent border-0" aria-current="page" onClick={() => {props.setCategory("entertainment"); noDisplayed()}}>Entertainment</button>
                        </li>
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success border-white text-white bg-dark" type="submit">Search</button>
                    </form>

                </div>
            </div>
        </nav>
    )
}