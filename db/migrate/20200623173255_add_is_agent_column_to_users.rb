class AddIsAgentColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_agent, :boolean, null: false, default: false
  end
end
