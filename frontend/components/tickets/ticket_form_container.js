import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { createTicket } from "../../actions/ticket_actions";

const mapStateToProps = (state, ownProps) => ({
  eventTitle: state.eventDetail.title,
  eventPrice: state.eventDetail.price,
  eventId: state.eventDetail.id
});

const mapDispatchToProps = dispatch => ({
  createTicket: (ticket) => dispatch(createTicket(ticket))
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
