class AddPatientidToAppointments < ActiveRecord::Migration[5.2]
  def change
    add_column :appointments, :patient_id, :string
  end
end
