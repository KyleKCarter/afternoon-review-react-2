import React from 'react';

import Post from './components/Post';
import NewPost from './components/NewPost'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          image: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/mandalorian-babyyoda-flying-700x325.jpg',
          text: "It's payday!"
        },
        {
          image: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/06/The-Office-Michael-Scott-Yelling.jpg',
          text: 'NOOOOOOOOOOOOOO'
        },
        {
          image: 'http://images.adagio.com/images2/custom_blends/90599.jpg',
          text: 'Me realizing that it is acutally the start of a new week'
        },
        {
          image: 'http://pop-culturalist.com/wp-content/uploads/2017/02/BarneyStinson-1024x579.jpg',
          text: 'me when I know tomorrow is Friday'
        }, 
    ],
    image: '',
    text: ''
    }

  }

  handleChangeImage = (e) => {
    this.setState({image: e.target.value})
  }

  handleChangeText = (e) => {
    this.setState({ text: e.target.value})
  }

  handleClick = () => {
    const {image, text, posts} = this.state
    this.setState({
      posts: [{image, text}, ...posts]
    })
  }

  render() {
    const {posts} = this.state;
    return(
      <div>
        <h2>Our SM site</h2>
        <NewPost 
        handleChangeImage={this.handleChangeImage} 
        handleChangeText={this.handleChangeText}
        handleClick={this.handleClick}
        />
        <Post posts={posts}/>
      </div>
    )
  }
}

export default App;