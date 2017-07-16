import { connect } from 'react-redux';
import BrowsePageCategory from './browsepage_category';
import { filterByCategory } from '../../../actions/event_actions';


const mapStateToProps = (state, ownProps) => ({
    events: Object.keys(state.eventsIndex).map( id => state.eventsIndex[id]),
    category: ownProps.params.category
});

const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (limit, category) => dispatch(filterByCategory(limit, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePageCategory);
