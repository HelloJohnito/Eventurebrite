
User.destroy_all
john = User.create(username:"john", password:"password")
bob = User.create(username:"bob", password:"password")
jenny = User.create(username:"jenny", password:"password")
nancy = User.create(username:"nancy", password:"password")

Event.destroy_all
e1 = Event.create(title: "Shred the mountain with strangers", description: "Snow Strangers Snow! Come join us as we board down Mount Everest! We are gathering all sorts of people with different backgrounds who are excited about snowboarding and meeting new people! We have transportations, foods, drinks, living space, all provided for! Our bus will pick us up at the location listed here at 5 am sharp and we will be staying at a cabin near by the mountins! What better way to spend the week snowboarding down an epic mountain with new friends. What are you waiting for? Join us today!!", user_id: john.id, price: "$300", date: Date.new(2017, 12, 11), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028613/snow_dlfh5i.jpg")

e2 = Event.create(title: "Hiking 5 miles", description: "description here", user_id: john.id, price: "$200", date: Date.new(2018, 1, 5), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490027735/hiking_znycaj.jpg")

e3 = Event.create(title: "Drinking away 2017", description: "Are you ready for the new year?", user_id: bob.id, price: "Free", date: Date.new(2017, 12, 31), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028436/newyear_nmh5th.jpg")

e4 = Event.create(title: "Live Concert for free", description: "Up in coming artists sharing the night!", user_id: jenny.id, price: "Free", date: Date.new(2017, 11, 15), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028857/liveconcert_swmg1b.jpg")

e4 = Event.create(title: "Vip tickets to Elvis Live!", description: "Get your VIP tickets for Elvis Live!", user_id: jenny.id, price: "$100", date: Date.new(2017, 11, 15), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028961/elvis_pth2dy.jpg")

e5 = Event.create(title: "Peanut Butter Jelly Time!", description: "Yes! That is right! It is peanut butter Jelly Time!! Join us as we go over 15 different ways to making the BEST PEANUT BUTTER JELLY SANWHICH!", user_id: nancy.id, price: "$10", date: Date.new(2017, 11, 1), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490029040/peanutbutterjelly_v3sxbu.jpg")


Category.destroy_all
arts = Category.create(category: "arts")
classes = Category.create(category: "classes")
food = Category.create(category: "food and drink")
music = Category.create(category: "music")
networking = Category.create(category: "networking")
parties = Category.create(category: "parties")
sports = Category.create(category: "sports")

CategoryListing.destroy_all
cl1 = CategoryListing.create(category_id: sports.id, event_id: e1.id)
cl2 = CategoryListing.create(category_id: sports.id, event_id: e2.id)
cl3 = CategoryListing.create(category_id: parties.id, event_id: e3.id)
cl4 = CategoryListing.create(category_id: music.id, event_id: e4.id)
cl5 = CategoryListing.create(category_id: food.id, event_id: e5.id)
