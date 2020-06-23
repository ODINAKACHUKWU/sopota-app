class V1::TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :update]

  def create
    @ticket = current_user.tickets.create!(ticket_params)
    json_response(@ticket, :created)
  end

  def show
    json_response(@ticket)
  end

  def update
    if @ticket.update(status: "closed", closed_at: DateTime.current)
      json_response(@ticket)
    end
  end

  private

  def set_ticket
    @ticket = Ticket.find(params[:id])
  end

  def ticket_params
    params.permit(:subject, :description, :department)
  end  
end
