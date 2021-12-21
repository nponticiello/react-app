import React from 'react'
import {Link} from "react-router-dom";

function Blog3(){
    return(
        <React.Fragment>
            <div className='header'>Why NFT's are not it</div>
            <p className="main">People who purchase NFT's believe they're going to go up just because of the hype. In reality,
                those pieces of 'art' are not worth at all. These pieces usually don't hold any value by the artist who did them or
                are not the most creative just monkeys with sunglasses. The only time an NFT should hold value is when the artist
                is actually someone reputable. This overinflation of NFT's is going to be a huge issue in the upcoming years.
            </p>


            <div className='navigation'> <ul>
                <li><img src='https://media.npr.org/assets/img/2021/03/05/nyancat-still-6cda3c8e01b3b5db14f6db31ce262161985fb564-s1600-c85.webp' className='photoBlog'/></li>
                <li><Link to='/home'>Click Here for home</Link></li>
            </ul>
            </div>

            <div className="footer">Noah Ponticiello CS612</div>

        </React.Fragment>
    )
}
export default Blog3;