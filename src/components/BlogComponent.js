import React from 'react'
import {Link} from "react-router-dom";

function Blog(){
    return(
        <React.Fragment>
        <div className='header'>New Grads & Challenges They Will Face</div>
            <p className="main">New students graduating undergrad or grad schools are facing more competition. Due to covid there are
            significantly more applicants then there were before. Currently, 2022 grads are competing against the 2021,2020,2019 as
            well as others who got laid off. These mass amounts of students has caused companies to become extremely picky with
            who they are going to allow into their own company. They do this by making coding challenges even more challenging than before
            </p>
            <div className='navigation'> <ul>
                <li><img src='https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?cs=srgb&dl=pexels-j%C3%A9shoots-238118.jpg&fm=jpg' className='photoBlog'/></li>
                <li><Link to='/home'>Click Here for home</Link></li>
            </ul>
            </div>


            <div className="footer">Noah Ponticiello CS612</div>
        </React.Fragment>
    )
}
export default Blog;