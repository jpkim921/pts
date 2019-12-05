# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


therapists = [
  {
    name: "Pero Kim",
    email: "pero@test.com",
    phone: 1234567890,
    discipline: "Occupational Therapist",
    password: "test"
  },
  {
    name: "Spongebob Squarepants",
    email: "spongebob@test.com",
    phone: 9876543211,
    discipline: "Physical Therapist",
    password: "test"
  }
]

patients = [
  {
    name: "Karren Fowler",
    email:"KF@test.com",
    phone: "1111111111",
    street: "39 Cloud Street",
    apt: "49L",
    city: "New York City",
    state: "New York",
    zipcode: 10001
  },
  {
    name: "Sulema Behne",
    email:"SB@test.com",
    phone: "2222222222",
    street: "9 Sunset Blvd.",
    apt: "3rd Floor",
    city: "New York City",
    state: "New York",
    zipcode: 10002
  },
  {
    name: "Rebeca Faison",
    email:"RF@test.com",
    phone: "3333333333",
    street: "Duval Street",
    apt: "",
    city: "New York City",
    state: "New York",
    zipcode: 10003
  },
  {
    name: "Milagros Coutu",
    email:"MC@test.com",
    phone: "4444444444",
    street: "Harman St.",
    apt: "",
    city: "New York City",
    state: "New York",
    zipcode: 10004
  },
  {
    name: "Stephine Ruoff",
    email:"SR@test.com",
    phone: "5555555555",
    street: "Zee St.",
    apt: "001",
    city: "New York City",
    state: "New York",
    zipcode: 10005
  }
]

appointments = [
  {
    date: "2019-12-05",
    time: "08:00",
    patient_id: "1"
  },
  {
    date: "2019-12-06",
    time: "10:00",
    patient_id: "2"
  }
]

therapists.each do |therapist|
  Therapist.create(therapist)
end

patients.each do |patient|
  Patient.create(patient)
end

appointments.each do |appointment|
  Appointment.create(appointment)
end

Patient.all[0].therapists.push(Therapist.all[0])
Patient.all[1].therapists.push(Therapist.all[0])
Patient.all[2].therapists.push(Therapist.all[0])
Patient.all[2].therapists.push(Therapist.all[1])
Patient.all[3].therapists.push(Therapist.all[0])
Patient.all[3].therapists.push(Therapist.all[1])
Patient.all[4].therapists.push(Therapist.all[1])

Patient.all[0].appointments.push(Appointment.all[0])
Patient.all[0].appointments.push(Appointment.all[1])