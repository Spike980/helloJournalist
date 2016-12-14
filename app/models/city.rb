class City < ApplicationRecord
	has_many :articles, dependent: :destroy
	validates :city, presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 2, maximum: 100}
end
