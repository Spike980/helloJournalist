require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

	def setup
		@category = FactoryGirl.create(:category_with_articles)
	end

    should validate_presence_of(:cat)
    should validate_uniqueness_of(:cat)
    should validate_length_of(:cat).is_at_least(2).is_at_most(100)

    test "verify associated articles" do 
    	assert_equal 5, @category.articles.length
    	assert_not_nil @category.articles
    end

    test "should delete articles associated" do
    	assert_difference 'Article.count', -5 do
    		@category.destroy
    	end
    end
end
