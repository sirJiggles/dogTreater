class AddSizeToTreats < ActiveRecord::Migration[5.0]
  def change
    add_column :treats, :size, :string
  end
end
