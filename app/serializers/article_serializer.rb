class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :post, :likes

	belongs_to :user
	belongs_to :city
	belongs_to :category

	embed :id, include: true
end
