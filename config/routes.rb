Rails.application.routes.draw do
  get '/bio', to: 'bios#index'

  devise_for :users, path: '', path_names: { sign_in: 'login',
  sign_out: 'logout', sign_up: 'register'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homes#index"
  resources :homes, except: [:index]
end
