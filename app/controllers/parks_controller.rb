class ParksController < ApplicationController
  require 'rest-client'

  def get_parks
    url = 'https://developer.nps.gov/api/v1/parks?stateCode=UT&api_key=apeguD7P4hmnlKJTHcF5XKRcuuzkMx46ezBwAT1J'
    response = RestClient.get(url)
    render json: response
  end
end
