import React from 'react';

class EventBrowse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.type === "index" ? this.props.fetchAllEvents(12) : this.props.filterByCategory(12, this.props.category);
  }

  componentWillReceiveProps(newProps){
    if(newProps.category !== this.props.category){
      this.props.filterByCategory(12, newProps.category);
    }
  }

  render(){
    return(
      <div>

      </div>
    );
  }

}

export default EventBrowse;
