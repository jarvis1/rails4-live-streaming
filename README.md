# Rails 4 Live Streaming Example

Simple example of Rails 4 Live Streaming using Redis pub/sub and Server-Sent Events.  Create a new contact
and watch for the live update.

Inspired by http://evaleverything.com/2013/09/07/response-streams-with-rails-4-and-redis/

## Installation

Assuming ruby 1.9.3+, sqlite3, and bundler gem installed:

    $ bundle install
    $ rake db:migrate
    $ rails s


## Usage

 * Watch server-sent events: http://localhost:3000/contacts/status
 * Open another tab and create new contacts: http://localhost:3000/contacts


