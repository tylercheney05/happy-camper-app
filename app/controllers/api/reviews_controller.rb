class Api::ReviewsController < ApplicationController
    before_action :set_campground
    before_action :set_review, except: [:index, :create]

    def index
      render json: @campground.review.all
    end
    
    def show
      render json: @review
    end
    
    def create
      @review = @campground.review.new(review_params)
      if @review.save
        render json: @review
      else
        render json: { errors: @review.errors }, status: :unprocessable_entity
      end
    end
    
    def update
      @review.find(params[:id])
      if @review.update(campground_params)
        render json: @review
      else
        render json: { errors: @review.errors }, status: :unprocessable_entity
      end
    end
    
    def destroy
      @review.find(params[:id]).destroy
      render json: { message: 'review deleted' }
    end
      
    private
      def review_params
        params.require(:review).permit(:title, :body, :rating)
      end

      def set_campground
        @campground = Campground.find(params[:campground_id])
      end

      def set_review
        @review = @campground.reviews.find(params[:id])
      end

end
