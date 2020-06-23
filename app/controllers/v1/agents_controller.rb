class V1::AgentsController < ApplicationController
  def index
    # All tickets assigned to this agent
  end

  def report
    # All tickets closed in the last one month
  end
  # tickets = Ticket.where("closed_at <= :start_date AND closed_at >= :end_date", {start_date: DateTime.current, end_date: DateTime.current.months_ago(1)})
end
