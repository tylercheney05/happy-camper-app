class CreateCampgrounds < ActiveRecord::Migration[6.1]
  def change
    create_table :campgrounds do |t|
      t.string :name
      t.string :location
      t.text :description
      t.integer :sites
      t.float :price
      t.boolean :shower
      t.boolean :bathroom
      t.boolean :hookups

      t.timestamps
    end
  end
end
