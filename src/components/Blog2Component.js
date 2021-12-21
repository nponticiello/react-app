import React from 'react'
import {Link} from "react-router-dom";


function Blog2(){
    return(
        <React.Fragment>
            <div className='header'>How to deal with the Cold?</div>
            <p className="main">As many people like myself am not someone who enjoys the cold. I think the best way to handle
                most frigid adventures is hands and boat warmers, these are a life saver. Another good investment is a
                'Swell' bottle. They have the capacity to keep things extremely cold or extremely hot depending on what your
                intentions are.


            </p>

            <div className='navigation'> <ul>
                <li><img src='https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='photoBlog'/></li>
                <li><Link to='/home'>Click Here for home</Link></li>
            </ul>
            </div>



    <div className="footer">Noah Ponticiello CS612</div>
        </React.Fragment>
    )
}
export default Blog2;