class Api::ReviewsController < ApplicationController
	def index
		reviews = Review.all
		render json: reviews
	end

	def show
		review = Review.find(params[:id])
		render json: review
	end

	def create
		review = Review.create(review_params)
		if review.valid?
			render json: review, status: :created
		else
			render json: { error: review.errors }, status: :unprocessable_entity
		end
	end

	def update
		review = Review.find_by(id: params[:id])
		if review.update(review_params)
			render json: review, status: :ok
		else
			render json: { error: 'Review not found' }, status: :unprocessable_entity
		end
	end

	def destroy
		review = Review.find_by(id: params[:id])
		if review
			review.destroy
			head :no_content
		else
			render json: { error: errors.message }, status: :not_found
		end
	end

	private

	def review_params
		params.permit(:stars, :comment)
	end
end
