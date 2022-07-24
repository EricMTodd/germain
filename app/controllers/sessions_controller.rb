class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: 'Successfully logged in.',
        logged_in: true,
        user: user
      }
    else
      render json: {
        message: 'Failed to log in!',
        logged_in: false,
        user: {}
      }
    end
  end

  def destroy
    reset_session
    render json: {
      message: 'Successfully logged out.',
      logged_in: false,
      user: {}
    }
  end

  def logged_in?
    if session[:user_id]
      user = User.find(session[:user_id])

      render json: {
        message: 'User is currently logged in.',
        logged_in: true,
        user: user
      }
    else
      render json: {
        message: 'No user is currently logged in.',
        logged_in: false,
        user: {}
      }
    end
  end

end