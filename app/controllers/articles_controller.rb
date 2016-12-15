class ArticlesController < ApplicationController
	#before_action :authenticate_user!
	def create
		@article = Article.new(article_params)


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
		begin	
			@art = Article.find(params[:id]).destroy 
			head 204
		rescue ActiveRecord::RecordNotFound
			head 422
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
			params.require(:article).permit(:post, :user_id, :category_id, :city_id)
		end
end
