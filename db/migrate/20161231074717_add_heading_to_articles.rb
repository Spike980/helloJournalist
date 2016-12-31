class AddHeadingToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :heading, :string
  end
end
