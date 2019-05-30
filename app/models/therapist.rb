class Therapist < ApplicationRecord
  has_many :therapist_patients
  has_many :patients, through: :therapist_patients

  has_secure_password

end
