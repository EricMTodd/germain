class AddArtistToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :artist, :boolean
  end
end
