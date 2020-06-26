Rails.application.routes.draw do
  namespace :v1 do
    get "/tickets/report", to: "agents#export"
    get "/agent/tickets", to: "agents#index"

    namespace :admin do
    end
    
    resources :agents, only: [:index, :show]
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :tickets, only: [:create, :show, :update] do
      resources :comments, only: [:index, :create]
    end
  end
end
