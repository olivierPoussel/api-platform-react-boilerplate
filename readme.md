# Créer un nouveau projet
```bash
Symfony new concert --version="^4.4" --full

composer require api webpack-encore

npm install
```

Configurer la BDD dans le .env
```bash
symfony server:start
# url de test => localhost:8000/api
```

config api platform
packages => api_platform.yml
routes => api_platform.yml

Attention faker est abandonnée par son createur depuis debut décembre :'(.
```bash
composer require fzaninotto/faker orm-fixtures --dev
```

Config webpack pour react 
```js
// uncomment if you use React
.enableReactPreset()
```

react 
```bash
npm install @babel/preset-react@^7.0.0 --save-dev
npm i react react-dom react-router axios
# + react-router@5.2.0 + react-dom@17.0.1 + react@17.0.1 + axios@0.21.1
```

Jwt
```bash
npm i jwt-decode 
```

# Initialisation du projet

config la bdd dans le .env
```bash
composer install

npm install

php bin/console doctrine:database:create
```

# Doc Api-platform
## configuration
[config (pagination, etc.)](https://api-platform.com/docs/core/configuration/)
## mapping entities
[mapping entities](https://api-platform.com/docs/core/getting-started/#mapping-the-entities)
## Opération (CRUD)
[Opération](https://api-platform.com/docs/core/operations/)

[config (url, arg, etc.)](https://api-platform.com/docs/core/operations/#configuring-operations)

[SubResource](https://api-platform.com/docs/core/subresources/)

[CustomController](https://api-platform.com/docs/core/controllers/)

## Format & Sérialisation
[Json-ld, hydra & co](https://api-platform.com/docs/core/serialization/#available-serializers)
## pagination
[pagination](https://api-platform.com/docs/core/pagination/)
## filtre

[Filtre](https://api-platform.com/docs/core/filters/)

[SearchFilter](https://api-platform.com/docs/core/filters/#search-filter)

[OrdreFilter](https://api-platform.com/docs/core/filters/#order-filter-sorting)

[Child-properties](https://api-platform.com/docs/core/filters/#filtering-on-nested-properties)

# webpack-encore

[encore-doc](https://symfony.com/doc/4.4/frontend.html#getting-started)

# React

[Persist state (localStorage)](https://dev.to/akhilaariyachandra/persistent-state-in-react-f50
)

[ReactRouter](https://reactrouter.com/web/guides/quick-start)