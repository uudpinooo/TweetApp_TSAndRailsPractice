Rails.application.routes.draw do
  resources :tweets, only: [:index, :show, :create, :update, :destroy]
end
