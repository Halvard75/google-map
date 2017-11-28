require "pry"
class HomeController < ApplicationController
    
  def index
      @form = form_params
  end
    def form_params
        params.permit(:latitude, :longitude, :message)
    end
end
