Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  get "/login", to: "sessions#test"
  delete "/login", to: "sessions#destroy"
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :tweets, only: [:index, :show, :create, :update, :destroy]
end
