class Ticket < ApplicationRecord
  include PublicActivity::Model
  tracked

  belongs_to :user, class_name: "User", foreign_key: "user_id"
  has_many :comments, class_name: "Comment", foreign_key: "ticket_id"

  validates :subject, presence: true
  validates :description, presence: true
  validates :department, presence: true
  validates :user_id, presence: true
  
  before_create :assign_support_agent

  scope :closed_in_the_last_one_month, -> { where(
                                            "closed_at <= :start_date AND closed_at >= :end_date", 
                                            {start_date: DateTime.current, 
                                            end_date: DateTime.current.months_ago(1)}
                                            ) }
  

  def closed?
    status == "closed"
  end

  def open?
    status == "open"
  end

  def self.to_csv
    attributes = %w{id subject description department created_at closed_at}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |ticket|
        csv << ticket.attributes.values_at(*attributes)
      end
    end
  end

  private

  def assign_support_agent
    self.agent_id = get_available_agent.id
  end

  def get_available_agent
    unless get_available_agents_by_department.blank?
      @available_agents_by_department.sample
    else
      get_available_agent
    end
  end

  def get_available_agents_by_department
    @available_agents_by_department = Agent.available_agents_by_department(self.department)
  end

  def get_available_agent
    return Agent.all_available_agents.sample if Agent.all_available_agents.present?
    fallback
  end

  def fallback
    User.administrators.first
  end
end
