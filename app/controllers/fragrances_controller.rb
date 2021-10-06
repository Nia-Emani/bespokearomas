class FragrancesController < ApplicationController
  

  #GET /fragrances
  def index
    @fragrances = Fragrance.all

    render json: @fragrances
  end

  def show
    @fragrance = Fragrance.find(params[:id])
    render json: @fragrance, include: :ratings

  end

end
