class CategorySerializer < ActiveModel::Serializer
  attributes :id, :cat
  has_many :articles
end
