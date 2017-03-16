@events.each do |event|
  json.set! event.id do
    json.extract! event, :title, :image_url, :location, :date
  end
end
