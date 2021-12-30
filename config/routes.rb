Rails.application.routes.draw do
  # sessionのルーティング
  post "/login", to: "sessions#create"
  delete "/login", to: "sessions#destroy"

  # usersのルーティング
  scope module: :users do
    resources :users, only: [:index, :show, :create, :update, :destroy] do
      resources :favorite, only: [:index, :create, :destroy]
    end
  end

  # tweetsのルーティング
  scope module: :tweets do
    resources :tweets, only: [:index, :show, :create, :update, :destroy] do
      get "/favorite", to: "favorite#index"
      resources :favorites, only: [:index]
    end
  end
end
