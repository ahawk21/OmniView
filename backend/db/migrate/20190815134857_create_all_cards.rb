class CreateAllCards < ActiveRecord::Migration[5.2]
  def change
    create_table :all_cards do |t|
      t.string :category
      t.string :title
      t.string :image_url
      t.string :link

      t.timestamps
    end
  end
end
