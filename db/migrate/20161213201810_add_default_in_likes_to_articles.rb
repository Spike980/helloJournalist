class AddDefaultInLikesToArticles < ActiveRecord::Migration[5.0]
  def change
  	change_column :articles, :likes, :integer, :default => 0, :null => true
  end
end
