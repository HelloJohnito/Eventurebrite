
User.destroy_all
john = User.create(username:"john", password:"password")
bob = User.create(username:"bob", password:"password")
jenny = User.create(username:"jenny", password:"password")
nancy = User.create(username:"nancy", password:"password")

Event.destroy_all
e1 = Event.create(title: "Snowboard with strangers", description: "Snow Strangers Snow! Come join us as we board down Mount Everest! We are gathering all sorts of people with different backgrounds who are excited about snowboarding and meeting new people! We have transportations, foods, drinks, living space, all provided for! Our bus will pick us up at the location listed here at 5 am sharp and we will be staying at a cabin near by the mountins! What better way to spend the week snowboarding down an epic mountain with new friends. What are you waiting for? Join us today!!", user_id: john.id, price: "$300", date: Date.new(2017, 12, 11), location: "San Francisco", image_url: "image_url")

e2 = Event.create(title: "Hiking 5 miles", description: "description here", user_id: john.id, price: "$200", date: Date.new(2018, 1, 5), location: "San Francisco", image_url: "image_url")

e3 = Event.create(title: "Drinking away 2017", description: "Are you ready for a new year?", user_id: bob.id, price: "Free", date: Date.new(2017, 12, 31), location: "San Francisco", image_url: "image_url")

e4 = Event.create(title: "Live Concert for free", description: "Up in coming artists sharing the night on stage to perform for the people!", user_id: jenny.id, price: "Free", date: Date.new(2017, 11, 15), location: "San Diego", image_url: "image_url")


Category.destroy_all
music = Category.create(category: "Music")
sports = Category.create(category: "Sports")
arts = Category.create(category: "Arts")
classes = Category.create(category: "classes")
parties = Category.create(category: "parties")
networking = Category.create(category: "Networking")

CategoryListing.destroy_all
cl1 = CategoryListing.create(category_id: sports.id, event_id: e1.id)
cl2 = CategoryListing.create(category_id: sports.id, event_id: e2.id)
cl3 = CategoryListing.create(category_id: parties.id, event_id: e3.id)
cl4 = CategoryListing.create(category_id: music.id, event_id: e4.id)
