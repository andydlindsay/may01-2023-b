# a block of code is denoted with do..end
i = 0

# loop do
#   puts "hello #{i}"
#   i += 1

#   break if i > 10
# end

i = 0

# while (i < 10) do
#   puts "hello #{i}"

#   i += 1
# end

# game_over = false

# until (game_over) do

# end

names = ["alice", "bob", "carol"]

# for..in Ruby === for..of JS

for name in names do
  puts "hello there #{name}"
end

# names.forEach((name) => {})
names.each_with_index do |name, index|
  p index
  puts "hello there #{name} at #{index}"
end
