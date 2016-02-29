# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Create the users
gareth = User.crate(name: 'Gareth Fuller')
lisa = User.create(name: 'lisa Jungen')

# Create some fake treats
pelet = Treat.create(name: 'Pelet thing', type: 'small', health: 2)
salmon_special = Treat.create(name: 'Salmon Special', type: 'small', health: 5)

duck_stick = Treat.create(name: 'Duck Stick', type: 'medium', health: 3)
chicken_stick = Treat.create(name: 'Chicken Stick', type: 'medium', health: 4)

fish_in_chicken = Treat.create(name: 'Fish wrapped in chicken', type: 'large', health: 4)
bone = Treat.create(name: 'Bone', type: 'large', health: 2)


# Create some sessions of treats with the sample users
