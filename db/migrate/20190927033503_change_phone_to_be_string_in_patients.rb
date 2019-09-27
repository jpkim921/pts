class ChangePhoneToBeStringInPatients < ActiveRecord::Migration[5.2]
  def change
    change_column :patients, :phone, :string
  end
end
