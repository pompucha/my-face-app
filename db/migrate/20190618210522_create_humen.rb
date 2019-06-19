class CreateHumen < ActiveRecord::Migration[5.2]
  def change
    create_table :humen do |t|
      t.string :name
      t.string :race
      t.string :quote
      t.string :avatar

      t.timestamps
    end
  end
end
