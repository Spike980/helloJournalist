FactoryGirl.define do
  factory :city do
	  	sequence(:city) { |i| "City #{i}"}

	    factory :city_with_articles do
	      transient do
		      articles_count 5
		  end

		    after(:create) do |city, evaluator|
		      create_list(:article, evaluator.articles_count, city: city)
	        end
	    end
  end

end
