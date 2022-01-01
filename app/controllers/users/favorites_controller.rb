class Users::FavoritesController < ApplicationController
  def index
    favorite_logs = Favorite.where(user_id: favorite_params[:user_id])
    favorites = (favorite_logs.map do |favorite_log|
      Tweet.where(id: favorite_log.tweet_id)
    end).flatten

    render json: {
      favorites: favorites
    }, status: :ok
  end

  private

  def favorite_params
    params.permit(:user_id)
  end
end
