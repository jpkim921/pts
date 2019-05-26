class TherapistPatient < ApplicationRecord
  belongs_to :therapist
  belongs_to :patient
end
