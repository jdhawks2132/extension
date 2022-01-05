puts 'Seeding courses...'

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
