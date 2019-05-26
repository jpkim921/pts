class CreateTherapists < ActiveRecord::Migration[5.2]
  def change
    create_table :therapists do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :discipline
      t.string :string

      t.timestamps
    end
  end
end
