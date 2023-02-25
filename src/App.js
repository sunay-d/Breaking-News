import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import NewsDataFetcher from './components/NewsList/NewsDataFetcher';
import Footer from './components/Footer/Footer.js';

function App() {
    const [category, setCategory] = React.useState('')
    const [news, setNews] = React.useState(null)
    const [displayedNews, setDisplayedNews] = React.useState(null)
    const dataFetcherProps = {
        category: category,
        news: news,
        displayedNews: displayedNews,
        setNews: setNews,
        setDisplayedNews: setDisplayedNews
    }
    return(
        <div className="app bg-#f8f9fa">
            <Navbar setCategory={setCategory} setDisplayedNews={setDisplayedNews}/>
            <NewsDataFetcher data={dataFetcherProps}/>
            <Footer /> 
        </div>
    )
}

export default App;
