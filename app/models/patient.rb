class Patient < ApplicationRecord
  has_many :therapist_patients
  has_many :therapists, through: :therapist_patients
  has_many :appointments
end
