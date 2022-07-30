class UsersController < ApplicationController
  def index
    users = User.all

    render json: {
      message: 'Users retrieved.',
      users: users
    }
  end

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

  def show
    user = User.find(params[:id])

    if user
      render json: {
        message: 'Successfully retrieved user.',
        user: user
      }
    else
      render json: {
        message: 'Failed to retrieve user!',
        user: {}
      }
    end
  end

private

def user_params
  params.require(:user).permit(:email, :handle, :password, :password_confirmation)
end

end