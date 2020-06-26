class Comment < ApplicationRecord
  belongs_to :ticket, class_name: "Ticket", foreign_key: "ticket_id"
  belongs_to :user, class_name: "User", foreign_key: "user_id"

  validates :comment, presence: :true
  validates :ticket_id, presence: :true

  before_create :check_for_agents_comment

  private

  def check_for_agents_comment
    user = User.find(user_id)
    comments = Ticket.find(ticket_id).comments
    unless user.is_agent || comments.present?
      raise ExceptionHandler::NoAgentComment, Message.no_agent_comment
    end
  end
end
