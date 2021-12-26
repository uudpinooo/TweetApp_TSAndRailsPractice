class TweetsController < ApplicationController
  def index
    tweets = Tweet.all
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
    tweet = Tweet.new(tweet_params)
    tweet.save!
    render status: :created
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update!(tweet_params)
    render status: :ok
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy
    render status: :no_content
  end

  private

  def tweet_params
    params.permit(:text, :user_id)
  end
end
