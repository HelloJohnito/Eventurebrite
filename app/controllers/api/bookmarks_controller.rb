class Api::BookmarksController < ApplicationController

  def index
    @bookmarks = current_user.bookmarks
    render 'api/bookmarks'
  end

  def show
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)

    # @bookmark.event_id = params[:bookmark][:eventId]
    # current_user.bookmarks = @bookmark.id
    if @bookmark.save
      render 'api/bookmarks'
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  # how to remove from user.bookmarks
  def destroy
    
  end

  def bookmark_params
    params.require(:bookmark).permit(:event_id)
  end

end
