# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

array = Array.new(10) {|n| n += 1 }

array.each do |i|
  User.find_or_create_by!(email: "test#{i}@sample.com") do |user|
    user.name = "やまだはなこ_#{i}"
    user.email = "test#{i}@sample.com"
    user.password = "11111111"
    user.password_digest = "11111111"
  end
end

if Tweet.count < 1
  array.each do |i|
    Tweet.create!(
      text: "#{i}ツイートの表示#{i}ツイートの表示#{i}ツイートの表示#{i}ツイートの表示",
      favorite_count: 0,
      user: User.find_by_email("test#{i}@sample.com")
    )
  end
end
