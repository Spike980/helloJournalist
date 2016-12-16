require 'test_helper'

class ArticlesPostingTest < ActionDispatch::IntegrationTest
	include Devise::Test::IntegrationHelpers

	def setup
		@user = create(:user)
		@user1 = create(:user, id: 334)
		authenticate_user @user
		@category = create(:category)
		@city = create(:city)
		@article = build(:article)
		@articles1 = create(:article, user_id: 334)
		5.times do |n|
		 create(:article_list)
		end
		@articles = create(:article, post: "James Bond")
	end

	def teardown
		if Rails.env.test? || Rails.env.cucumber?
	      FileUtils.rm_rf(Dir["#{Rails.root}/spec/support/uploads"])
    end
	end

	test "create articles" do
		post '/articles', 
			params: { article: 
				{ post: @article.post, image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'test', 'images', 'post_image', '1.png')), category_id: @category.id, city_id: @city.id }
			},
			headers: @req_headers.merge({ 'Content-Type' => 'multipart/form-data' })
			# as: :json

		assert_response 201
		assert_equal Mime[:json], response.content_type
		article = json_response(response)
		art = Article.find(article[:id])
		assert_equal @user.name, art.user.name
	end

	test "show all articles" do
		get '/articles', headers: @req_headers.merge({'Accept' => Mime[:json]})
		assert_response 200
		assert_equal Mime[:json], response.content_type
		articles = json_response(response)
		refute_empty articles
		assert_equal 7, articles.length
		assert_equal @articles.post, articles[0][:post]
	end

	test "show single article" do 
		get "/articles/#{@articles.id}", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		assert_response 200
		assert_equal Mime[:json], response.content_type
		articles = json_response(response)
		refute_empty articles
		assert_equal @articles.post, articles[:post]
		assert_equal @articles.user.name, articles[:user][:name]
	end

	test "show nil for wrong article id" do 
		get "/articles/443", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		assert_response 200
		assert_equal Mime[:json], response.content_type
		assert_match "null", response.body
	end

	test "destroy article" do 
  		sign_out @user
		authenticate_user @user1
		assert_difference 'Article.count', -1 do
			delete "/articles/#{@articles1.id}", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		end
		assert_response 204
	end

	test "no destroy article invalid id" do 
		assert_no_difference 'Article.count' do
			delete "/articles/434", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		end
		assert_response 422
	end

	test "destroy article wrong user" do
		assert_no_difference 'Article.count', -1 do
			delete "/articles/#{@articles1.id}", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		end
		assert_response 403
	end

	test "like article with valid id" do
		get "/articles/#{@articles.id}/like", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		articles = json_response(response)
		assert_equal @articles.likes+1, articles[:likes]
	end

	test "like article with invalid id" do
		get "/articles/433/like", headers: @req_headers.merge({ 'Accept' => Mime[:json] })
		assert_response 422
		assert_empty response.body
	end

end
