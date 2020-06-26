class V1::AgentsController < ApplicationController
  before_action :set_agent, only: [:index, :export]

  def index
    @tickets = @agent.tickets
    json_response(@tickets)
  end

  def show
    @agent = Agent.find(params[:id])
    json_response(@agent)
  end

  def export
    @tickets = @agent.tickets.closed_in_the_last_one_month
    json_response(@tickets)
  end

  def set_agent
    @agent = Agent.find_by(user_id: current_user.id)
  end
end
