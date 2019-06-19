Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :humans, only: [:index, :update]
    get "my_humans", to: "humans#my_humans"
  end
end
