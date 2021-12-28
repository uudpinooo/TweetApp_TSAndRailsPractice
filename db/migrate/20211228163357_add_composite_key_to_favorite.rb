class AddCompositeKeyToFavorite < ActiveRecord::Migration[6.1]
  def change
    add_index :favorites, [:tweet_id, :user_id], unique: true
  end
end
