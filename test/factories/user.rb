FactoryGirl.define do
	factory :user do
	    sequence(:name) { |i| "John Doe_#{i}" }
	    sequence(:email, 100) { |n| "person#{n}@example.com" }
	    password "password"
	    password_confirmation "password"
	    confirmed_at Time.now

	    factory :user_with_article do
	      transient do
		      articles_count 5
		  end

		    after(:create) do |user, evaluator|
		      create_list(:articles, evaluator.articles_count, user: user)
	        end
	    end

	end

end