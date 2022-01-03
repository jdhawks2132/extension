class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password, :admin
end
