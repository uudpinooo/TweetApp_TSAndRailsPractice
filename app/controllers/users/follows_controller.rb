class Users::FollowsController < ApplicationController
  def index_followings
    user = User.find(user_params[:user_id])
    followings = user.followings
    render json: {
      followings: followings
    }, status: :ok
  end

  def index_followers
    user = User.find(user_params[:user_id])
    followers = user.followers
    render json: {
      followers: followers
    }, status: :ok
  end

  private

  def user_params
    params.permit(:user_id)
  end
end
