FactoryGirl.define do
  factory :article do
    post "MyText"
    likes 1
    user 
    category 
    city 


    factory :article_list do
    	sequence(:post) { |i| "Post#{i}"}
    	likes 0
    end
  end
end
