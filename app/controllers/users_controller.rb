class UsersController < ApplicationController

  def create
    user = User.create(user_params)

    if user.save
      render json: {
        message: 'User created.',
        user: user
      }
    else
      render json: {
        message: 'Failed to create user!',
        user: user
      }
    end
  end

private

def user_params
  params.require(:user).permit(:email, :handle, :password, :password_confirmation)
end

end