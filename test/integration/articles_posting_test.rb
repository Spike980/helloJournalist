require 'test_helper'

class ArticlesPostingTest < ActionDispatch::IntegrationTest
	include Devise::Test::IntegrationHelpers

	def setup
		@user = create(:user)
		@category = create(:category)
		@city = create(:city)
		@articles = create(:article, post: "James Bond")
		5.times do |n|
		 create(:article_list)
		end
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
		art = Article.find(article[:id])
		assert_equal @user.name, art.user.name
	end

	test "show all articles" do
		get '/articles', headers: { 'Accept' => Mime[:json] }
		assert_response 200
		assert_equal Mime[:json], response.content_type
		articles = json_response(response)
		refute_empty articles
		assert_equal 6, articles.length
		assert_equal @articles.post, articles[0][:post]
	end

	test "show single article" do 
		get "/articles/#{@articles.id}", headers: { 'Accept' => Mime[:json] }
		assert_response 200
		assert_equal Mime[:json], response.content_type
		articles = json_response(response)
		refute_empty articles
		assert_equal @articles.post, articles[:post]
		assert_equal @articles.user.name, articles[:user][:name]
	end

	test "show nil for wrong article id" do 
		get "/articles/443", headers: { 'Accept' => Mime[:json] }
		assert_response 200
		assert_equal Mime[:json], response.content_type
		assert_match "null", response.body
	end

	test "destroy article" do 
		assert_difference 'Article.count', -1 do
			delete "/articles/#{@articles.id}", headers: { 'Accept' => Mime[:json] }
		end
			assert_response 204
	end

	test "no destroy article invalid id" do 
		assert_no_difference 'Article.count' do
			delete "/articles/434", headers: { 'Accept' => Mime[:json] }
		end
			assert_response 422
	end

	test "like article with valid id" do
		get "/articles/#{@articles.id}/like", headers: { 'Accept' => Mime[:json] }
		articles = json_response(response)
		assert_equal @articles.likes+1, articles[:likes]
	end

	test "like article with invalid id" do
		get "/articles/433/like", headers: { 'Accept' => Mime[:json] }
		assert_response 422
		assert_empty response.body
	end

end
