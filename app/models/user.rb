class User < ApplicationRecord
  has_secure_password
  has_many :tweets
  has_many :favorites
  has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship", foreign_key: "followed_id", dependent: :destroy
  has_many :followings, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships

  validates :name, presence: true
  validates :email, presence: true, uniqueness:  true
  validates :password, presence: true, length: { minimum: 8 }
end
