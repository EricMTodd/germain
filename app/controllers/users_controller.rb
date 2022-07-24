class UsersController < ApplicationController

  def create
    user = User.create(user_params)

    if user.save
      session[:user_id] = user.id
      render json: {
        message: 'User created.',
        logged_in: true,
        user: user
      }
    else
      render json: {
        message: 'Failed to create user!',
        logged_in: false,
        user: {}
      }
    end
  end

private

def user_params
  params.require(:user).permit(:email, :handle, :password, :password_confirmation)
end

end