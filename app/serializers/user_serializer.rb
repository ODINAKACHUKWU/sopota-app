class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :is_admin, :is_agent
end
