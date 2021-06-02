Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users do
      resources :reservations
    end
    
    get 'userReservations/:id', to: 'reservations#userReservations'
  end
  get '/parks', to: 'parks#get_parks'
  get '/campgrounds/:stateCode', to: 'campgrounds#get_campgrounds'
  get '/reservations/:campground_id', to: 'campgrounds#get_campground'
  resources :parks
  # resources :campgrounds
end
