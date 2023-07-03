Rails.application.routes.draw do
  resources :favourites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', action: :index, controller: 'users'
  # get 'login', to: 'users#index'

  # resources :breeds
  # resources :dogs

  # breeds/2/dogs
  resources :breeds do
    resources :dogs
  end
end
