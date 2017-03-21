@tickets.each do |ticket|
  json.set! ticket.id do
    json.extract! ticket, :id, :user, :event
  end
end
