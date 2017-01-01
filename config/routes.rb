Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  root :to => 'app#index'
  get "register", to: "app#index"
  get "react-router(/*all)", to: "app#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :articles, except: [:new, :edit, :update] do
  	member do
  		get :like
  	end
  end
end
