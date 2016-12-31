# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: "Example User",
			 email: "example@gmail.com",
			 password: "foobar980",
			 password_confirmation: "foobar980")

99.times do |n|
	name = Faker::Name.name
	email = "example#{n+1}@railstutorial.org"
	password = "password980"
	User.create!(name: name,
				 email: email,
				 password: password,
				 password_confirmation: password)
end

City.create!(city: "Dhanbad")

20.times do |n|
	name = "City #{n}"
	City.create!(city: name)
end


Category.create!(cat: "National")
20.times do |n|
	name = "Category #{n}"
	Category.create!(cat: name)
end

user_id = rand(1..User.count-1)
category_id = rand(1..Category.count-1)
city_id = rand(1..City.count-1)
Article.create!(heading: "Whatever Post", post: "Whatever post is this. just post it!", likes: 44, user_id: user_id, category_id: category_id, city_id: city_id)

50.times do |n|
	user_id = rand(1..User.count-1)
	category_id = rand(1..Category.count-1)
	city_id = rand(1..City.count-1)

	sentence = Faker::Lorem.sentence
	heading = Faker::Lorem.words(3).join(" ")
	Article.create!(heading: heading, post: sentence, likes: rand(100), user_id: user_id, category_id: category_id, city_id: city_id)
end