class V1::SessionsController < ApplicationController
  before_action :set_user
  skip_before_action :authorize_request, only: :create

  def create
    if @user&.valid_password?(params[:password])
      token = AuthToken.new(@user).token
      json_response({auth_token: token, user: @user}, :created)
    else
      raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
    end
  end

  private

  def set_user
    @user = User.find_by(email: session_params[:email])
  end

  def session_params
    params.permit(:email, :password)
  end
end
