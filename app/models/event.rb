# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  user_id     :integer
#  price       :string
#  date        :date
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Event < ApplicationRecord
  belongs_to :user
  has_many :tickets
  has_many :bookmarks
  has_many :category_listings

  has_many(
  :categories,
  through: :category_listings,
  source: :category
  )

end
