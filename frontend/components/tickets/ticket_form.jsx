import React from 'react';
import { hashHistory } from 'react-router';

class TicketForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { eventId:this.props.eventId, count: 0 };
  }

  handleChange(e){
    this.setState({ count: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTicket(this.state).then(hashHistory.push('/user/tickets')); //ask here
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1 className="ticket-purchase">Purchase Ticket</h1>
          <div>
            <h1 className="ticket-title">{this.props.eventTitle}</h1>
            <h1 className="ticket-price">{this.props.eventPrice}</h1>
          </div>

          <div className="ticket-outer-input">
            <input type="number" className="ticket-quantity"
              placeholder="Quantity"
              onChange={this.handleChange.bind(this)}/>
          </div>

          <input type="submit" className="ticket-form-submit-button" value="Check Out" />
        </form>
      </div>
    );
  }
}

export default TicketForm;
