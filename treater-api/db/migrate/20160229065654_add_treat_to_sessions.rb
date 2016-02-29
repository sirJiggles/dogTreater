class AddTreatToSessions < ActiveRecord::Migration
  def change
    add_reference :sessions, :treat, index: true, foreign_key: true
  end
end
