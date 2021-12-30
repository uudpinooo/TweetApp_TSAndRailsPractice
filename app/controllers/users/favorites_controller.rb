class Users::FavoritesController < ApplicationController
  def index
    favorites = Favorite.where(user_id: favorite_id_params[:user_id])
    render json: {
      favorites: favorites
    }, status: :ok
  end

  private

  def favorite_id_params
    params.permit(:user_id)
  end
end
