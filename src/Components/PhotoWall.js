// import React,{Component} from'react'
// import Photo from './Photo'
//
// class PhotoWall extends Component{
//   render(){
//     return <div className="photo-grid">
//             {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
//            </div>
//   }
// }
// export default PhotoWall


import React,{Component} from'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from'react-router-dom'
function PhotoWall(props){
  return <div>
         <Link className= "addIcon" onClick={props.onNavigate} to="/AddPhoto"></Link>

         <div className="photo-grid">
          {props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
         </div>
         </div>
}

PhotoWall.propTypes ={
  posts: PropTypes.array.isRequired,
  // onRemovePhoto:PropTypes.func.isRequired
}
export default PhotoWall
