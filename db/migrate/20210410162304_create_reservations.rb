class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.date :start_date
      t.date :end_date
      t.text :notes
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :campground, null: false, foreign_key: true

      t.timestamps
    end
  end
end
