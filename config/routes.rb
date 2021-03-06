Rails.application.routes.draw do
  # sessionのルーティング
  post "/login", to: "sessions#create"
  delete "/login", to: "sessions#destroy"

  # usersのルーティング
  scope module: :users do
    patch "/users", to: "users#update"
    resources :users, only: [:index, :show, :create, :destroy] do
      resources :favorites, only: [:index]
      get "followings", to: "follows#index_followings"
      get "followers", to: "follows#index_followers"
    end
  end

  # tweetsのルーティング
  scope module: :tweets do
    get "/tweets", to: "tweets#index_time_line"
    get "/tweets/:user_id", to: "tweets#index"
    resources :tweets, only: [:show, :create, :update, :destroy] do
      resources :favorites, only: [:create]
      delete "favorites", to: "favorites#destroy"
    end
  end

  # followsのルーティング
  scope :follows do
    post "/:id", to: "follows#create"
    delete "/:id", to: "follows#destroy"
  end
end
