import React from "react"

export default function Carousel(props) {
    if(props.carousel){
        return(
            <div id="carouselInterval" className="carousel slide text-center ms-4 me-4 mt-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000" onClick={() => {props.showNews(props.carousel[0].title)}}>
                        <div className="d-block w-100" style={{backgroundImage: `url(${props.nullImage(props.carousel[0])})`, backgroundSize:"cover", backgroundPosition:"center", color:"white"}}>
                            <div className="news-title">
                               <h1 className="m-0">{props.carousel[0].title}</h1> 
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000" onClick={() => {props.showNews(props.carousel[1].title)}}>
                        <div className="d-block w-100" style={{backgroundImage: `url(${props.carousel[1].img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
                            <div className="news-title">
                                <h1 className="m-0">{props.carousel[1].title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000" onClick={() => {props.showNews(props.carousel[2].title)}}>
                        <div className="d-block w-100" style={{backgroundImage: `url(${props.carousel[2].img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
                            <div className="news-title">
                                <h1 className="m-0">{props.carousel[2].title}</h1>
                            </div>
                            
                        </div>
    
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )

    }else {
        return ''
    }
}