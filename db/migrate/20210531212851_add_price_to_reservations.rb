class AddPriceToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :price, :string
  end
end
