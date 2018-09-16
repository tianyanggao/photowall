// import React,{Component} from 'react'
//
// class Photo extends Component{
//   render(){
//     const post =this.props.post
//     return<figure className="figure">
//             <img className="photo" scr={post.imageLink} alt={post.description}/>
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className="button-container">
//                <button className="remove-button">remove</button>
//             </div>
//     </figure>
//   }
// }
// export default Photo

import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
function Photo(props){
    const post =props.post
    return<figure className="figure">
            <img className="photo" scr={post.imageLink} alt={post.description}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
               <button  onClick={()=>{
                 props.onRemovePhoto(post)
               }}>remove</button>
            </div>
    </figure>
  }

  function mapStateToProps(state){
    return{
      posts:state
    }
  }

Photo.propTypes ={
  post: PropTypes.object.isRequired,
  // onRemovePhoto:PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Photo)
