class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]


  def index
    # Parameters: {"therapist_id"=>"1"}
    filtered_patients = []

    if params[:therapist_id]
      filtered_patients = []

      Patient.all.each do |patient|
        if patient.therapists.any? { |therapist| therapist.id.to_s === params[:therapist_id] }
          filtered_patients << patient
        end
      end
      # @patients = filtered_patients
      render json: filtered_patients.as_json(include:[:therapists])
    else
      patients = Patient.all
      render json: patients.as_json(include:[:therapists])
    end

    # @patients = Patient.all
    # render json: @patients.as_json(include:[:therapists])
  end
  # def index
  #   @patients = Patient.all
  #   render json: @patients.as_json(include:[:therapists])
  # end

  def show
    render json: @patient.as_json(include:[:therapists])
  end

  def create
    @patient = patient.create(patient_params)
    render json: patient
  end

  def update
    @patient.update(patient_param)
    render json: patient
  end

  def destroy
    @patient.destroy
  end

  private
  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:name, :email, :phone, :street, :apt, :city, :state, :zipcode)
  end
end
