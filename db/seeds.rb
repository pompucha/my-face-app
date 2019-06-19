100.times do
  name = Faker::JapaneseMedia::OnePiece.character
  race = Faker::Games::ElderScrolls.race
  quote = Faker::TvShows::GameOfThrones.quote
  avatar = Faker::Avatar.image(name, "100x400", "jpg", "set1")
  Human.create(name: name, race: race, quote: quote, avatar: avatar)
end

puts "100 Humans Seeded"