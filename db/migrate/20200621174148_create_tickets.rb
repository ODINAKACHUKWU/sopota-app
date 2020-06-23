class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.string :description
      t.string :department
      t.string :status, null: false, default: "open"

      t.timestamps
    end
  end
end
