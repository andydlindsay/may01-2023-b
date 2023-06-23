# Proc(edure) is a block stored in memory

names = ["alice", "bob", "carol"]

# names.each do |name|
#   puts "hello there #{name}"
# end

my_block = Proc.new do |name|
  puts "hello there #{name}"
end

# puts

# names.each &my_block

# [1,2,3].each &my_block

def accepts_a_block 
  yield('alice') # callback('alice')
end

accepts_a_block &my_block
