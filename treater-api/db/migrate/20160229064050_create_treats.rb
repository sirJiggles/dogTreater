class CreateTreats < ActiveRecord::Migration
  def change
    create_table :treats do |t|
      t.string :name
      t.string :type
      t.integer :health

      t.timestamps null: false
    end
  end
end
