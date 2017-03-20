class Api::TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.user_id = current_user.id
    if @ticket.save
      render "api/tickets/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket.find(params[:id])
    @ticket.destroy
    render "api/tickets/show"
  end

  def ticket_params
    params.require(:ticket).permit(:event_id)
  end
end
