class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :edit, :update, :destroy]


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


  # def create
  #   # @therapist = Therapist.find(patient_params[:therapist_id])
  #   # @patient = @therapist.patients.build(patient_params)
  #
  #   @patient = patient.create(patient_params)
  #   render json: patient
  # end

  def create
    # binding.pry
    @therapist = Therapist.find(patient_params[:therapist_id].to_i)
    newpatientParams = patient_params.reject {|k,v| k == "therapist_id"}
    @patient = Patient.new(newpatientParams)
    @patient.therapists << @therapist

    # @patient = @therapist.patients.build(newpatientParams)

    @patient.save
    render json: @patient
  end

  def update
    # binding.pry
    @patient.update(patient_params)
    render json: @patient
  end

  def destroy
    @patient.destroy
  end

  private
  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:name, :email, :phone, :street, :apt, :city, :state, :zipcode, :therapist_id, :toTherapist)
  end
end
# curl http://localhost:3001/patients/1 -XPUT -d"name=CHANGED&email=KF@test.com&phone=1111111111&street=39CloudStreet&apt=49L&city=NewYorkCity&state=NewYork&zipcode=10001&therapist_id=1"
