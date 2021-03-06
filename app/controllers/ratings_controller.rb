class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /ratings
  def index
    @ratings = Rating.all

    render json: @ratings, include: :fragrance
  end

  # GET /ratings/1
  def show
    render json: @rating, include: :fragrance

  end
  
  # adding rating to fragrance here
  # POST /fragrances/:fragrance_id/ratings
  def create
    @fragrance = Fragrance.find(params[:fragrance_id])
    @rating = Rating.new(rating_params)
    @rating.user = @current_user
    @rating.fragrance = @fragrance

    if @rating.save
      render json: @rating, status: :created
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # PUT /ratings/1
  def update
    if @rating.update(rating_params)
      render json: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ratings/1
  def destroy
    @rating.destroy
  end
  
  def add_rating_to_fragrance
    @fragrance = Fragrance.find(params[:id])
    @rating = Rating.find(params[:rating_id])

    @fragrance.ratings << @rating

    render json: @fragrance, include: :ratings
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end
    
    # Only allow a list of trusted parameters through.
    def rating_params
      params.require(:rating).permit(:rank, :fragrance_id, :user_id)
    end
end
