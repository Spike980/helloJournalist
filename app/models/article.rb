class Article < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :city

  validates :post, presence: true
  validates :likes, numericality: {only_integer: true}
end
