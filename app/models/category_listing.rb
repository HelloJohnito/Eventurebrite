# == Schema Information
#
# Table name: category_listings
#
#  id          :integer          not null, primary key
#  category_id :integer
#  event_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoryListing < ApplicationRecord
  belongs_to :event
  belongs_to :category
end
