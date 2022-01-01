class Tweet < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy
  
  validates :text, presence: true
  validates :favorite_count, presence: true, numericality: { only_integer: true }
  validates :user_id, presence: true
end
