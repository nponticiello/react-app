import React, { Component} from "react";
import axios from 'axios';


class Get extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sources:[]
        }
    }

    componentDidMount() {
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=bdfe8eb6e55a4835994b10fae715e431')
            .then(response=>{
                console.log(response)
                this.setState({sources:response.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        const{sources} = this.state
        return(
            <div>

                {
                        sources.map(post => <div key={sources.id}>{sources.name}</div>)


                }

            </div>
        )
    }
}
export default Get