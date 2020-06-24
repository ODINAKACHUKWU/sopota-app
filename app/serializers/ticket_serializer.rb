class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :department, :status, :agent_id, :created_at, :closed_at
end
