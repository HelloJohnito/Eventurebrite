
User.destroy_all
john = User.create(username: "john", password: "password")
bob = User.create(username: "bob", password: "password")
scott = User.create(username: "Scott", password: "password")
brandon = User.create(username: "Brandon", password: "password")
jenny = User.create(username: "jenny", password: "password")
nancy = User.create(username: "nancy", password: "password")

Event.destroy_all
e1 = Event.create(title: "Shred With Strangers", description: "Shred with Strangers! Come join us as we board down Mount Everest! We are gathering all sorts of people with different backgrounds who are excited about snowboarding and meeting new people! We have transportations, foods, drinks, living space, all provided! Our bus will pick us up at the location listed here at 5 am sharp and we will be staying at a cabin near the mountains! What better way to spend the week snowboarding down an epic mountain with new friends. What are you waiting for? Join us today!!", user_id: john.id, price: "$300", date: Date.new(2017, 12, 11), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028613/snow_dlfh5i.jpg")

e2 = Event.create(title: "Hiking 5 Miles", description: "Happy New Year! You know what that means! That is right! It is time for our annual event! Hiking 5 Miles! We are going to go on an adventure through the rolling mountain. It is going to be an epic and wild day, so join us! If you are not fit and are worried about being too slow, don't fret! We have multiple groups going at different pace to accommodate everyone!", user_id: scott.id, price: "free", date: Date.new(2018, 1, 5), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490027735/hiking_znycaj.jpg")

e3 = Event.create(title: "Drinking away 2017", description: "Mom once said, gone with the old and on with the new! That's right! It's time to celebrate the end of 2017! Regardless of if you had a great year or not, one thing is for sure, we are all going to have an exordinary night! EXORDINARY! So join us at the center of San Francisco where everyone and their moms are going to be. There won't be any regrets! Grab your drink, shake your butt, and celebrate like there is no tomorrow!! Oh yeah, almost forgot to mention, THE ENTRANCE FEE IS FREE!!! HAPPY NEW YEAR!", user_id: bob.id, price: "Free", date: Date.new(2017, 12, 31), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028436/newyear_nmh5th.jpg")

e4 = Event.create(title: "Vip tickets to Elvis Live!", description: "Wait what? Elvis? There is no way he is going to be on stage.... So then who's playing? Well, one way to find out! Join us Friday! We will be dancing and singing to Jailhouse Rock at 10pm sharp!! ", user_id: jenny.id, price: "$20", date: Date.new(2017, 11, 17), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028961/elvis_pth2dy.jpg")

e5 = Event.create(title: "Peanut Butter Jelly Time!", description: "Yes! That is right! It is peanut butter Jelly Time!! Join us as we go over 15 different ways to making the BEST PEANUT BUTTER JELLY SANDWHICH! You will be surprised about how much you didn't know about peanut butter jelly sandwhiches. From the classic to the crustless, your mouth will be watering every step of the way. We grew up eating them, we still eat them, and now it's time to try it in 15 different ways!", user_id: nancy.id, price: "$10", date: Date.new(2017, 11, 1), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490029040/peanutbutterjelly_v3sxbu.jpg")

e6 = Event.create(title: "Internet101", description: "Every been curious about how the internet works?? How we can connect to everyone all over the world? Join us for a one day special where we will go in dept to help demystify the internet for you. It wil be an all day event where you can meet new people who are also interested about the internet in the tech world! Food will be provided! The only thing you will need is a notebook and pen because you will be writing a lot of notes!", user_id: brandon.id, price: "$20", date: Date.new(2018, 1, 8), location: "Riverside", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490247614/internet_xxrlzm.jpg")

e7 = Event.create(title: "Warriors vs Cavs", description: "$500 front row seats! For a limited amount, we are selling front row seats for only $500 to the Cavs and Warriors game! This is a deal you will not want to miss! Not only are the tickets cheap but also, you will get to watch the top two teams in the nba go at it! This is pretty much the pewview of the finals! Don't miss out on this event! Get your tickets today!", user_id: john.id, price: "$500", date: Date.new(2018, 2, 19), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490076235/ifdxscwtnl4c7jhrvwab.jpg")

e8 = Event.create(title: "Arts from the World", description: "Arts from the World brings us arts from, you guessed it, all over the world!! Join us and learn how arts from different cultures differ from each other and learn what makes them unique and idiosyncratic! We will be displaying these arts for a limited time only so buy your tickets today! Don't miss out on this amazing deal! We also encourage people to bring in their own arts to share!", user_id: brandon.id, price: "$30", date: Date.new(2018, 1, 12), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490248829/welcome-world-header_nuuagr.jpg")

e9 = Event.create(title: "Career Fair for Bankers", description: "Looking for a career in banking? BOA is hosting a career fair for everyone who is interested in banking! We will have 15 to 20 recuriters come in and share about their company and who they are looking for to join their team. Make sure to bring your resume and dress to impress! See you there.", user_id: jenny.id, price: "Free", date: Date.new(2018, 1, 16), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490249377/networking_0219_wide_tixecx.jpg")

e10 = Event.create(title: "Live Concert for free", description: "Once in a life time event! We have gathered native up-and-coming artists who are willing to play for free! From live piano to live guitars and vocals, it's going to be a musical night that you don't want to miss. Great way to sit back and unwind! Grab a drink, lift up your feet, lean back and just enjoy the talent that is playing on stage! Share the news!", user_id: john.id, price: "Free", date: Date.new(2017, 11, 10), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490028857/liveconcert_swmg1b.jpg")

e11 = Event.create(title: "Party International", description: "Are you bored on a Friday night and want to go out and meet new people? Join us at our Party International Event! We welcome everyone from different backgrounds and ethnicities! We will serve drinks from different countries all over the world! From American Beer to margaritas to sake! Don't be shy and try new drinks from different parts of the world!", user_id: scott.id, price: "$20", date: Date.new(2018, 1, 26), location: "Los Angeles", image_url: "http://res.cloudinary.com/deh9l9lyq/image/upload/v1490248619/madrid-party-nightlife-clubs_hxmzyy.jpg")


# # arts
e12 = Event.create(title: "Art for kids!", description: "Art for kids is a one day event for all kids ages 4 and up! We will be drawing spirit animals for the first half and then anything you want for the second half! We will have teachers around assissting kids on their drawings! Sign up your kids today to save seats!", user_id: jenny.id, price: "$20", date: Date.new(2018, 1, 27), location: "Seattle", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490303127/summerarts2015-IMG_9147-cropped-700x350_rtftms.png"))

e13 = Event.create(title: "Creating Your Own Ceramic Art", description: "Join us for a peaceful session of creating your own Ceramic art! A greate way to unwind and reset for the new week! Session will be 4 hours long where we will go over different shapes to form your arts to! All ages are welcome! We have a section for kids too!", user_id: brandon.id, price: "$30", date: Date.new(2018, 1, 27), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/v1490308446/Chuma-Maweni-567_v37kpm.jpg"))

e14 = Event.create(title: "", description: "", user_id: , price: "$30", date: Date.new(2018, 2, 1), location: "Los Angeles", image_url: ""))

e15 = Event.create(title: "", description: "", user_id: , price: "$70", date: Date.new(2018, 2, 2), location: "San Diego", image_url: ""))
#
# #classes
#
# e16 = Event.create(title: "", description: "", user_id: , price: "$20", date: Date.new(2018, 1, 27), location: "Seattle", image_url: ""))
#
# e17 = Event.create(title: "", description: "", user_id: , price: "$40", date: Date.new(2018, 1, 27), location: "New York", image_url: ""))
#
# e18 = Event.create(title: "", description: "", user_id: , price: "$30", date: Date.new(2018, 2, 1), location: "Los Angeles", image_url: ""))
#
# e19 = Event.create(title: "", description: "", user_id: , price: "$70", date: Date.new(2018, 2, 2), location: "San Diego", image_url: ""))
#
# #food
#
# e20 = Event.create(title: "", description: "", user_id: , price: "$20", date: Date.new(2018, 1, 27), location: "Seattle", image_url: ""))
#
# e21 = Event.create(title: "", description: "", user_id: , price: "$40", date: Date.new(2018, 1, 27), location: "New York", image_url: ""))
#
# e22 = Event.create(title: "", description: "", user_id: , price: "$30", date: Date.new(2018, 2, 1), location: "Los Angeles", image_url: ""))
#
# e23 = Event.create(title: "", description: "", user_id: , price: "$70", date: Date.new(2018, 2, 2), location: "San Diego", image_url: ""))

Category.destroy_all
arts = Category.create(category: "arts")
classes = Category.create(category: "classes")
food = Category.create(category: "food")
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
cl6 = CategoryListing.create(category_id: classes.id, event_id: e6.id)
cl7 = CategoryListing.create(category_id: sports.id, event_id: e7.id)
cl8 = CategoryListing.create(category_id: arts.id, event_id: e8.id)
cl9 = CategoryListing.create(category_id: networking.id, event_id: e9.id)
cl10 = CategoryListing.create(category_id: music.id, event_id: e10.id)
cl11 = CategoryListing.create(category_id: parties.id, event_id: e11.id)

#arts

Ticket.destroy_all

Bookmark.destroy_all
