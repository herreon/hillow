@bproperties.each do |property|
  json.set! bench.id do
    json.partial! 'bench', bench: bench

  end
end