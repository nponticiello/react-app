import React, {Component, useEffect, useState} from "react";

const NewsItem = ({title,description,url}) => {
    return(
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <div>{url}</div>

        </div>
    )
}

export default NewsItem;