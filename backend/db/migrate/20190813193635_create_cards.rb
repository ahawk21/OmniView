class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :category
      t.string :title
      t.string :preview_img
      t.string :link

      t.timestamps
    end
  end
end
