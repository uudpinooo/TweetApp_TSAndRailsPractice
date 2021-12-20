class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.text :text, null:false
      t.string :favorite_count, default: 0
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
