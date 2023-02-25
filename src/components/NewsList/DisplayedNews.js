import React from "react";
import './News.css'

export default function DisplayedNews(props) {
    let news = props.news
    return(
        <div className="displayedNews col-center">
            <div className="row">
                <h1>{news.title}</h1>
                <img className="displayedImg mb-3" src={props.nullImage(news)} />
                <article>
                    <p>{news.content}</p>
                </article>
            </div>
        </div>
    )
}