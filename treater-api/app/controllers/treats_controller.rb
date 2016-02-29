class TreatsController < ApplicationController
  before_action :set_treat, only: [:show, :update, :destroy]

  # GET /treats
  def index
    @treats = Treat.all

    render json: @treats
  end

  # GET /treats/1
  def show
    render json: @treat
  end

  # POST /treats
  def create
    @treat = Treat.new(treat_params)

    if @treat.save
      render json: @treat, status: :created, location: @treat
    else
      render json: @treat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /treats/1
  def update
    if @treat.update(treat_params)
      render json: @treat
    else
      render json: @treat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /treats/1
  def destroy
    @treat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_treat
      @treat = Treat.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def treat_params
      params.require(:treat).permit(:name, :type, :health)
    end
end
