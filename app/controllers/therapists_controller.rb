class TherapistsController < ApplicationController
  # before_action :set_therapist, only: [:show, :update, :destroy]
  before_action :set_therapist, only: [ :update, :destroy]


  def index
    therapists = Therapist.all
    # render json: @therapists
    # binding.pry
    # params['email']
    # params['phone']
    # Therapist.where(email: params["email"], phone: params["phone"].to_i)
    render json: therapists.as_json(include:[:patients])
  end

  def show
    temp = Therapist.find_by email: params['email']
    therapist = temp.authenticate(params['password'])
    # binding.pry
    render json: therapist.as_json(include:[:patients])
  end

  def create
    therapist = Therapist.new(therapist_params)
    therapist.save
    # therapist = Therapist.create(therapist_params)
    render json: therapist
  end

  def update
    therapist.update(therapist_param)
    render json: therapist
  end

  def destroy
    therapist.destroy
  end

  private
  def set_therapist
    therapist = Therapist.find(params[:id])
  end
  # def set_therapist
  #   therapist = Therapist.where(email: params['email'], password: params['password'])
  # end

  def therapist_params
    params.require(:therapist).permit(:name, :email, :phone, :discipline, :password)
  end
end
