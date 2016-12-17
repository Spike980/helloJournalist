require 'test_helper'

class ArticleTest < ActiveSupport::TestCase

	def teardown
	      FileUtils.rm_rf(Dir["#{Rails.root}/spec/support/uploads"])
	      FileUtils.rm_rf(Dir["#{Rails.root}/public/uploads/"])
	end
	
	should validate_presence_of(:post)
	should belong_to(:user)
	should belong_to(:category)
	should belong_to(:city)
	should validate_numericality_of(:likes)
end
