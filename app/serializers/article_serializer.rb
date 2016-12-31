class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :heading, :post, :likes

  belongs_to :user
  belongs_to :category
  belongs_to :city
end
