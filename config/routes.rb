Rails.application.routes.draw do
  
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :fragrances, only: [:index, :show] do 
    resources :ratings, shallow: true
  end
  # post '/ratings/:fragrance_id/new', to: 'ratings#create'
  # put '/ratings/:ratings_id/fragrances/:id', to: 'fragrances#add_rating_to_fragrances'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
