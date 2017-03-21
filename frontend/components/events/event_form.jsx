import React from 'react';
import { Link, withRouter } from 'react-router';



class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "", description: "", price: "", date: "", location: "", image_url: "", category_id: ""};
  }

  // componentDidUpdate(){
  //   this.redirectIfLoggedOut();
  // }
  //
  // redirectIfLoggedOut(){
  //   if(!this.props.loggedIn){
  //     this.props.router.push("/");
  //   }
  // }


  uploadImage(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null){
          this.setState({image_url: images[0].url});
        }
      }
    );
  }

  componentDidMount(){
    this.props.fetchAllCategories();
  }


  update(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createDetailEvent(this.state);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    // console.log("")
    // console.log(this.props)
    return(
      <div className="event-form-outer">
        <h1 className="event-form-header">Create New Event</h1>

        <form onSubmit={this.handleSubmit.bind(this)} className="event-form">

          <div className="event-form-inner">
            <label>Event Title</label>
            <input className="event-form-title" type="text" onChange={this.update("title")}></input>

            <label>Event Location</label>
            <input className="event-form-location" type="text" onChange={this.update("location")}></input>

            <label>Date</label>
            <input className="event-form-date" type="date" onChange={this.update("date")}></input>


            <label>Price</label>
            <input className="event-form-price" type="text" onChange={this.update("price")}></input>


            <label>Description</label>
            <textarea className="event-form-description" onChange={this.update("description")}></textarea>


            <label>Categories</label>
              <select className="event-form-categories-selector" defaultValue="" onChange={this.update("category_id")}>

                <option value="" disabled="true">Select Category</option>

                {this.props.categories.map( category => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </select>

            <button className="event-form-upload-image" onClick={this.uploadImage.bind(this)}>Upload Image</button>

            <input className="event-form-submit-button" type="submit" value="Make Event Live"/>

          </div>
        </form>
      </div>
    );
  }

}


export default EventForm;
