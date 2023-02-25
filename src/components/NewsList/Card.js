import React from "react";
import './News.css'

export default function Card(props) {
    const news = props.news
    function sliceText(text) {
        if(text) {
            if (text.length > 300) {
                for (let i=300; i<400; i++){
                    if(text[i] === " ") {
                        return text.slice(0,i) + "..."
                    }
                }
            }
            return text
        }
        return ''
    }
    return(
        <div className="card-container col h-100 p-3">
            <div className="card h-100">
                <img src={props.nullImage(news)} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{sliceText(news.description)}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Read more...</small>
                </div>
            </div>
        </div>
  
    )
}