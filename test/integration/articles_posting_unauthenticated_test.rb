require 'test_helper'

class ArticlesPostingUnauthenticatedTest < ActionDispatch::IntegrationTest
	def setup
		@user = create(:user)
		@category = create(:category)
		@city = create(:city)
		@articles = create(:article, post: "James Bond")
		5.times do |n|
		 create(:article_list)
		end
	end

	def teardown
	      FileUtils.rm_rf(Dir["#{Rails.root}/spec/support/uploads"])
	      FileUtils.rm_rf(Dir["#{Rails.root}/public/uploads/"])
	end

	test "create articles" do
		post '/articles', 
			params: { article: 
				{ post: 'My Text 1', user_id: @user.id, category_id: @category.id, city_id: @city.id }
			},
			headers: { 'Accept' => Mime[:json], 'Content-Type' => Mime[:json].to_s },
			as: :json

		assert_response 401
	end

	test "show all articles" do
		get '/articles', headers: {'Accept' => Mime[:json]}
		assert_response 401
	end

	test "show single article" do 
		get "/articles/#{@articles.id}", headers: { 'Accept' => Mime[:json] }
		assert_response 401
	end


	test "destroy article" do 
		assert_no_difference 'Article.count', -1 do
			delete "/articles/#{@articles.id}", headers: { 'Accept' => Mime[:json] }
		end
			assert_response 401
	end


	test "like article with valid id" do
		get "/articles/#{@articles.id}/like", headers: { 'Accept' => Mime[:json] }
		assert_response 401
	end


end