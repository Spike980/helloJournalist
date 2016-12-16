ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'factory_girl'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  include FactoryGirl::Syntax::Methods


  # Add more helper methods to be used by all tests here...
  def json_response(response)
  	JSON.parse(response.body, symbolize_names: true)
  end

  def authenticate_user person
  		post user_session_path, params: {  email: person.email, password: person.password  },
							  	headers: { 'Accept' => Mime[:json], 'Content-Type' => Mime[:json].to_s },
	  						    as: :json
		@token = response.header['access-token']
		@token_type = response.header['token-type']
		@client = response.header['client']
		@expiry = response.header['expiry']
		@uid = response.header['uid']
		@req_headers = Hash.new
		@req_headers['client'] = @client
		@req_headers['access-token'] = @token
		@req_headers['token-type'] = @token_type
		@req_headers['expiry'] = @expiry
		@req_headers['uid'] = @uid
  end

  def sign_out
  		delete destroy_user_session_path, headers: @req_headers.merge({ 'Accept' => Mime[:json], 'Content-Type' => Mime[:json].to_s })
  end

end
