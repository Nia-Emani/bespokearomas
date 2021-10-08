class FragrancesController < ApplicationController
  # before_action :set_fragrance, only: [:show, :update, :destroy]
  

  #GET /fragrances
  def index
    @fragrances = Fragrance.all
    
    render json: @fragrances, include: :ratings
  end

  # GET /fragrances/1
  def show
    @fragrance = Fragrance.find(params[:id])
    render json: @fragrance, include: :ratings
  end
  
  def show
    @fragrance = Fragrance.find(params[:id])
    render json: @fragrance, include: :ratings
  end
 



  # private

  # def set_fragrance
  #   @fragrance = Fragrance.find(params[:id])
  # end
  

  # def fragrance_params
  #   params.require(:fragrance).permit(:name, :image_url)
  # end
  
  # GET /fragrances/1/ratings
  # def show
  #   @fragrance = Fragrance.find(params[:id]).Rating.find(params[:id])
  #   render json: @fragrance, include: :ratings
  # end

end
