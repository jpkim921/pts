class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :street
      t.string :string
      t.string :apt
      t.string :string
      t.string :city
      t.string :string
      t.string :state
      t.string :string
      t.string :zipcode
      t.string :integer

      t.timestamps
    end
  end
end
