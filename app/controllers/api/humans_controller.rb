class Api::HumansController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_human(current_user.liked_humans)
  end

  def update
    current_user.liked_humans << params[:id].to_i
    current_user.save
  end

  def my_humans
    render json: User.liked(current_user.liked_humans)
  end
end
