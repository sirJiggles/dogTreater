json.array!(@treats) do |treat|
  json.extract! treat, :id, :name, :type, :health
  json.url treat_url(treat, format: :json)
end
