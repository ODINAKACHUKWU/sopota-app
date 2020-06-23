class V1::TicketsController < ApplicationController
  def create
    @ticket = current_user.tickets.create!(ticket_params)
    json_response(@ticket, :created)
  end

  def show
  end

  private

  def ticket_params
    params.permit(:subject, :description, :department)
  end  
end
