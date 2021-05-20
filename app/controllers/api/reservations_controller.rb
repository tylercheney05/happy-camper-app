class Api::ReservationsController < ApplicationController
  before_action :authenticate_user!

    def index
      render json: current_user.reservations.all
    end
  
    def create 
      @reservation = current_user.reservations.new(reservation_params)
      if @reservation.save
        render json: @reservation
      else
        render json: { errors: @reservation.errors}, status: :unprocessable_entity
      end
    end
  
    def update 
      @reservation = current_user.reservations.find(params[:id])
      if @reservation.update(reservation_params)
        render json: @reservation
      else
        render json: { errors: @reservation.errors}, status: :unprocessable_entity
      end
    end
  
    def destroy 
      @reservation = current_user.reservations.find(params[:id])
      @reservation.destroy
      render json: { message: 'Reservation Deleted!' }
    end

    def userReservations
      @user = User.find(params[:id])
      render json: @user.reservations
    end
  
    private 
      def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :notes)
      end
  
end
