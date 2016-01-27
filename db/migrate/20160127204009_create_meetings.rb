class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.string :meetingTime
      t.string :contactMeetingTime

      t.timestamps
    end
  end
end
