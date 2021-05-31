class AddTitleToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :title, :string
  end
end
