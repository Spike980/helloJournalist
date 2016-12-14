require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
	should validate_presence_of(:post)
	should belong_to(:user)
	should belong_to(:category)
	should belong_to(:city)
	should validate_numericality_of(:likes)
end
