Rails.application.routes.draw do
  root 'static#index'

  # User routes
  post 'api/users', to: 'users#create'

  get '*path', to: 'static#index'
end
