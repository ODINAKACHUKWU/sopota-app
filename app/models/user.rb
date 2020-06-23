class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :tickets, class_name: "Ticket", foreign_key: "user_id"

  scope :administrators, -> { where(is_admin: true)}
end
