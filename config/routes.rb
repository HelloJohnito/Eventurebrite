Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :show, :create, :update]
    resources :categories, only: [:index, :show, :create]
    resources :tickets, only: [:index, :show, :create, :destroy]
    resources :bookmarks, only: [:index, :show, :create, :destroy]
  end
  root "static_pages#root"

end
