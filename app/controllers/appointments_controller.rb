class AppointmentsController < ApplicationController
    before_action :set_appointment, only: [:show, :edit, :update, :destroy]


  def index
    filtered_appointments = []

    if appointment_params["patient_id"]
      filtered_appointments = []

      Appointment.all.each do |appointment|
        if patient.appointments.any? { |appointment| appointment.id.to_s === appointment_params["patient_id"] }
          filtered_appointments << appointment
        end
      end
      # @appointments = filtered_appointments
      render json: @appointments
    else
      @appointments = Appointment.all
      render json: @appointments
    end
end


  def show
    render json: @appointment
  end

  def create
    @patient = Patient.find(appointment_params["patient_id"])
    newappointmentParams = appointment_params.reject {|k,v| k == "patient_id"}
    @appointment = Appointment.new(newappointmentParams)
    binding.pry
    @patient.appointments << @appointment
    @appointment.save
    render json: @appointment
  end

  def update
    # binding.pry
    @appointment.update(appointment_params)
    render json: @appointment
  end

  def destroy
    @appointment.destroy

    appointments = Appointment.all
    render json: appointments.as_json

  end

  private
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:date, :time, :patient_id)
  end
end

# curl http://localhost:3001/appointments/ -XPUT -d"date=2019-12-04&time=12:00&patient_id=1"
# curl http://localhost:3000/appointments/ -XPUT -d"date=2019-12-04&time=12:00&patient_id=1"
