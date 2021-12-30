class Users::UsersController < ApplicationController
  def index
    users = User.all
    render json: {
      users: users
    }, status: :ok
  end

  def show
    user = User.find(user_id_params[:id])
    render json: {
      user: user
    }, status: :ok
  end

  def create
    user = User.new(user_params)
    user.save!
    render status: :created
  end

  def update
    user = User.find(current_user.id)
    user.update!(user_params)
    render status: :ok
  end

  def destroy
    user = User.find(user_id_params[:id])
    user.destroy
    render status: :no_content
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def user_id_params
    params.permit(:id)
  end
end
