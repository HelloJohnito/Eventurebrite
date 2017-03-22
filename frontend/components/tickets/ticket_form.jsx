import React from 'react';

class TicketForm extends React.Component {


  handleSubmit(){

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Purchase Tickets
            <br/>
            <input type="number" className="ticket-quantity" />
          </label>

          <input submit="submit" class="ticket-form-submit-button" />
        </form>
      </div>
    );
  }
}

export default TicketForm;
