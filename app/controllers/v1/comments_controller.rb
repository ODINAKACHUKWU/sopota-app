class V1::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.create!(comment_params)
    json_response(@comment, :created)
  end

  private

  def comment_params
    params.permit(:ticket_id, :comment).merge(user_id: current_user.id)
  end
end
