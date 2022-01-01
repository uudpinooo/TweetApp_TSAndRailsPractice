class Tweets::TweetsController < ApplicationController
  def index
    followings_ids = current_user.followings.pluck(:id)
    followings_and_my_ids = followings_ids << current_user.id
    tweets = followings_ids.map do |id|
      Tweet.where(user_id: id)
    end
    tweets.flatten.each do |tweet|
      tweet["favorite_count"] = tweet.favorites.count
    end

    render json: {
      tweets: tweets
    }, status: :ok
  end

  def index_my_tweets
    tweets = current_user.tweets.all
    tweets.each do |tweet|
      tweet["favorite_count"] = tweet.favorites.count
    end

    render json: {
      tweets: tweets
    }, status: :ok
  end

  def show
    tweet = Tweet.find(tweet_id_params[:id])
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
    tweet = current_user.tweets.find(tweet_id_params[:id])
    tweet.update!(text: tweet_params[:text], user_id: current_user.id)
    render status: :ok
  end

  def destroy
    tweet = current_user.tweets..find(tweet_id_params[:id])
    tweet.destroy
    render status: :no_content
  end

  private

  def tweet_params
    params.permit(:text)
  end

  def tweet_id_params
    params.permit(:id)
  end
end
