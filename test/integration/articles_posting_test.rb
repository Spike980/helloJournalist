require 'test_helper'

class ArticlesPostingTest < ActionDispatch::IntegrationTest
	def setup
		@user = create(:user)
		@category = create(:category)
		@city = create(:city)
	end

	test "create articles" do
		post '/articles', 
			params: { article: 
				{ post: 'My Text 1', user_id: @user.id, category_id: @category.id, city_id: @city.id }
			},
			headers: { 'Accept' => Mime[:json], 'Content-Type' => Mime[:json].to_s },
			as: :json

		assert_response 201
		assert_equal Mime[:json], response.content_type
		article = json_response(response)
		p article
		art = Article.find(article[:id])
		assert_equal @user.name, art.user.name
	end
end
