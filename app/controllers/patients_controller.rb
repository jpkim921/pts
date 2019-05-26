class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]


  def index
    @patients = Patient.all
    render json: @patients.as_json(include:[:therapists])
  end

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
