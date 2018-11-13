class Homes < ActiveRecord::Migration[5.1]
  def change
  	  create_table :homes do |t|
      t.string :month
      t.decimal :day
      t.string :city
      t.string :news_info

      t.timestamps null: false
    end
  end
end
