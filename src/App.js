import React from "react";
import Header from './Components/Header/Header'
import Headline from './Components/Headline/Headline'
import Button from './Components/Button/Button'
import ListItem from './Components/ListItem/ListItem'
import {connect} from 'react-redux'
import {fetchPosts} from './actions/postsActions'
import "./app.scss";


const tempArr=[{
  fName : "Anna",
  lName : "Samoylenko",
  email : "annaswan@mail.ru",
  age:24,
  onlineStatus: true
}]

export class App extends React.Component {

  fetch = () =>{
    this.props.fetchPosts()
  }
  render() {
    const {posts} = this.props
    return (
      <div className="App" data-test="appComponent">
      <Header/>
      <section className="main">
      <Headline tempArr = {tempArr} header="Posts" desc="Click the button to render posts"/>
      <Button buttonText="UPLOAD POSTS" emitEvent = {this.fetch}/>
      {posts && posts.length>0 && posts.map(post=>{
        const {title, body} = post
        const configListItem = {
          title,
          desc:body
        }
        return <ListItem key={post.id} {...configListItem}/>
    
      }
      )}
      </section>
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
    posts: state.posts
  
})
export default connect(mapStateToProps, {fetchPosts})(App);
