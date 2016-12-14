class ArticlesController < ApplicationController
	def create
		@article = Article.new(article_params)


		if @article.save
			render json: @article, status: 201, location: @article
		else
			render json: @article.errors, status: 422
		end

	end

	private

		def article_params
			params.require(:article).permit(:post, :user_id, :category_id, :city_id)
		end
end
