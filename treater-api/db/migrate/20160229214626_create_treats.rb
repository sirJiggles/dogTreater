class CreateTreats < ActiveRecord::Migration[5.0]
  def change
    create_table :treats do |t|
      t.string :name
      t.syting :type
      t.integer :health

      t.timestamps
    end
  end
end
