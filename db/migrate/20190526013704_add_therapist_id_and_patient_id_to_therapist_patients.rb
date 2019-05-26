class AddTherapistIdAndPatientIdToTherapistPatients < ActiveRecord::Migration[5.2]
  def change
    add_column :therapist_patients, :therapist_id, :integer
    add_column :therapist_patients, :patient_id, :integer
  end
end
