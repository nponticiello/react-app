import React, {Component, useEffect, useState} from "react";
import axios from 'axios';
import NewsItem from "./NewsItem";


    const NewsList = () => {
        const [articles, setArticles] = useState([]);
        useEffect(() => {
            const getArticles = async () => {
                const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=bdfe8eb6e55a4835994b10fae715e431", 50);
                setArticles(res.data.articles);
                console.log(res);

            };

            setInterval(()=>
                {
                    getArticles().then(res => console.log(res)).catch(err => console.error(err));
                }, 5000
            )


        }, []);




        return <div>{articles.map(({title, description,url}) => (
            <NewsItem title={title} description={description} url={url}/>
        ))}
        </div>
    };




    export default NewsList;
