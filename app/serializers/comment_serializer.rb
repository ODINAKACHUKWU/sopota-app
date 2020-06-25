class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :ticket_id, :user_id, :created_at
  belongs_to :ticket
  belongs_to :user
end
