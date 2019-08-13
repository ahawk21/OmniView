class CardsController < ApplicationController

    def create
        card = Card.create(card_params)
        render json: card
    end

    def card_params
        params.permit(:category, :title, :preview_img, :link)
    end

    def index
        render json: Card.all
    end

end
