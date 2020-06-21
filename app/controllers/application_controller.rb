class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  include TokenGenerator

  before_action :authorize_request
  attr_reader :authorized_user

  private

  def authorize_request
    @authorized_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
  end
end
