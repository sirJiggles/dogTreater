
# Create the users
gareth = User.create(name: 'Gareth Fuller')
lisa = User.create(name: 'lisa Jungen')

# Create some fake treats
pelet = Treat.create(name: 'Pelet thing', size: 'small', health: 2)
salmon_special = Treat.create(name: 'Salmon Special', size: 'small', health: 5)

duck_stick = Treat.create(name: 'Duck Stick', size: 'medium', health: 3)
chicken_stick = Treat.create(name: 'Chicken Stick', size: 'medium', health: 4)

fish_in_chicken = Treat.create(name: 'Fish wrapped in chicken', size: 'large', health: 4)
bone = Treat.create(name: 'Bone', size: 'large', health: 2)


# Create some sessions of treats with the sample users
session1 = Session.create(user: gareth, treat: pelet, created_at: 1.days.ago)
session2 = Session.create(user: lisa, treat: chicken_stick, created_at: 2.days.ago)
session2 = Session.create(user: lisa, treat: duck_stick, created_at: 3.days.ago)
