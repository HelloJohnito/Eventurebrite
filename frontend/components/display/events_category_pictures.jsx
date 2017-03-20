import React from 'react';
import { Link } from 'react-router';


const EventsCategoryPictures = () => (
  <div className="category-pictures-outer">

    <div className="category-pictures-title">Browse by Categories</div>

    <div className="category-pictures-inner">

      <div className="category-pictures-outer-large">
        <Link to="/browse/sports">
          <div className="category-pictures-sports">
            <img className="sports-picture" src="http://www.pinnacleadventure.co.uk/perch/resources/cycletoursedinburgh.jpg"/>
            <div className="category-pictures-sports-title">Sports</div>
            <span className="category-pictures-sports-description">
              Snowboard, Bike, Surf
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-small">
        <Link to="/browse/networking">
          <div className="category-pictures-networking">
            <img className="networking-picture" src="http://www.bloggedtopics.com/wp-content/uploads/2016/12/customers-business-320x220.jpg"/>
            <div className="category-pictures-networking-title">Networking</div>
            <span className="category-pictures-networking-description">
              Business Mixers, Hobby Meetups, Panel Discussions
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-small">
        <Link to="/browse/classes">
          <div className="category-pictures-classes">
            <img className="classes-picture" src="https://i1.wp.com/sosphysiotherapy.ca/wp-content/uploads/2013/03/yoga.jpg?fit=320%2C220" />
            <div className="category-pictures-classes-title">Classes</div>
            <span className="category-pictures-classes-description">
              Breakdance, Yoga, Fitness
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-small">
        <Link to="/browse/arts">
          <div className="category-pictures-arts">
            <img className="arts-picture" src="http://www.advaitastoian.com/wp-content/themes/MainEvents/timthumb.php?src=http://www.advaitastoian.com/wp-content/uploads/2013/12/yogacampcostinesti2013.jpg&h=220&w=350&zc=1&q=100"/>
            <div className="category-pictures-arts-title">Arts</div>
            <span className="category-pictures-arts-description">
              Art Exhibitions, Comedy Nights, Plays
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-small">
        <Link to="/browse/parties">
          <div className="category-pictures-parties">
            <img className="parties-picture" src="http://www.nappertandysirishpub.com/napperscatering/images/Birthday-Parties.jpg" />
            <div className="category-pictures-parties-title">Parties</div>
            <span className="category-pictures-parties-description">
              Casual Nights Out, Happy Hours, Themed Parties
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-small">
        <Link to="/browse/music">
          <div className="category-pictures-music">
            <img className="music-picture" src="http://cdn.ebaumsworld.com/thumbs/2012/11/02/083113/82887930/concerz.jpg" />
            <div className="category-pictures-music-title">Music</div>
            <span className="category-pictures-music-description">
              Music Festivals, Dance Parties, Live Concerts
            </span>
          </div>
        </Link>
      </div>

      <div className="category-pictures-outer-large">
        <Link to="/browse/food">
          <div className="category-pictures-food">
            <img className="food-picture" src="https://www.designholidays.co.uk/wp-content/uploads/2014/10/vidamar-madeira-15.jpg"/>
            <div className="category-pictures-food-title">Food</div>
            <span className="category-pictures-food-description">
              Tastings, Food Challenges, Dinner Parties
            </span>
          </div>
        </Link>
      </div>

    </div>

  </div>

);


export default EventsCategoryPictures;
