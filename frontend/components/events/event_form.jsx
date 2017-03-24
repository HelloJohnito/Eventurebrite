import React from 'react';
import { Link, hashHistory } from 'react-router';



class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.event;
  }


  componentDidMount(){
    if(this.props.formType === "edit"){
      this.props.fetchDetailEvent(this.props.eventId).then(res => this.setState(res.event));
    }
    this.props.fetchAllCategories();
  }


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

  update(field){
    return e => {
      if (Number.isInteger(parseInt(e.currentTarget.value))){
        this.setState({[field]: '$'+e.currentTarget.value});
      }else {
        this.setState({[field]: e.currentTarget.value});
      }
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then( success => hashHistory.push(`/events/${success.event.id}`));
  }

  renderErrors(){
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

    let text = this.props.formType === "new" ? "Create New Event" : "Update Event";
    return(
      <div className="event-form-outer">

        <h1 className="event-form-header">{text}</h1>

        <div className="event-form-middle">

        <form onSubmit={this.handleSubmit.bind(this)} className="event-form">

          <div className="event-form-inner">

            <label>Title
            <br/>
            <input className="event-form-title" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"></input>
            </label>

            <label>Location
            <br/>
            <input className="event-form-location" type="text" value={this.state.location} onChange={this.update("location")} placeholder="Location"></input>
            </label>

            <label>Date
            <br/>
            <input className="event-form-date" type="date" value={this.state.date} onChange={this.update("date")} placeholder="Date"></input>
            </label>

            <label>Price
            <br/>
            <input className="event-form-price" type="text" value={this.state.price} onChange={this.update("price")} placeholder="Price"></input>
            </label>

            <label>Category
              <br/>
              <select className="event-form-categories-selector" defaultValue="" onChange={this.update("category_id")}>

                <option value="" disabled="true">Select Category</option>

                {this.props.categories.map( category => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </select>
            </label>

            <label>Description
            <br/>
            <textarea className="event-form-description" value={this.state.description} onChange={this.update("description")} placeholder="Description"></textarea>
            </label>

            <div className="event-form-upload-image-outer">
              <button className="event-form-upload-image" onClick={this.uploadImage.bind(this)}>Upload Image</button>
            </div>

            <input className="event-form-submit-button" type="submit" value="Make Event Live"/>

          </div>
        </form>
        </div>
      </div>
    );
  }

}


export default EventForm;


// <select className="event-form-categories-selector" defaultValue="" onChange={this.update("category_id")}>
//
//   <option value="" disabled="true">Select Category</option>
//
//   {this.props.categories.map( category => (
//     <option key={category.id} value={category.id}>{category.category}</option>
//   ))}
// </select>


// {this.props.categories.map( category => {
//   <label>{category.category}
//     <input type="checkbox" />
//   </label>;
// })}
