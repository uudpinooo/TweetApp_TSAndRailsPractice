class FollowsController < ApplicationController
  def create
    current_user.active_relationships.create!(followed_id: followed_params[:id])
    render status: :ok
  end

  def destroy
    relationship = current_user.active_relationships.find_by(followed_id: followed_params[:id])
    relationship.destroy
    render status: :no_content
  end

  private

  def followed_params
    params.permit(:id)
  end
end
