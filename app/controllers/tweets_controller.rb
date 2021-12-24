class TweetsController < ApplicationController
  def index
    tweets = Tweet.all
    render json: {
      tweets: tweets
    }
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
