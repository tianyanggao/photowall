// import React,{Component} from 'react'
// import Title from'./Title'
// import PhotoWall from'./PhotoWall'
//
//
// const posts = [{
//  id: "0",
//  description: "beautiful landscape",
//  imageLink: "https://t-ec.bstatic.com/images/hotel/max1024x768/103/103601621.jpg" +
//  "3919321_1443393332_n.jpg"
//  }, {
//  id: "1",
//  description: "Aliens???",
//  imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//  "08323785_735653395_n.jpg"
//  }, {
//  id: "2",
//  description: "On a vacation!",
//  imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//  }]
//
//
// class Main extends Component{
//   render(){
//     return <div>
//                <Title title={'Photowall'}/>
//                <PhotoWall posts={posts}/>
//
//
//           </div>
//   }
// }
// export default Main


import React,{Component} from 'react'
import Title from'./Title'
import PhotoWall from'./PhotoWall'
import AddPhoto from'./AddPhoto'
import{Route} from 'react-router-dom'
import{connect} from 'react-redux'

class Main extends Component{
  constructor(){
    super()
    // this.removePhoto = this.removePhoto.bind(this);
    // this.navigate= this.navigate.bind(this);
     }

// removePhoto(postRemoved){
//   console.log(postRemoved.description)
//   this.setState((state)=>({
//     posts:state.posts.filter(post => post!==postRemoved)
//   }))
//
// }
// navigate(){
//   this.setState({
//     screen:'addPhoto'
//   })
// }

// componentDidMount(){
//   // // const data= SimulateFetchFromDatabase()
//   // this.setState({
//   //   posts:data
//   // })
//   // console.log('componentDidMount')
// }
//  componentDidUpdate(prevProps,preState){
//    console.log(preState.posts)
//    console.log(this.state)
//  }

// addPhoto(postSubmitted){
//   this.setState(state=>({
//     posts:state.posts.conca([postSubmitted])
//   }))
// }




  render(){
    return(
    <div>
          <Route exact path  ="/"render={() =>(
            <div>
             <Title title= {'Photowall'}/>
             <PhotoWall posts={this.props.posts}/>
             {/*<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>*/}
            </div>
          )}/>

           {/*<Route path="/AddPhoto" render ={({history})=>(
             <AddPhoto onAddPhoto={(addedPost)=>{
               this.addPhoto(addedPost)
               history.push('/')
             }}/>
  )}/>*/}
    </div>
)
  }
}
function mapStateToProps(state){
  return{
    posts:state
  }
}
// function SimulateFetchFromDatabase(){
//   return()
// }
export default connect(mapStateToProps)(Main)
