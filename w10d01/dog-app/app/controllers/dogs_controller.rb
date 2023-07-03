class DogsController < ApplicationController
  def index
    breed_id = params[:breed_id] # req.params.breed_id
    @breed = Breed.find(breed_id)

    # @all_dogs = Dog.all()

    @dogs = @breed.dogs()

    render json: {
      breed: @breed,
      dogs: @dogs
    }
  end
end
