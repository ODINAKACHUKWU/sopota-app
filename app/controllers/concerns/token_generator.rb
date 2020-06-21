module TokenGenerator
  class AuthToken
    attr_reader :token
    def initialize(user)
      @token = JsonWebToken.encode(user_id: user.id)
    end
  end
end
