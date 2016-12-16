FactoryGirl.define do
  factory :article do
    post "MyText"
    likes 1
    image { Rack::Test::UploadedFile.new(File.join(Rails.root, 'test', 'images', 'post_image', '1.png')) }
    # image { fixture_file_upload "#{Rails.root}/spec/fixtures/images/1.png", 'image/png' }
    user 
    category 
    city 


    factory :article_list do
    	sequence(:post) { |i| "Post#{i}"}
    	likes 0
    end
  end
end
