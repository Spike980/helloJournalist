class ArticlesController < ApplicationController
	before_action :authenticate_user!
	before_action :correct_user, only: [:destroy]

	def create
		@article = Article.new(article_params)
		if user_signed_in?
			@article.user_id = current_user.id
		else
			render json: {error: "Please sign in first."} , status: 422
			return
		end


		if @article.save
			render json: @article, status: 201, location: @article
		else
			render json: @article.errors, status: 422
		end

	end

	def index
		@articles = Article.all

		render json: @articles, status: 200
	end

	def show
		begin	
			@article = Article.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			@article = nil
		end

		render json: @article, status: 200
	end

	def destroy
		if @correct_user
			@article.destroy
			head 204
		else
			head 403
		end
	end

	def like
		begin
			@art = Article.find(params[:id])
			@art.likes+=1
			@art.save
			render json: @art, fields: [:id, :likes], include: [], status: 200
		rescue ActiveRecord::RecordNotFound
			head 422
		end

	end


	private

		def article_params
			params.require(:article).permit(:post, :image, :category_id, :city_id)
		end

		def correct_user
			begin
				@article = Article.find(params[:id])
				# check if current user is the author of article and return true or false
				if @article.user_id == current_user.id
					@correct_user = true
				else
					@correct_user = false
				end
			rescue ActiveRecord::RecordNotFound
				head 422 # return unprocessable entry if no such article exists
			end
		end
end
