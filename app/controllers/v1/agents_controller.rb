class V1::AgentsController < ApplicationController
  # skip_before_action :authorize_request
  before_action :set_agent

  def index
    # All tickets assigned to this agent
  end

  def export
    @tickets = @agent.tickets.closed_in_the_last_one_month
    json_response(@tickets)
    # @tickets = Ticket.closed_in_the_last_one_month
    p ">>>>>>>>>+++++++++", @tickets
    # respond_to do |format|
    #   format.html
    #   format.csv { send_data @tickets.to_csv, filename: "tickets-#{Date.today}.csv" }
    #   format.json
    # end
  end

  def set_agent
    @agent = Agent.find_by(user_id: current_user.id)
  end
end
