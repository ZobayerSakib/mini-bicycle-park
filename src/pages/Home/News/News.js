import React, { useEffect, useState } from 'react';
import '../News/News.css'
const News = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://shrouded-basin-86219.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-5 newsInfo'>
                <h2>News</h2>
                <h1>Latest News Post</h1>
                <p>A bicycle, also called a bike or cycle, is a human-powered or motor-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist. </p>

                <div >
                    <div className='newsDiv'>
                        {
                            news.map(info => <div
                                key={info._id}
                            >
                                <img src={info.img} alt="" />
                                <h4>{info.name}</h4>
                                <p>{info.date} {info.comment}</p>

                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;