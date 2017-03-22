class AddTicketcount < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :count, :integer
  end
end
