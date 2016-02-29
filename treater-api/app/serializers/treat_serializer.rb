class TreatSerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :health
  has_many :sessions
end
