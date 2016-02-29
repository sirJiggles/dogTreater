class RemoveTypeFromTreats < ActiveRecord::Migration[5.0]
  def change
    remove_column :treats, :type, :string
  end
end
