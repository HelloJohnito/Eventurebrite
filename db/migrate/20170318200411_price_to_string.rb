class PriceToString < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :price, :string 
  end
end
