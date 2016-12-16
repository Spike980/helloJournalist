class Article < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :city
  mount_uploader :image, ArticleImageUploader

  default_scope -> { order(created_at: :desc) }

  validates :post, presence: true
  validates :likes, numericality: {only_integer: true}
  validate :image_size

  private
  	def image_size
  		if image.size > 3.megabytes
  			errors.add(:image, "should be less than 3MB")
  		end
  	end

end
