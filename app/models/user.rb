class User < ApplicationRecord
  has_secure_password
  validates :email, :handle, :password_digest, presence: true
  validates :email, :handle, uniqueness: true
end
