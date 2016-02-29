class SessionSerializer < ActiveModel::Serializer
  attributes :id, :user, :treat
  belongs_to :user
  belongs_to :treat
end
