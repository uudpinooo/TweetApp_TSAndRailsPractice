class ChangeTweetsReferenceFromAuthorToUser < ActiveRecord::Migration[6.1]
  def change
    remove_reference :tweets, :author, index: true
    add_reference :tweets, :user, foreign_key: true
  end
end
