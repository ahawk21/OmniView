class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create(favorite_params)
        render json: favorite
    end

    def favorite_params
        params.permit(:user_id, :card_id)
    end

    def index
        render json: Favorite.all
    end

end
