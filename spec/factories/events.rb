FactoryGirl.define do
  factory :event do
    title "title"
    description "description"
    user_id 1
    price "$20"
    date "1/1/2012"
    location "location"
    image_url "images"
  end
end
