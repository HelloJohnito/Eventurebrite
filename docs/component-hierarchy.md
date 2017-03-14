## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**UserContainer**
 - UserTickets
 - UserBookmarkedEvents

**HomeContainer**
 - NavbarContainer
 - EventsIndexContainer
 - CategoryContainer

**NavbarContainer**
 - AuthInfo

**NewEventFormContainer**
 - CreateEventForm

**EventIndexContainer**
 - EventIndexItems
 - CategoryContainer

**EventDetailContainer**
 - EventDetails
   + Description
   + location
   + category
 - TicketFormContainer

**CategoryContainer**
 - EventsByCategory

**TicketFormContainer**
 - TicketForm


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/events/new" | "NewEventFormContainer" |
| "/events" | "EventIndexContainer" |
| "/events/${category}" | "CategoryContainer" |
| "/events/:eventId" | "EventDetailContainer" |
| "/user" | "UsersContainer" |
| "/new-tickets" | "TicketFormContainer" |
