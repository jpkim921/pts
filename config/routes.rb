Rails.application.routes.draw do
  # get 'therapist/index'
  # get 'therapist/create'
  # get 'therapist/update'
  # get 'therapist/destroy'

  # namespace :api do
    # resources :therapists, :patients
    resources :therapists do
      resources :patients, only: [:index, :new, :create, :show, :edit]
    end

    resources :patients


  # end
  # resources :patients
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
