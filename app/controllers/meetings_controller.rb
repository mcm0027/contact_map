class MeetingsController < ApplicationController
  def create
    contact = Contact.find(params[:id])
    meeting = contact.meetings.create(meeting_params)
    respond_with contact, meeting
  end

  private
  def meeting_params
    params.require(:meeting).permit(:meetingTime, :contactMeetingTime)
  end

end
