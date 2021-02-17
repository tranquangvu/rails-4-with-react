# Rails 4 with React

Rails 4 examples with webpacker + react intergration.

## Installation

1. Add gems:

```
  gem 'webpacker', '~> 4.x'
  gem 'react-rails'

  bundle install
```

2. Webpacker and react install:

```
  bundle exec rake webpacker:install
  bundle exec rake webpacker:install:react
  rails generate react:install
```

3. Add javascript pack to layout (views/layouts/application.html.erb):

```
  <%= javascript_pack_tag 'application' %>
```

4. Generate component:

```
  rails g react:component HelloWorld greeting:string
```

5. Render component in views:

```
  <%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>
```
