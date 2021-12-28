class TweetsController < ApplicationController
  def index
    tweets = current_user.tweets.all
    render json: {
      tweets: tweets
    }, status: :ok
  end

  def show
    tweet = Tweet.find(params[:id])
    render json: {
      tweet: tweet
    }, status: :ok
  end

  def create
    tweet = current_user.tweets.new(text: tweet_params[:text], user_id: current_user.id)
    tweet.save!
    render status: :created
  end

  def update
    tweet = current_user.tweets.find(params[:id])
    tweet.update!(text: tweet_params[:text], user_id: current_user.id)
    render status: :ok
  end

  def destroy
    tweet = current_user.tweets..find(params[:id])
    tweet.destroy
    render status: :no_content
  end

  private

  def tweet_params
    params.permit(:text)
  end
end
