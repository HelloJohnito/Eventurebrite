class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render 'api/events/index'
  end

  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  def create
    @event = Event.new(event_params)
    if @event.save
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
