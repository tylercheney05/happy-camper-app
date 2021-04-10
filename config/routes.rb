Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :campgrounds 
    resources :users do
      resources :reservations , only: [:index, :new, :create, :destroy]
    end
  
    resources :campgrounds do
      resources :reviews
    end
  end
end
