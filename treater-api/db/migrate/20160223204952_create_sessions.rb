class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.datetime :date

      t.timestamps null: false
    end
  end
end
