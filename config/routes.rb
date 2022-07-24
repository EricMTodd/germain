Rails.application.routes.draw do
  root 'static#index'

  #Sessions routes
  get 'api/sessions', to: 'sessions#logged_in?'
  post 'api/sessions', to: 'sessions#create'
  delete 'api/sessions', to: 'sessions#destroy'

  # User routes
  post 'api/users', to: 'users#create'

  get '*path', to: 'static#index'
end
