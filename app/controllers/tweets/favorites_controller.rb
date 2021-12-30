class Tweets::FavoritesController < ApplicationController
  def index
    favorites = Favorite.where(tweet_id: favorite_params[:tweet_id])
    render json: {
      favorites: favorites
    }, status: :ok
  end

  def create
    favorite = Favorite.new(tweet_id: favorite_params[:tweet_id], user_id: current_user.id)
    favorite.save!
    render status: :ok
  end

  def destroy
    favorite = Favorite.find_by(tweet_id: favorite_params[:tweet_id], user_id: current_user.id)
    favorite.destroy
    render status: :no_content
  end

  private

  def favorite_params
    params.permit(:tweet_id)
  end
end
