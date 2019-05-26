class CreateTherapistPatients < ActiveRecord::Migration[5.2]
  def change
    create_table :therapist_patients do |t|

      t.timestamps
    end
  end
end
