class AddPriceToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :price, :float
  end
end
