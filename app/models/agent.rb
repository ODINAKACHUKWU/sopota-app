class Agent < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: "user_id"
  has_many :tickets, class_name: "Ticket", foreign_key: "agent_id"

  validates :department, presence: true
  validates :user_id, presence: true

  after_create :update_user

  scope :available_agents_by_department, ->(department) { where(is_available: true, department: department)}
  scope :all_available_agents, -> { where(is_available: true) }
  
  def available?
    is_available
  end

  private
  
  def update_user
    user = User.find(user_id)
    user.is_agent = true
    user.save
  end
end
