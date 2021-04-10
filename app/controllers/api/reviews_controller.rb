class Api::ReviewsController < ApplicationController
  before_action :set_campground, only: [:index]
  before_action :set_review, except: [:index, :create]

  def index 
      render json: @campground.reviews
  end

  def show 
      render json: @review
  end

  def create
      @review = @campground.reviews.new(review_params)
      if @review.save
          render json: @review
      else
          render json: { errors: @review.errors }, status: :unprocessable_entity
      end
  end

  def update
      if @review.update(review_params)
          render json: @review

      else
          render json: { errors: @review.errors }, status: :unprocessable_entity
      end
  end

  def destroy
      @review.destroy
      render json: { message: 'review deleted' }
  end

  private
      def review_params
          params.require(:review).permit(:title, :body, :rating)
      end

      def set_campground
          @campground = Campground.find(params[:campground_id])
      end

      def set_service
          @review = Review.find(params[:id])
      end

end
