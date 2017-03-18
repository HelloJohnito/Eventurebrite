class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render 'api/categories/index'
  end

  def show
    @category = Category.find(params[:id])
    render 'api/categories/show'
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      #CategoryListing.create(category_id: @category_id, event_id: ??)
      render 'api/categories/show'
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def category_params
    params.require(:category).permit(:category)
  end

end
