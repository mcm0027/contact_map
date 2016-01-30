class Contact < ActiveRecord::Base
  has_many :meetings

  # def as_json(options = {})
  #   super(options.merge(include: :meetings))
  # end
end
