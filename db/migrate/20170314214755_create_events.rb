class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.integer :price
      t.date :date
      t.string :location

      t.timestamps
    end
    add_index :events, :user_id
  end
end
