require 'sinatra'

get '/' do
  haml :index
end

get '/ayakashino-tuzumi' do
  haml :ayakashino_tuzumi
end

get '/binzume-jigoku' do
  haml :binzume_jigoku
end

get '/kichigai-jigoku' do
  haml :kichigai_jigoku
end

get '/shigono-koi' do
  haml :shigono_koi
end

get '/shojo-jigoku' do
  haml :shojo_jigoku
end

