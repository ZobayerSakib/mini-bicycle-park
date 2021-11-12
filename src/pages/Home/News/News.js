import React, { useEffect, useState } from 'react';
import '../News/News.css'
const News = () => {
    // https://ibb.co/brsD3rL
    // https://ibb.co/PjQ3DhQ
    // https://ibb.co/PCLvnqQ
    // https://ibb.co/3rW8MjJ

    // const fake = [
    //     { img: 'https://i.ibb.co/FB5CWBJ/Depositphotos-126062514-l-2015-1.jpg', name: 'Modern and Outstanding style pettern ', date: '12 Nov,2021', comment: 'No Comments' },

    //     { img: 'https://i.ibb.co/c3LMYFL/allbikes-1539286251.jpg', name: 'Many Design and Colours ', date: '12 Nov,2021', comment: 'No Comments' },

    //     { img: 'https://i.ibb.co/12gt5F6/Fat-Tire-Bike-by-Ensey-Motorized-Bikes.jpg', name: 'Design will Qualify the mindset of Buyer ', date: '12 Nov,2021', comment: 'No Comments' },

    //     { img: 'https://i.ibb.co/1vKpdPS/maxresdefault.jpg', name: 'Users Can Be Older or Younger ', date: '12 Nov,2021', comment: 'No Comments' },
    // ]

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news')
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