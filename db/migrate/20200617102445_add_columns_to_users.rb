class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_admin, :boolean, null: false, default: false
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_number, :string
  end
end
