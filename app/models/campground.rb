class Campground < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations
  has_many :reviews, dependent: :destroy
end
