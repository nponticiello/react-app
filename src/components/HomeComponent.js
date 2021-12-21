import React from 'react'
import HeaderComponent from "./HeaderComponent";
import {Link} from "react-router-dom";
import NewsList from "./NewsComponent";


function Home(){
    return(
        <React.Fragment>
            <div className="header"><HeaderComponent/></div>
            <div className="main"><ul>
                <li>
                    <div className='Blog Post'>
                        <Link to='/blog'><h1>New Grads & Challenges They Will Face<img src='https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?cs=srgb&dl=pexels-j%C3%A9shoots-238118.jpg&fm=jpg' className='photoList'/></h1></Link>
                        <ul>
                                <li><div className='Date Published'> Published on 08/12/20 </div></li>

                    <li><p>A small blog about the hiring problems of 2021 and the influx of new grads in the industry.</p></li>

                        </ul>

                    </div>
                </li>
                <li>
                    <div className='Blog Post'>
                        <Link to='/blog2'><h1>How to deal with the cold?<img src='https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='photoList'/></h1></Link>
                        <ul>
                       <li><div className='Date Published'>Published 11/26/2021</div></li>
                          <li><p>All things on what to do about the cold.</p></li>

                        </ul>
                    </div>
                </li>
                <li>
                    <div className='Blog Post'>
                        <Link to='/blog3'><h1>Why NFT's are not it <img src='https://media.npr.org/assets/img/2021/03/05/nyancat-still-6cda3c8e01b3b5db14f6db31ce262161985fb564-s1600-c85.webp' className='photoList'/></h1></Link>
                        <ul>
                          <li> <div className='Date Published'>Published 09/05/2020 </div></li>
                           <li> <p>Why NFT's are really over hyped in today's market</p></li>
                        </ul>
                    </div>
                </li>
            </ul></div>
            <div className="navigation">
               <NewsList/>
            </div>
            <div className="footer">Noah Ponticiello CS612</div>


</React.Fragment>
    )
}
export default Home;