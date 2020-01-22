import React, {Component} from 'react'

class NewPost extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='image' onChange={this.props.handleChangeImage}/>
                <input type="text" placeholder='text' onChange={this.props.handleChangeText} />
                <button onClick={this.props.handleClick}>Post</button>
            </div>
        )
    }
}

export default NewPost;