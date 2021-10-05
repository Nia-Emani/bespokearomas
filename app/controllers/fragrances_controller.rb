class FragrancesController < ApplicationController
  
  #GET /fragrances
  def index
    @fragrances = Fragrance.all

    render json: @fragrances
  end
end
