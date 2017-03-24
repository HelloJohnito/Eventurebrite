import React from 'react';

class Bookmark extends React.Component {

  ensureLogin(){
    if(this.props.currentUser === null){
      return false;
    }else{
      return true;
    }
  }

  // userBookmark(){
  //   // console.log(this.props.currentUser.bookmarked_events)
  //   this.props.currentUser.bookmarked_events.map( (event) => {
  //     // console.log("start")
  //     // console.log(typeof(event.id))
  //     // console.log(typeof(this.props.eventId))
  //     if(event.id === this.props.eventId){
  //       console.log("goesin")
  //       return true;
  //     }
  //   });
  //   return false;
  // }
  componentWillReceiveProps(){
  }

  userBookmark(){
    let event;
    for( let i = 0; i < this.props.currentUser.bookmarked_events.length; i++){
    // console.log(this.props.currentUser.bookmarked_events)
      event = this.props.currentUser.bookmarked_events[i];
      if(event.id === this.props.eventId){
        return true;
      }
    }
    return false;
  }

  displayBookmark(){
    if(this.ensureLogin()){
      if(this.userBookmark()){
        return (
          <div className="icon-selected">
            <i className="fa fa-bookmark" aria-hidden="true"></i>
          </div> );
      }
    }
    return (
      <div className="icon-nonselected">
        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
      </div> );
  }

  handleClick(e){
    e.preventDefault();
    if(!this.ensureLogin()){
      return;
    }else {
      if(this.userBookmark()){
        this.props.deleteBookmark(this.props.eventId);
      }else{
        this.props.createBookmark(this.props.eventId);
      }
    }
  }

  render(){

    return(
      <div>
        <div onClick={this.handleClick.bind(this)}>{this.displayBookmark()}</div>
      </div>
    );
  }
}


export default Bookmark;
