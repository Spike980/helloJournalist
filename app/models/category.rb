class Category < ApplicationRecord
	has_many :articles, dependent: :destroy
	validates :cat, presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 2, maximum: 100}
end
