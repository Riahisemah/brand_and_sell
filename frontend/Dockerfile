# frontend/Dockerfile
FROM nginx:alpine

# Copier les fichiers buildés (Vite ou autre)
COPY ./dist /usr/share/nginx/html

# Ajouter la config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
