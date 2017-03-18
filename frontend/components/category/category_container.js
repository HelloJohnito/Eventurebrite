import { connect } from 'react-redux';
import Category from './category';
import { fetchAllCategories, fetchCategory } from '../../actions/category_actions';

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchCategory: (id) => dispatch(fetchCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
