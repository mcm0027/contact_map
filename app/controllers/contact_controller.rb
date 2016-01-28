class ContactController < ApplicationController

  def index
    respond_with Contact.all
  end

  def create
    respond_with Contact.create(contact_params)
  end

  def show
    respond_with Contact.find(params[:id])
  end

  private
  def contact_params
    params.require(:contact, :name, :location, :timeZone)
  end
end
