require 'test_helper'

class CityTest < ActiveSupport::TestCase

	def setup
		@city = FactoryGirl.create(:city_with_articles)
	end

    should validate_presence_of(:city)
    should validate_uniqueness_of(:city)
    should validate_length_of(:city).is_at_least(2).is_at_most(100)
	
    test "verify associated articles" do 
    	assert_equal 5, @city.articles.length
    	assert_not_nil @city.articles
    end

    test "should delete articles associated" do
    	assert_difference 'Article.count', -5 do
    		@city.destroy
    	end
    end
end
