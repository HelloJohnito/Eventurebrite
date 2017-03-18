import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventsReducer from './events_reducer';
import EventDetailReducer from './event_detail_reducer';
import CategoryReducer from './category_reducer';

const rootReducer = combineReducers({
	session: SessionReducer,
	eventsIndex: EventsReducer,
	eventDetail: EventDetailReducer,
	category: CategoryReducer
});

export default rootReducer;
