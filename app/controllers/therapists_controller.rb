class TherapistsController < ApplicationController
  before_action :set_therapist, only: [:update, :destroy]


  def index
    @therapists = Therapist.all
    render json: @therapists
  end

  def create
    @therapist = therapist.create(therapist_params)
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
    @therapist = therapist.find(params[:id])
  end

  def therapist_params
    params.require(:therapist).permit(:name, :email, :phone, :discipline)
  end
end
