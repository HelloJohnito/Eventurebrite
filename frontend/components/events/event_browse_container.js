import { connect } from 'react-redux';
import EventBrowse from './event_browse';
import { fetchAllEvents, filterByCategory } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  events: ownProps.events,
  category: ownProps.category
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // if(ownProps.type === 'index'){
  //   return {
  //     fetchAllEvents: (limit) => dispatch(fetchAllEvents(limit))
  //   };
  // }
  // else{
  //   return {
  //     filterByCategory: (limit,category) => dispatch(filterByCategory(limit, category))
  //   };
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventBrowse);
