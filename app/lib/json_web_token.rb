class JsonWebToken
  # application secret to encode and decode token
  SECRET = Rails.application.secrets.secret_key_base
  EXPIRATION = 24.hours.from_now
  
  def self.encode(payload, exp = EXPIRATION)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET)
  end
  
  def self.decode(token)
    # get payload; first index in decoded Array
    body = JWT.decode(token, SECRET)[0]
    HashWithIndifferentAccess.new body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    raise ExceptionHandler::InvalidToken, e.message
  end
end
