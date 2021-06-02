class CampgroundsController < ApplicationController
  require 'rest-client'

  def get_campgrounds
    url = "https://developer.nps.gov/api/v1/campgrounds?stateCode=#{params[:stateCode]}&api_key=#{ENV['NPS_API_KEY']}"
    response = RestClient.get(url)
    render json: response
  end

  def get_campground
    url = "https://developer.nps.gov/api/v1/campgrounds?stateCode=&q=#{params[:campground_id]}&api_key=#{ENV['NPS_API_KEY']}"
    response = RestClient.get(url)
    render json: response
  end
end
