class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.text :post
      t.integer :likes
      t.references :user, foreign_key: true
      t.references :category, foreign_key: true
      t.references :city, foreign_key: true
      t.timestamps
    end

    add_index :articles, [:user_id, :created_at]
    add_index :articles, [:city_id, :category_id, :created_at]


  end
end
