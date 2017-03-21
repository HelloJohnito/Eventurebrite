class Api::EventsController < ApplicationController

  def index
    if params[:category]
      @events  = Event.joins(:categories).where("categories.category = ?", params[:category]).limit(params[:limit])

      # @events = Event.find_by_sql(<<-SQL)
      #   SELECT *
      #   FROM events
      #   JOIN category_listings
      #     ON category_listings.event_id = events.id
      #   JOIN categories
      #     ON categories.id = category_listings.category_id
      #   WHERE categories.category = '#{params[:category]}'
      #   GROUP BY events
      #   LIMIT #{params[:limit]}
      # SQL
    else
      @events = Event.limit(params[:limit]) || Event.all
    end

    render 'api/events/index'
  end


  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  def create

    @event = Event.new(event_params)
    @event.user_id = current_user.id

    if @event.save
      CategoryListing.create(category_id: params[:event][:category_id].to_i, event_id: @event.id)
      # @event.category_ids = [params[:events][:category_id]]
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update(event_params)
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render "api/events/show"
  end

  def event_params
    params.require(:event).permit(:title, :description, :price, :date, :location, :image_url)
  end
end
