class V1::UsersController < ApplicationController
  before_action :set_user, only: :show
  skip_before_action :authorize_request, only: :create
  
  def create
    user = User.create!(user_params)
    token = AuthToken.new(user).token
    return json_response({auth_token: token, user: user}, :created) if user
    json_response(user.errors, :conflict)
  end
  
  def show
    json_response(@user)
  end

  def update
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(
      :email,
      :password,
      :password_confirmation
    )
  end
end
