class CitySerializer < ActiveModel::Serializer
  attributes :id, :city


	has_many :articles
  	embed :id, include: true
end
