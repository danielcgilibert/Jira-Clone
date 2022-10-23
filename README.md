# Jira-Clone

## 💻 Pré-requisitos

Antes de comenzar, verifique que tiene los siguientes requisitos :

- Tener instalado [NodeJS](https://nodejs.org/es/)
- Tener instalado [Docker](https://www.docker.com/)

### 🛠 Usando docker con Jira-Clone (necesario para la base de datos)

```
docker-compose up -d
```

### Llenar la base de datos con información

Llamar al endpoint

```
http://localhost:3000/api/seed
```

## 🚀 Instalando Jira-Clone

Para usar el proyecto siga estos pasos:

```
git clone https://github.com/danielcgilibert/Jira-Clone.git
```

```
cd jira-clone
```

```
yarn
```

```
yarn dev
```
