
# All default users in the database. You can log in with any of these credentials
#NOTE: Except the first two users (John and James), uou can log in with other credentials as support agent
users = [
  { email: "john@email.com", password: "john123", first_name: "John" },
  { email: "james@email.com", password: "james123", first_name: "James" },
  { email: "peter@email.com", password: "peter123", first_name: "Peter" },
  { email: "andrew@email.com", password: "andrew123", first_name: "Andrew" },
  { email: "philip@email.com", password: "philip123", first_name: "Philip" },
  { email: "maxwell@email.com", password: "maxwell123", first_name: "Maxwell" },
  { email: "chika@email.com", password: "chika123", first_name: "Chika" },
  { email: "jane@email.com", password: "jane123", first_name: "Jane" },
  { email: "matthew@email.com", password: "matthew123", first_name: "Matthew" },
  { email: "thomas@email.com", password: "thomas123", first_name: "Thomas" },
  { email: "bernard@email.com", password: "bernard123", first_name: "Bernard" },
  { email: "rose@email.com", password: "rose123", first_name: "Rose" },
]

it_agents = users.slice(2, 3)
sales_agents = users.slice(5, 3)
support_agents = users.slice(8, 4)

# Default admin account. You can log in with this credentials to test admin features
User.create(
  email: "admin@email.com",
  password: "admin123",
  is_admin: true
)

users.each { |user| User.create(email: user[:email], password: user[:password], first_name: user[:first_name]) }

it_agents.each do |agent|
  user = User.find_by(email: agent[:email])
  Agent.create(department: "IT/Technical", user_id: user.id)
end

support_agents.each do |agent|
  user = User.find_by(email: agent[:email])
  Agent.create(department: "Support/Customer care", user_id: user.id)
end

sales_agents.each do |agent|
  user = User.find_by(email: agent[:email])
  Agent.create(department: "Sales/Marketing", user_id: user.id)
end
