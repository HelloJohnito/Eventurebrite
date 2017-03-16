{

  currentUser: {
    id: 1,
    username: 'John'
  },

  forms: {
    signUp: {errors:[]},
    logIn: {errors: []},
    createEventForm: {errors: ['Please fill all sections']}
    createTicket: {errors: ['Form cannot be blank']}
  }

  events: {
    1: {
      event_id: 1
      author_id: 1
      title: 'Run Across the Bridge'
      description: 'Join us as we run across the Golden Gate'
      price: $30
      date: 1/12/2017
      location: 'San Francisco'
      images: image_url
      category-tag: 'outdoor activity'
    }
  }

  tickets: {
    1: {
      user_id: 1,
      event_id: 1
    }
  }

  bookmarks: {
    1: {
      user_id: 1,
      event_id: 1
    }
  }

}
