class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment
  has_one :user
  has_one :course
end
