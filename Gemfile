source "https://rubygems.org"

# Manage the Jekyll version used to run your site.
# To update, modify below and run `bundle install`.
# Use `bundle exec jekyll serve` to start the server.

# Theme for Jekyll site
gem "minima", "~> 2.5"

# Plugins for Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "github-pages", "~> 232"
end

# Dependencies for Windows and JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
end

# Performance optimization for Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb for JRuby compatibility
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]