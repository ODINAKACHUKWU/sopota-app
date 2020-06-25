class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :department, :status, :agent_id, :created_at, :closed_at
  belongs_to :user
  has_many :comments
end
