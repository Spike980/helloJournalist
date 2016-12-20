class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ReactOnRails::Controller
  protect_from_forgery with: :null_session
end
