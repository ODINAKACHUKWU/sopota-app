class CreateAgents < ActiveRecord::Migration[5.2]
  def change
    create_table :agents do |t|
      t.boolean :is_available, null: false, default: true
      t.string :department
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
