class AddLikedHumansToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_humans, :text
  end
end
