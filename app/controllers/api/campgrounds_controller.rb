class Api::CampgroundsController < ApplicationController

  def index
    render json: Campground.all
  end

  def show
    @campground = Campground.find(params[:id])
    render json: @campground
  end

  def create
    @campground = Campground.new(campground_params)
    if @campground.save
      render json: @campground
    else
      render json: { errors: @campground.errors }, status: :unprocessable_entity
    end
  end

  def update
    @campground = Campground.find(params[:id])
    if @campground.update(campground_params)
      render json: @campground
    else
      render json: { errors: @campground.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Campground.find(params[:id]).destroy
    render json: { message: 'campground deleted' }
  end
  
  private
    def campground_params
      params.require(:campground).permit(:name)
    end
end
