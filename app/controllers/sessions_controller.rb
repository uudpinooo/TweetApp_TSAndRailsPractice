class SessionsController < ApplicationController
  def create
    user = User.find_by_email(session_params[:email])

    if user&.authenticate(session_params[:password])
      session[:user_id] = user.id
      render status: :ok
    else
      render status: :unauthorized
    end
  end

  def destroy
    reset_session
    render status: :no_content
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
