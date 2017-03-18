class CreateCategoryListings < ActiveRecord::Migration[5.0]
  def change
    create_table :category_listings do |t|
      t.integer :category_id
      t.integer :event_id

      t.timestamps
    end
    add_index :category_listings, :category_id
    add_index :category_listings, :event_id
  end
end
