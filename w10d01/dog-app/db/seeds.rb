# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the breeds"

25.times do
  Breed.create(
    breed: Faker::Creature::Dog.breed()
  )
end

puts "get the breeds from the database"

breeds = Breed.all()

puts "creating the dogs"

100.times do
  Dog.create(
    name: Faker::Creature::Dog.name,
    sound: Faker::Creature::Dog.sound,
    age: Faker::Creature::Dog.age,
    size: Faker::Creature::Dog.size,
    breed: breeds.sample
  )
end

puts "all done!"
