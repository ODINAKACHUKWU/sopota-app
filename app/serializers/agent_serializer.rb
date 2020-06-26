class AgentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :is_available, :department
  belongs_to :user
  has_many :tickets
end
