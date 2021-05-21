rating_array = (1..5).to_a
sites_array = (5..30).to_a
price_array = (0..75).to_a
boolean_array = (0..1).to_a
user_number = 0

5.times do
  user = User.create(
    name: Faker::FunnyName.name,
    email: "test#{user_number}@email.com",
    password: 'password'
  )
  user_number = user_number + 1
  campground = Campground.create(
    name: Faker::Mountain.name,
    location: Faker::Address.city + ', ' + Faker::Address.state_abbr,
    description: Faker::ChuckNorris.fact,
    sites: sites_array.sample,
    price: price_array.sample,
    shower: boolean_array.sample,
    bathroom: boolean_array.sample,
    hookups: boolean_array.sample
  )
  5.times do
    Reservation.create(
      start_date: Faker::Date.in_date_period,
      end_date: Faker::Date.in_date_period,
      notes: Faker::Lorem.paragraph,
      user_id: user.id,
      campground_id: campground.id
    )
    Review.create(
      title: Faker::Name.name,
      body: Faker::Lorem.paragraph,
      rating: rating_array.sample,
      campground_id: campground.id
    )
  end
end

puts "Data Seeded"
