class ContactController < ApplicationController
  skip_before_filter :verify_authenticity_token, :except => [:create, :update]
  def index
    respond_with Contact.all
  end

  def create
    respond_with Contact.create(contact_params)
  end

  def show
    respond_with Contact.find(params[:id])
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    render json: { 'ok' => 'success'}
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :location, :timeZone)
  end
end

