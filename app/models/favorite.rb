class Favorite < ApplicationRecord
  belongs_to :tweet
  belongs_to :user

  validates :tweet_id, presence: true, numericality: { only_integer: true }
  validates :user_id, presence: true, numericality: { only_integer: true }
  validates: tweet_id, uniqueness: { scope: :user_id }
end
