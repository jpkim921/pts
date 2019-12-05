Rails.application.routes.draw do
  # get 'therapist/index'
  # get 'therapist/create'
  # get 'therapist/update'
  # get 'therapist/destroy'

  # route below is to send the form data as params from login form
    # post 'therapist', to: 'therapists#show'

    # resources :therapists do
    #   # resources :therapists, path: "therapists/:email(/:phone)" only: [:index]
    #   resources :patients, only: [:index, :new, :create, :show, :edit,:update]
    # end

    resources :patients do
      resources :appointments, only: [:index, :new, :create, :show, :edit,:update]
    end

    # resources :patients, controller: 'patients'
    delete '/patients/:id', to: 'patients#destroy'

    # resources :appointments, controller: 'appointments'
    resources :appointments
      delete '/appointments/:id', to: 'appointments#destroy'


  # end
  # resources :patients
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
