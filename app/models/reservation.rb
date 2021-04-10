class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :campground
  has_many :reviews, dependent: :destroy
end
