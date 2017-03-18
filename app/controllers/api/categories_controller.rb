class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      #CategoryListing.create(category_id: @category_id, event_id: ??)
      render json: @category
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def category_params
    params.require(:category).permit(:category)
  end

end
