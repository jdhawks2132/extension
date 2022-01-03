class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment, :user_id, :course_id
end
