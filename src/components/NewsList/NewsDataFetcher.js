import React, { useEffect } from "react"
import Carousel from "./Carousel"
import NewsList from "./NewsList"
import DisplayedNews from "./DisplayedNews"

export default function DataFetcher(props) {
    const category = props.data.category
    const news = props.data.news
    const setNews = props.data.setNews
    const displayedNews = props.data.displayedNews
    const setDisplayedNews = props.data.setDisplayedNews

    function nullImage(news) {
        return news.image_url ? news.image_url : `img/${news.category[0]}.jpg`
    }

    useEffect(() => {
        setNews(null)
        if(category){
            fetch(`https://newsdata.io/api/1/news?apikey=pub_17730ca3d4ce9b34aae95955e263a0b6aa45d&language=en&country=us&category=${category}`)
                .then(data => data.json())
                .then(newsData => {setNews(newsData)})
        }else {
            fetch("https://newsdata.io/api/1/news?apikey=pub_17730ca3d4ce9b34aae95955e263a0b6aa45d&language=en&country=us")
                .then(data => data.json())
                .then(newsData => {setNews(newsData)})
        }
    },[category])

    function showNews(title) {
        window.scrollTo(0,0)
        let theNews = news.results.find(element => element.title === title)
        setDisplayedNews(theNews)
    }

    console.log(news)

    return(
        <>
        {
            news 
            ? 
            <div>
                {displayedNews ? <DisplayedNews news={displayedNews} nullImage={nullImage} /> : <Carousel carousel={news.results} nullImage={nullImage} showNews={showNews}/>}
                <NewsList news={news.results} nullImage={nullImage} showNews={showNews}/>
            </div>
            :
            <div className="bg-light loading-page">
                <h1 className="text-center loading-title">Breaking News</h1> 
                <h2 className="text-center">Loading...</h2>
            </div>
        }
        </>
    )
}