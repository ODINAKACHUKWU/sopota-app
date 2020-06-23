Rails.application.routes.draw do
  namespace :v1 do
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :tickets, only: [:create, :show]
  end
end
