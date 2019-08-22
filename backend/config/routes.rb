Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  # post "/creatuser" => "users#create", :as => :create_user
  
  post '/login', to: 'users#authenticate'
  post '/signup', to: 'users#create'
end
