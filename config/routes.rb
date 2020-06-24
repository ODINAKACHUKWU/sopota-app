Rails.application.routes.draw do
  

  namespace :v1 do
    get "/tickets", to: "agents#export"
    
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :tickets, only: [:create, :show, :update] do
      resources :comments, only: [:create, :show]
    end
  end
end
