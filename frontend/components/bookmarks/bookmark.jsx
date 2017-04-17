import React from 'react';

class Bookmark extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }

  ensureLogin(){
    if(this.props.currentUser === null){
      return false;
    }else{
      return true;
    }
  }

  // userBookmark(){
  //   let event;
  //   for( let i = 0; i < this.props.currentUser.bookmarked_events.length; i++){
  //     event = this.props.currentUser.bookmarked_events[i];
  //     if(event.id === this.props.eventId){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  userBookmark(){
    if (this.props.currentUser.bookmarked){
      return this.props.currentUser.bookmarked.hasOwnProperty(this.props.eventId);
    }else {
      return false;
    }
  }

  displayBookmark(){
    if(this.ensureLogin()){
      if(this.userBookmark()){
        return (
          <div className="icon-selected">
            <i id="icon" className="fa fa-bookmark" aria-hidden="true"></i>
          </div> );
      }
    }
    return (
      <div className="icon-nonselected">
        <i id="icon" className="fa fa-bookmark-o" aria-hidden="true"></i>
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
