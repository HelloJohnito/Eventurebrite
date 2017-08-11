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

  # def user
  #   User.find(self.user_id)
  # end

  # def user=(arg)
  # end

  # belongs_to :user, {
  #   primary_key: :id,
  #   foreign_key: :house_id,
  #   class_name: 'User'
  # }

  has_many :tickets

  has_many :bookmarks
  has_many :category_listings

  has_many(
  :categories,
  through: :category_listings,
  source: :category
  )

end
