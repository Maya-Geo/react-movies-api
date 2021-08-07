import React, { Component } from 'react';

class Movies extends Component {
    constructor(props){
        super(props)
        this.setState()
    }

    
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=20&order=by-publication-date&api-key=Gc1HkCZtBBuqD8oDLAoe5UaOqhW5fXoz")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            
            this.setState(data);
            console.dir("message", this.state.results);
        })
        .catch()
    }    
    
    render() {
        return( this.state &&
            this.state.results.map((review, idx )=>{
                return(
                    <div className="list" key={idx} style={{fontFamily: "fantasy", textAlign:"center"}}>
                        <div className="mutiples">
                            <img src={review.multimedia.src} alt="my_movies" />                        
                        </div>
                        <div className="new-york">
                            <h3>{review.display_title}</h3>
                            <hr/>
                            
                            <p>{review.headline}</p>
                            <p><span>Critics Pick:</span>{review.critics_pick}</p>
                            <p><span>Byline:</span>{review.byline}</p>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default Movies;
