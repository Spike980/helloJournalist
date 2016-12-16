class Article < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :city
  mount_uploader :image, ArticleImageUploader

  default_scope -> { order(created_at: :desc) }

  validates :post, presence: true
  validates :likes, numericality: {only_integer: true}
  validate :image_size

  def increment_likes
    self.likes += 1
    save
  end

  def created user
    self.user_id = user.id
    self.save
  end

  #check if author of the article is logged in
  def self.author_logged_in?(article, user)
     return article.user_id == user.id 
  end

  private
  	def image_size
  		if image.size > 3.megabytes
  			errors.add(:image, "should be less than 3MB")
  		end
  	end

end
