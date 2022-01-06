Course.destroy_all
Review.destroy_all

puts 'Seeding courses...'

User.create(
	email: 'jessie@user.com',
	username: 'jessie',
	password: '123',
	admin: false
)
User.create(
	email: 'obie@user.com',
	username: 'obie',
	password: '123',
	admin: true
)
User.create(
	email: 'joshua@user.com',
	username: 'joshua',
	password: '123',
	admin: true
)
User.create(
	email: 'rodrigo@user.com',
	username: 'rodrigo',
	password: '123',
	admin: true
)
puts '✅ Done seeding users!'

Course.create(
	name: 'Ruby on Rails',
	platform: 'Web Development',
	description: 'Learn how to build web applications with Ruby on Rails',
)

Course.create(
	name: 'JavaScript',
	platform: 'Web Development',
	description: 'Learn how to build web applications with JavaScript',
)

Course.create(
	name: 'PostgreSQL',
	platform: 'Databases',
	description: 'Learn how to construct and query a PostgreSQL database',
)

Course.create(
	name: 'Python',
	platform: 'Data Science',
	description: 'Learn how to build data science applications with Python',
)

Course.create(
	name: 'COBOL',
	platform: 'Data Science',
	description: 'Learn how to build data science applications with COBOL',
)
puts '✅ Done seeding courses!'

puts 'Seeding Reviews'

Review.create(
	stars: '4',
	comment: 'Great Course - I learned so much!',
	user_id: '1',
	course_id: Course.all.sample.id,
)

Review.create(
	stars: '3',
	comment: 'Pace was very fast',
	user_id: '2',
	course_id: Course.all.sample.id,
)

Review.create(
	stars: '5',
	comment: 'This was very helpful',
	user_id: '2',
	course_id: Course.all.sample.id,
)

Review.create(
	stars: '2',
	comment: 'Could be better',
	user_id: '3',
	course_id: '3',
)

Review.create(
	stars: '4',
	comment: 'Loved - highly recommend',
	user_id: '2',
	course_id: Course.all.sample.id,
)

Review.create(
    stars: '2',
    comment: 'Much wow',
    user_id: '2',
    course_id: Course.all.sample.id,
)
Review.create(
    stars: '3',
    comment: 'Fascinating',
    user_id: '3',
    course_id: Course.all.sample.id,
)
Review.create(
    stars: '2',
    comment: 'Mucho bueno',
    user_id: '4',
    course_id: Course.all.sample.id,
)

puts '✅ Done seeding reviews!'