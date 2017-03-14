# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookmark < ApplicationRecord
  belongs_to :event
end
