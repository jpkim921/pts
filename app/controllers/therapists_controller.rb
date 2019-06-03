class TherapistsController < ApplicationController
  before_action :set_therapist, only: [:show, :update, :destroy]


  def index
    therapists = Therapist.all
    # render json: @therapists
    render json: therapists.as_json(include:[:patients])
  end

  def show
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
    # therapist = Therapist.find(params[:id])
    therapist = Therapist.find_by(email: params[:email])
    binding.pry
    # @user = User.find_by(email: params[:user][:email])

  end

  def therapist_params
    params.require(:therapist).permit(:name, :email, :phone, :discipline, :password)
  end
end
