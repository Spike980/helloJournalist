FactoryGirl.define do
  factory :category do
	  	sequence(:cat) { |i| "Category#{i}" }

	    factory :category_with_articles do
	      transient do
		      articles_count 5
		  end

		    after(:create) do |category, evaluator|
		      create_list(:article, evaluator.articles_count, category: category)
	        end
	    end
  end

end
