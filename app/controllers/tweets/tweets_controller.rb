class Tweets::TweetsController < ApplicationController
  def index
    tweets = current_user.tweets.all
    tweets.each do |tweet|
      tweet["favorite_count"] = tweet.favorites.count
    end

    render json: {
      tweets: tweets
    }, status: :ok
  end

  def show
    tweet = Tweet.find(params[:id])
    tweet["favorite_count"] = tweet.favorites.count
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
