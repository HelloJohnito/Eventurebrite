@bookmarks.each do |bookmark|
  json.set! bookmark.id do
    json.extract! bookmark, :id, :event, :user
  end
end
