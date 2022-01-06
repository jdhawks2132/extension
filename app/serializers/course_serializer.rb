class CourseSerializer < ActiveModel::Serializer
	attributes :id, :name, :platform, :description

	has_many :reviews
end
