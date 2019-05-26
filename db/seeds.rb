# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


therapists = [
  {
    name: "Pero Kim",
    email: "pero@test.com",
    phone: 1234567890,
    discipline: "Occupational Therapist"
  },
  {
    name: "Spongebob Spuarepants",
    email: "spongebob@test.com",
    phone: 9876543211,
    discipline: "Occupational Therapist"
  }
]

therapists.each do |therapist|
  Therapist.create(therapist)
end
