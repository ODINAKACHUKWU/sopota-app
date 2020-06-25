class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :is_admin, :is_agent
  has_many :tickets
  has_many :comments
end
