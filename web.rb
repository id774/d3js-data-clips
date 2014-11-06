require 'sinatra'

get '/' do
  erb :index
end

get '/ayakashino-tuzumi' do
  erb :ayakashino_tuzumi
end

get '/binzume-jigoku' do
  erb :binzume_jigoku
end

get '/kichigai-jigoku' do
  erb :kichigai_jigoku
end

get '/shigono-koi' do
  erb :shigono_koi
end

get '/shojo-jigoku' do
  erb :shojo_jigoku
end

