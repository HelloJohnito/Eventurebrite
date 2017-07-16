
User.destroy_all
john = User.create(username: "john", password: "password")
bob = User.create(username: "bob", password: "password")
scott = User.create(username: "Scott", password: "password")
brandon = User.create(username: "Brandon", password: "password")
jenny = User.create(username: "jenny", password: "password")
nancy = User.create(username: "nancy", password: "password")

Event.destroy_all
e1 = Event.create(title: "Shred With Strangers", description: "Shred with Strangers! Come join us as we board down Mount Everest! We are gathering all sorts of people with different backgrounds who are excited about snowboarding and meeting new people! We have transportations, foods, drinks, living space, all provided! Our bus will pick us up at the location listed here at 5 am sharp and we will be staying at a cabin near the mountains! What better way to spend the week snowboarding down an epic mountain with new friends. What are you waiting for? Join us today!!", user_id: john.id, price: "$300", date: Date.new(2017, 12, 11), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490028613/snow_dlfh5i.jpg")


e22 = Event.create(title: "FRENCH SOUL & JAZZ", description: "Born in Paris but raised in Ars-en-Re, a small village on an island off the French Atlantic Coast, and now making her home in Brooklyn, NY, Singer-songwriter Violette began her musical journey at an early age, taking up the piano at five and later learning percussion while at a Parisian Conservatory. Her musical endeavors were clearly colored by influences from such French luminaries as Jacques Brel and Edith Piaf but quickly found her tastes and palette ranging much farther than her home. Soon her speakers were filled with the sounds of Ella Fitzgerald, Stevie Wonder, and Michael Jackson, all artists whose sound would have a hand in the development of her sophisticated pop sound.", user_id: jenny.id, price: "$30", date: Date.new(2018, 2, 1), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490331310/https-_2F_2Fcdn.evbuc.com_2Fimages_2F28956430_2F194501316904_2F1_2Foriginal_tw0oje.jpg")


e3 = Event.create(title: "Drinking away 2017", description: "Mom once said, gone with the old and on with the new! That's right! It's time to celebrate the end of 2017! Regardless of if you had a great year or not, one thing is for sure, we are all going to have an exordinary night! EXORDINARY! So join us at the center of San Francisco where everyone and their moms are going to be. There won't be any regrets! Grab your drink, shake your butt, and celebrate like there is no tomorrow!! Oh yeah, almost forgot to mention, THE ENTRANCE FEE IS FREE!!! HAPPY NEW YEAR!", user_id: bob.id, price: "Free", date: Date.new(2017, 12, 31), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490028436/newyear_nmh5th.jpg")

e16 = Event.create(title: "Breath Yoga", description: "Please join One Deep Breath Yoga for YOGA + MIMOSAS on every third Saturday of the month! Enjoy a 1-hour energizing Vinyasa flow yoga class followed by refreshing mimosas drinks and brunch refreshments. Our event sponsors, Harmless Harvest will have pure coconut water for you to enjoy and 18 Rabbits will have organic fruit and granola bars for everyone. Brunch foods will also be provided for all attendees.
This is the perfect way to start off your weekend and I hope this can become a part of your regular yoga practice. Feel free to bring your friends and family – yoga is more fun with good company! Share and Invite through Facebook.
One Deep Breath Yoga offers customized corporate and private/small group yoga and meditation classes in the comfort of your own home or workplace.", user_id:jenny.id, price: "$20", date: Date.new(2018, 1, 27), location: "Seattle", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490326715/https-_2F_2Fcdn.evbuc.com_2Fimages_2F26629116_2F10102406267_2F1_2Foriginal_xfnxln.jpg")

e5 = Event.create(title: "Peanut Butter Jelly Time!", description: "Yes! That is right! It is peanut butter Jelly Time!! Join us as we go over 15 different ways to making the BEST PEANUT BUTTER JELLY SANDWICH! You will be surprised about how much you didn't know about peanut butter jelly sandwiches. From the classic to the crustless, your mouth will be watering every step of the way. We grew up eating them, we still eat them, and now it's time to try it in 15 different ways!", user_id: nancy.id, price: "$10", date: Date.new(2017, 11, 1), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490029040/peanutbutterjelly_v3sxbu.jpg")

e6 = Event.create(title: "Internet101", description: "Ever been curious about how the internet works?? How we can connect to everyone all over the world? Join us for a one day special where we will go in dept to help demystify the internet for you. It wil be an all day event where you can meet new people who are also interested about the internet in the tech world! Food will be provided! The only thing you will need is a notebook and pen because you will be writing a lot of notes!", user_id: brandon.id, price: "$20", date: Date.new(2018, 1, 8), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490247614/internet_xxrlzm.jpg")

e7 = Event.create(title: "Warriors vs Cavs", description: "$500 front row seats! For a limited amount, we are selling front row seats for only $500 to the Cavs and Warriors game! This is a deal you will not want to miss! Not only are the tickets cheap but also, you will get to watch the top two teams in the nba go at it! This is pretty much the pewview of the finals! Don't miss out on this event! Get your tickets today!", user_id: john.id, price: "$500", date: Date.new(2018, 2, 19), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490076235/ifdxscwtnl4c7jhrvwab.jpg")

e8 = Event.create(title: "Arts from the World", description: "Arts from the World brings us arts from, you guessed it, all over the world!! Join us and learn how arts from different cultures differ from each other and learn what makes them unique and idiosyncratic! We will be displaying these arts for a limited time only so buy your tickets today! Don't miss out on this amazing deal! We also encourage people to bring in their own arts to share!", user_id: brandon.id, price: "$30", date: Date.new(2018, 1, 12), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490248829/welcome-world-header_nuuagr.jpg")

e20 = Event.create(title: "Asian Cuisine Cooking Class", description: "Asian Cuisine	$95 Per Person	Sat, 6/10/17	3pm-5:30pm
Come to the Classroom and learn the fundamentals of Asian Cooking. We practice Stir-Frying Techniques and Sauce Making as we introduce you to Asian Ingredients. Our favorite recipes include:
Hot and Sour Soup with Tofu and Egg
Traditional Steamed Rice
Chen Pi (Orange Peel Chicken)
Authentic Stir-Fried Shrimp with Peas and Ham
Thai-Style Chicken with Spicy Curry Paste
Rice-Paper-Wrapped Vietnamese-Style Spring Rolls with Dipping Sauces
Welcome to the Culinary Classroom
*A PRIVATE COOKING SCHOOL*
we teach cooking classes to the masses
Bring your creativity and questions as you explore Cooking and Pastry/Baking to start a new career or impress your friends with your SKILLS as a Master Chef or Pastry Chef
Master Chef Program – Certification Program
Master Baking/Pastry Program – Certification Program
Recreational Cooking AND Baking Classes.", user_id: john.id, price: "$20", date: Date.new(2018, 1, 27), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490330477/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29620931_2F20799000940_2F1_2Foriginal_ungafs.jpg")

e9 = Event.create(title: "Career Fair for Bankers", description: "Looking for a career in banking? BOA is hosting a career fair for everyone who is interested in banking! We will have 15 to 20 recuriters come in and share about their company and who they are looking for to join their team. Make sure to bring your resume and dress to impress! See you there.", user_id: jenny.id, price: "Free", date: Date.new(2018, 1, 16), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490249377/networking_0219_wide_tixecx.jpg")

e10 = Event.create(title: "Live Concert for free", description: "Once in a life time event! We have gathered native up-and-coming artists who are willing to play for free! From live piano to live guitars and vocals, it's going to be a musical night that you don't want to miss. Great way to sit back and unwind! Grab a drink, lift up your feet, lean back and just enjoy the talent that is playing on stage! Share the news!", user_id: john.id, price: "Free", date: Date.new(2017, 11, 10), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490028857/liveconcert_swmg1b.jpg")

e11 = Event.create(title: "Party International", description: "Are you bored on a Friday night and want to go out and meet new people? Join us at our Party International Event! We welcome everyone from different backgrounds and ethnicities! We will serve drinks from different countries all over the world! From American Beer to margaritas to sake! Don't be shy and try new drinks from different parts of the world!", user_id: scott.id, price: "$20", date: Date.new(2018, 1, 26), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490248619/madrid-party-nightlife-clubs_hxmzyy.jpg")


# # arts
e12 = Event.create(title: "Art for kids!", description: "Art for kids is a one day event for all kids ages 4 and up! We will be drawing spirit animals for the first half and then anything you want for the second half! We will have teachers around assissting kids on their drawings! Sign up your kids today to save seats!", user_id: jenny.id, price: "$20", date: Date.new(2018, 1, 27), location: "Seattle", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490303127/summerarts2015-IMG_9147-cropped-700x350_rtftms.jpg")

e13 = Event.create(title: "Creating Your Own Ceramic Art", description: "Join us for a peaceful session of creating your own Ceramic art! A greate way to unwind and reset for the new week! Session will be 4 hours long where we will go over different shapes to form your arts to! All ages are welcome! We have a section for kids too!", user_id: brandon.id, price: "$30", date: Date.new(2018, 1, 27), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490308446/Chuma-Maweni-567_v37kpm.jpg")

e2 = Event.create(title: "Hiking 5 Miles", description: "Happy New Year! You know what that means! That is right! It is time for our annual event! Hiking 5 Miles! We are going to go on an adventure through the rolling mountain. It is going to be an epic and wild day, so join us! If you are not fit and are worried about being too slow, don't fret! We have multiple groups going at different pace to accommodate everyone!", user_id: scott.id, price: "free", date: Date.new(2018, 1, 5), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027735/hiking_znycaj.jpg")

e14 = Event.create(title: "TEI Workshops", description: "THE ENTERTAINMENT INSTITUTE Workshops are interactive educational experiences led by select artists on the Vans Warped Tour. Each workshop is a 40 minute BACKSTAGE experience with your guru, alongside other like-minded music lovers in pursuit of knowledge and community.
The time displayed on your ticket is when the gates to the Vans Warped Tour are scheduled to open. Exact workshop times will be announced on the day of the event. You are responsible for finding out what time the workshop is happening. You can find out the workshop time the following ways:
at www.thinktei.com/warpedschedule
at the large blue THE ENTERTAINMENT INSTITUTE tent inside the festival
you will receive an email notification before noon on the day of the event", user_id: bob.id, price: "$30", date: Date.new(2018, 2, 1), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490328415/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29580024_2F132871768924_2F1_2Foriginal_hey7lz.jpg")

e15 = Event.create(title: "HAMILTON", description: "PART 1: HAMILTON WORKSHOP with Star of Broadway's Smash Hit, HAMILTON, Andrew Chappelle
All Skill Levels! Space is Limited!
Join Broadway Star of HAMILTON, Andrew Chappelle (HAMILTON, MAMMA MIA! PRISCILLA QUEEN OF THE DESERT) for a one-day musical theatre HAMILTON theme workshop! Andrew will teach lucky participants a song and dance combo from HAMILTON and also host a lively Question and Answer Session about his experience in this historic, revolutionary and inspiring American Tale!
Andrew will also be signing autographs and taking pics with students, so bring your playbills!
PART 2: Audition Technique with a Top Talent Agent
All Skill Levels! Space is Limited!
Stick around and work on musical theatre audition technique with a Top Talent Agent! Part 2 is limited to just 24 participants!
Sing for the Talent Agent who’s always scouting for fresh faces!
Gain useful feedback and coaching on your presentation, song choice and interpretation from the Talent Agent and our Artistic Team!
This Top Talent Agent is always scouting for new talent!", user_id: jenny.id, price: "$150", date: Date.new(2018, 2, 2), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490329061/Spring-Break_dgxsh6.jpg")


e17 = Event.create(title: "Ian Eastwood Hip Hop Dance Workshop!", description: "Ian Eastwood is nothing short of phenomenal. He's been a YouTube sensation since the beginning of YouTube (pretty much) and his dancing/teaching/choreography/film making skills get better and better with each passing day. We are so lucky to have him back at City Dance! Save money and get your tickets in advance! Or, if you just want to watch you can buy a spectator ticket. Don't miss this :O", user_id: brandon.id, price: "$40", date: Date.new(2018, 1, 27), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490328066/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29283041_2F93720127529_2F1_2Foriginal_iksyoq.jpg")

e18 = Event.create(title: "Structure Drawing Leading to Oil Painting", description: "Always wanted to try oil painting?
Begin by developing your drawing skills, and learning techniques that can build confidence in oil painting.
This progressive class will take students through three weeks of pencil drawing, and oil-paint sketching before embarking on full oil painting.
Returning students will continue to develop their oil painting skills focusing on technique, composition, and color theory.
​This class runs six consecutive weeks, and must be purchased in its entirety.
Instructor Kris Finch is an accomplished portrait and illustration artist.", user_id: john.id, price: "$30", date: Date.new(2018, 2, 1), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490328714/https-_2F_2Fcdn.evbuc.com_2Fimages_2F27735076_2F131305395529_2F1_2Foriginal_qour4g.jpg")


e19 = Event.create(title: "Making Your Own Raw Chocolate Bars", description: "An Ayurveda inspired raw chocolate making workshop, brought to you by Elements Truffles and Antidote Apothecary + Tea Bar.
Learn the art of raw chocolate making directly from the founder & masterchef, Alak Vasa of Elements Truffles.
Rejoice the start of spring by creating edible love! We'll make our own flavored raw chocolates infused with love and your choice of essential oil, ayurvedic herbs and healthy toppings (nuts, berries and a lot more). In this intimate chocolate making workshop we will cover
Basics of Ayurveda
Journey of cacao – from bean to bar
The art of making artisanal chocolate, a hands-on experience
A brief guided mediation session followed by mindful chocolate tasting
We will take a quick vote and the winner will get a shout out on our social media channels and our box of 8 signature truffles, specially handcrafted by our chef.", user_id: bob.id, price: "$70", date: Date.new(2018, 2, 2), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490329571/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29316005_2F194395165006_2F1_2Foriginal_n7mjw8.jpg")


e21 = Event.create(title: "Beer and Food Pairing Cooking Class", description: "Beer and Food Cooking Class	$95 Per Person Fri, 4/28/17	7pm-9:30pm
Many students want to learn how to cook great food with one of the oldest beverages known to mankind: Beer! Gourmet and Specialty Beers are all the rage and the abundance of varieties can be confusing to the consumer. In this class we will make an incredible meal and offer tastings of special beers from Chef Eric’s favorite purveyor to go with the food. Come enjoy the refreshing taste of beer with this delicious repast. Students will be making:
Garlic Grilled Shrimp Skewers with Vanilla-Saffron Sauce
Pan-Seared Chicken Cutlets with Jalapeno Garlic Sauce
Scallion-Cilantro Barley Pilaf with Chervil
Beer Braised Pork Loin with Shallots, Garlic, Onions, Sage and Thyme
White Cheddar Cheese Mashed Fingerling Potatoes
Oven-Roasted Broccoli with Olive Oil, Sundried Tomatoes and Garlic
Ancho Chile Devil’s Food Cupcakes with Chocolate Ganache Frosting", user_id: brandon.id , price: "$40", date: Date.new(2018, 1, 27), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490331086/https-_2F_2Fcdn.evbuc.com_2Fimages_2F16641886_2F20799000940_2F1_2Foriginal_n8qywa.jpg")

e4 = Event.create(title: "Vip tickets to Elvis Live!", description: "Wait what? Elvis? There is no way he is going to be on stage.... So then who's playing? Well, one way to find out! Join us Friday! We will be dancing and singing to Jailhouse Rock at 10pm sharp!! ", user_id: jenny.id, price: "$20", date: Date.new(2017, 11, 17), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490028961/elvis_pth2dy.jpg")

e23 = Event.create(title: "GOLDEN YOUTH: GOLDROOM LE YOUTH", description: "Los Angeles-based electronic outfit Goldroom make dreamy, synth-based electronic dance music. Formed in 2011, Goldroom is primarily the alias of electronic producer/songwriter Josh Legg, who previously fronted the similarly inclined trio NightWaves. As Goldroom, Legg released the self-produced Angeles EP in 2011. In 2013, he returned with the seven-track EP, Embrace, featuring vocalist Chela. Also in 2013, Legg added drummer Nick Sandler and keyboardist/vocalist Mereki Beach, transforming Goldroom into a live three-member ensemble.
More on Le Youth
90s sounds refracted through a thoroughly modern aesthetic. Tracks that are serious about moving a dance floor full of people without coming on too strong. Breezy California vibes touched by a twist of European flair. Wes James is the artist behind Le Youth.", user_id: john.id, price: "$20", date: Date.new(2018, 2, 2), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490331475/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29106385_2F149753314296_2F1_2Foriginal_nzuijn.jpg")

e24 = Event.create(title: "An International Retro-Jazz Celebration", description: "DoDo Band is a New York City-based miniature Band that blurs the lines between jazz, world and retro music. Made up of young musicians inspired by musical movements from all over the world -- samba, swing, Argentine tango, balkanica and reggae, to name a few -- DoDo Orchestra is a hip and cosmopolitan tribute to both international cultures and the retro styles of yesteryear. Experience their intoxicating blend of genres and sounds in this brunch show at New York's Club Groove.
Doors Open at 6:00pm, Showtime at 7:00pm
Please Print Your Voucher; Your Name will	be on a list at the Door, at entrance of the Club.
This show Will Take place at Club Groove - located on 125 Macdougal Street on the corner of W. 3rd. New York, NY 10012
Full Dinner Menu Available", user_id: jenny.id, price: "$10", date: Date.new(2018, 2, 3), location: "New York", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490331603/https-_2F_2Fcdn.evbuc.com_2Fimages_2F27149584_2F194501316904_2F1_2Foriginal_lry6ol.jpg")

e25 = Event.create(title: "The Reverend Shawn Amos", description: "The Reverend Shawn Amos is a Los Angeles-based, chart-topping bluesman ready to turn any venue into a 1960s’ Chicago blues club. His foot-stomping, harp-wailing performances, like tent revivals of yore, energize the faithful, and convert the wayward to the Rev’s message of booty-shakin’, deep joyful blues. The Rev came up in 1970s Los Angeles, at the feet of musical legends like Marvin Gaye and Quincy Jones, as well as all manner of Hollywood street folk. The son of music agent-turned entrepreneur, Wally “Famous” Amos, and R&B nightclub singer, Shirlee May, Shawn found music early, and has worked within it his entire life.", user_id: bob.id, price: "$70", date: Date.new(2018, 2, 22), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490331724/https-_2F_2Fcdn.evbuc.com_2Fimages_2F28946613_2F57113820621_2F1_2Foriginal_icml2f.jpg")
#
e26 = Event.create(title: "First Annual Athletics Golf Outing", description: "Athletics Golf Outing
Join The King's College Athletics Department for our First Annual Athletics Golf Outing on Thursday, May 4, 2017. Enjoy a day on the golf course with your friends and colleagues at New Jersey National while raising awareness for The King's College Athletics program in New York City. Proceeds from this event will support all athletic teams at King's, including: men's and women's Basketball, Cross Country, Golf, Soccer, and women's Volleyball.
Event Timeline
7:00 AM - Check-In Begins
7:30 AM - Continental Breakfast
9:00 AM - Shotgun Start
At Turn - Boxed Lunch
2:30 PM - Distribution of Prizes", user_id: scott.id , price: "$150", date: Date.new(2018, 2, 27), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490332533/https-_2F_2Fcdn.evbuc.com_2Fimages_2F27288966_2F53052433536_2F1_2Foriginal_goyava.jpg")
#
e27 = Event.create(title: "SF Tri Club Indoor Cycling Series", description: "Our indoor cycling program gives you access to a professionally-coached “spin” workout that is tailored specifically for triathletes. Our aim is to make you a better cyclist by focusing on strength, stamina, and technique – and along the way you’ll have a lot of fun! Spaces are limited. The only way to secure your slot is to complete payment here for the specific class you want to take. Classes are available ONLY to SF Tri Club members.
1) Wednesday evenings at 6:45 – 7:45 pm (60 min)
January 25-April 19, 2017
Slots are reserved for 0-60 members; any unclaimed spaces will be released January 15.
Price: included in 0-60 registration or $125 for 13-week class
2) Thursday mornings at 6 – 7 am (60 min)
January 26-April 20, 2017
15 slots with other studio clients in the mix
Price: $125 for 13-week class
3) Thursday mornings at 7 – 8 am (60 min)
January 26-April 20, 2017
15 slots with other studio clients in the mix
Price: $125 for 13-week class", user_id: nancy.id , price: "$70", date: Date.new(2018, 2, 27), location: "San Diego", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490332665/https-_2F_2Fcdn.evbuc.com_2Fimages_2F27102632_2F132905252681_2F1_2Foriginal_hiltpf.jpg")
#
e28 = Event.create(title: "Pitch Globally Sharktank Style", description: "Welcome to Pitch Globally Sharktank Style(www.meetup.com/pitchglobally), Silicon Valley's most well connected Sharktank Style event is starting a new monthly event in association with Roger King, Founder of Bay Angels, one of the most visible angel investors in SF who is also Chair of several other monthly events like VC Task Force. We envision this JV event to become the largest Sharktank Style event in SF Bay Area and eventually move to one of the largest clubs in SF from March or April every last FRiday of the month.
Pitch Globally is where strangers come and become lifelong friends with VC's, models, mentors, entrepreneurs etc. Watch our recent video where our co-host, Seline Elin of Comcast TV, is interviewing some leading Tech celebrities and investors ", user_id: jenny.id , price: "$70", date: Date.new(2018, 2, 27), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490332765/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29361160_2F166228591560_2F1_2Foriginal_ulm3vl.jpg")



e29 = Event.create(title: "Tech Network", description: "Join Us For A Night Of Tech Networking At Pez Catina in Downtown Los Angeles!
Join the fastest growing tech networking and startup community in Los Angeles! Meet new people and participate in lively discussions with outstanding names in the Los Angeles tech community. Register immediately for an Early Bird Ticket. (Each ticket holder gets 2 months FREE co-working at Cross Campus DTLA.)
Discounted Drinks (extended happy hour)
On-Site Parking
Please have a printed or mobile version of your ticket ready at the entrance. You'll be given a bracelet or sticker for discounted drinks.
Tickets to this event sell out very quickly! Register asap.
use code: knwevent for 10% off your purchase.
KNW is a huge supporter of women in tech. We're proud to say that all of our events have featured outstanding women in the Silicon Beach community. If you're interested in helping us empower more women entrepreneurs and women in business please stop by our event and let us know how you want to get involved.", user_id: brandon.id , price: "$20", date: Date.new(2018, 2, 27), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490332987/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29529367_2F143123235359_2F1_2Foriginal_ncthf3.jpg")

e30 = Event.create(title: "Hip Hop Massive Party", description: "21+ event.
We are taking over Fridays in San Francisco. Will be the largest Friday hip hop party EVERY month. 15 tables, best looking venue in San Francisco, the Bay's best DJs playing the best music, best looking crowd around. We bring together some of the biggest promoters and hosts in the Bay Area to combine to make one huge massive party every 1st Friday of the month. Can check out previous Take Over Fridays pictures to verify how great the party is at www.facebook.com/ShapEvents", user_id: scott.id , price: "$40", date: Date.new(2018, 3, 27), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490333226/https-_2F_2Fcdn.evbuc.com_2Fimages_2F29489732_2F133347295471_2F1_2Foriginal_o6rf96.jpg")

e31 = Event.create(title: "SF Beta: EdTech Edition", description: "Education is ripe for disruption, and technology is driving the way forward.
On July 19, you're invited to SF Beta: EdTech Edition, a demo night featuring 10 leading EdTech startups from Silicon Valley and beyond.
Our events, made by and for the founder & tech community, bring up-and-coming startups together with a welcoming community of founders, investors, developers, designers, dealmakers, and more.
$10 Presale Passes are now available!", user_id: john.id , price: "$10", date: Date.new(2018, 4, 27), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490333609/https-_2F_2Fcdn.evbuc.com_2Fimages_2F24276425_2F157247754704_2F1_2Foriginal_luvep5.jpg")

e32 = Event.create(title: "NEW SCHOOL DAZE LA", description: "#NewSchoolDaze is a celebration of success hosted by HBCU Young Alums, members of Greek Organizations and Tastemakers
Join HBCU Young Alums, Greeks, Millennials, Tastemakers, and All Party Goers for a night of nostalgia...with a twist! Hosted by the dopest creatives in Los Angeles!
DJ's will be mixing it up, hitting you with
CLASSICS and NEW BANGERS from EVERYWHERE!
VIBES BY DJ R-TISTIC + DJ BAD
Didn't attend an HBCU? Not about that Greek life? No Problem! This event is for ALL PARTY GOERS, Millennials, and Tastemakers!", user_id: jenny.id, price: "$10", date: Date.new(2018, 2, 27), location: "Los Angeles", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490333718/https-_2F_2Fcdn.evbuc.com_2Fimages_2F28872430_2F92870650525_2F1_2Foriginal_quuejk.jpg")

e33 = Event.create(title: "The Idea Stage II", description: "Our original Idea Stage event went so well that we're doing it again.
This event, for our second year in a row, focuses exclusively on companies at the idea stage – a rare opportunity to look at companies and opportunities in their earliest and most formative moments.
Throughout the night, you, the audience, will have the chance to engage with each Idea Team, along with our special lineup of mentors and judges, to help select the best new startup idea of 2017.
Want to present your idea at The Idea Stage? Apply to demo.
Hope to see you there!", user_id: john.id, price: "$100", date: Date.new(2018, 2, 27), location: "San Francisco", image_url: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490333839/https-_2F_2Fcdn.evbuc.com_2Fimages_2F28700932_2F157247754704_2F1_2Foriginal_qsdiys.jpg")

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
cl12 = CategoryListing.create(category_id: arts.id, event_id: e12.id)
cl13 = CategoryListing.create(category_id: arts.id, event_id: e13.id)
cl14 = CategoryListing.create(category_id: classes.id, event_id: e14.id)
cl15 = CategoryListing.create(category_id: arts.id, event_id: e15.id)
cl16 = CategoryListing.create(category_id: classes.id, event_id: e16.id)
cl17 = CategoryListing.create(category_id: classes.id, event_id: e17.id)
cl18 = CategoryListing.create(category_id: classes.id, event_id: e18.id)
cl19 = CategoryListing.create(category_id: food.id, event_id: e19.id)
cl20 = CategoryListing.create(category_id: food.id, event_id: e20.id)
cl21 = CategoryListing.create(category_id: food.id, event_id: e21.id)
cl22 = CategoryListing.create(category_id: music.id, event_id: e22.id)
cl23 = CategoryListing.create(category_id: music.id, event_id: e23.id)
cl24 = CategoryListing.create(category_id: music.id, event_id: e24.id)
cl25 = CategoryListing.create(category_id: music.id, event_id: e25.id)
cl26 = CategoryListing.create(category_id: sports.id, event_id: e26.id)
cl27 = CategoryListing.create(category_id: sports.id, event_id: e27.id)
cl28 = CategoryListing.create(category_id: networking.id, event_id: e28.id)
cl29 = CategoryListing.create(category_id: networking.id, event_id: e29.id)
cl30 = CategoryListing.create(category_id: parties.id, event_id: e30.id)
cl31 = CategoryListing.create(category_id: networking.id, event_id: e31.id)
cl32 = CategoryListing.create(category_id: parties.id, event_id: e32.id)
cl33 = CategoryListing.create(category_id: networking.id, event_id: e33.id)



#arts

Ticket.destroy_all
Ticket.create(user_id: john.id, event_id: e24.id)
Ticket.create(user_id: john.id, event_id: e13.id)
Ticket.create(user_id: john.id, event_id: e16.id)
Ticket.create(user_id: john.id, event_id: e22.id)

Bookmark.destroy_all
Bookmark.create(user_id: john.id, event_id: e22.id)
Bookmark.create(user_id: john.id, event_id: e3.id)
Bookmark.create(user_id: john.id, event_id: e8.id)
