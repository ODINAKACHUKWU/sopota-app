class AddStatusUpdateColumnsToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :closed_at, :datetime
  end
end
