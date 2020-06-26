
# All default users in the database. You can log in with any of these credentials
#NOTE: Except the first two users (John and James), you can log in with other credentials as support agent
users = [
  { email: "john@email.com", password: "john123", first_name: "John", last_name: "Norland" },
  { email: "james@email.com", password: "james123", first_name: "James", last_name: "Bright" },
  { email: "peter@email.com", password: "peter123", first_name: "Peter", last_name: "Goodness" },
  { email: "andrew@email.com", password: "andrew123", first_name: "Andrew", last_name: "Favour" },
  { email: "philip@email.com", password: "philip123", first_name: "Philip", last_name: "Newman" },
  { email: "maxwell@email.com", password: "maxwell123", first_name: "Maxwell", last_name: "Greatness" },
  { email: "chika@email.com", password: "chika123", first_name: "Chika", last_name: "Hycinth" },
  { email: "jane@email.com", password: "jane123", first_name: "Jane", last_name: "Eden" },
  { email: "matthew@email.com", password: "matthew123", first_name: "Matthew", last_name: "Otedola" },
  { email: "thomas@email.com", password: "thomas123", first_name: "Thomas", last_name: "Bukola" },
  { email: "bernard@email.com", password: "bernard123", first_name: "Bernard", last_name: "Oshiomole" },
  { email: "rose@email.com", password: "rose123", first_name: "Rose", last_name: "Joseph" },
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

users.each { |user| User.create(email: user[:email], password: user[:password]) }

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

users.each { |user| User.find_by(email: user[:email]).update(first_name: user[:first_name], last_name: user[:last_name]) }
