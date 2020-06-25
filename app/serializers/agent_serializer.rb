class AgentSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :department, :status
  belongs_to :user
  has_many :tickets
  has_many :comments
end
