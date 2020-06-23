class AgentSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :department, :status
end
