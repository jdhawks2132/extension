class Api::CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        courses = Course.all
        render json: courses
    end

    def show
        course = Course.find(params[:id])
        render json: course
    end
    
    private

    def record_not_found
        render json: { error: "Course not found" }, status: :not_found
    end
    
end
