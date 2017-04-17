# json.extract! user :events, :joined_events

json.set! :events, user.events
json.set! :id, user.id
json.set! :username, user.username


if user.bookmarked_events.empty?
  json.set! :bookmarked, Object.new
else
  json.set! :bookmarked do
    user.bookmarked_events.each do |event|
      json.set! event.id, event
    end
  end
end

# debugger
# user.bookmarked_events.each do |event|
#   json.set! event.id event
# end

# json.set! :joined_events, user.joined_events
# array
