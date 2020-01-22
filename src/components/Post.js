import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        let mappedPosts = this.props.posts.map((element, index, arr) => {
            // console.log(element);
            console.log(arr)
            return(
              <div key={element+index}>
                  <img style={{height: '25vh'}} src={element.image}  alt="supposedBeImage"/>
                  <h1>{element.text}</h1>
              </div>
            )
          })
        return (
            <div>
                {mappedPosts}
            </div>
        )
    }
}
