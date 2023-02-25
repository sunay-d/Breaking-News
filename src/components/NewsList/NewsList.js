import React from "react";
import Card from './Card'
import './News.css'

export default function NewsList(props) {
    const newsArray = props.news.map(el => {
        return (
        <div key={el.title} className="col-md-4" data-id={el.title} onClick={() => {props.showNews(el.title)}}>
            <Card news={el} nullImage={props.nullImage}/>
        </div> 
        )
    })
    return(
        <div className="news-list row row-cols-1 row-cols-md-3 g-4">
            {newsArray}
        </div>
    )
}