class AllItemsController < ApplicationController 
    def index
        render json: AllCard.all
    end
end
