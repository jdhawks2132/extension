class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :platform, :description
end
