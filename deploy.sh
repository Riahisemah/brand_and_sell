#!/bin/bash

set -e

CERT_DIR="./certs"
DOMAIN="localhost"  # Change selon ton domaine ou IP
BACKEND_SERVICE="laravel_backend"

echo "🚀 Déploiement complet React + Laravel..."

# 1. Générer certificat auto-signé si absent
if [ ! -f "$CERT_DIR/selfsigned.crt" ] || [ ! -f "$CERT_DIR/selfsigned.key" ]; then
  echo "🔐 Génération certificat SSL auto-signé..."
  mkdir -p $CERT_DIR
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout $CERT_DIR/selfsigned.key \
    -out $CERT_DIR/selfsigned.crt \
    -subj "/CN=$DOMAIN"
else
  echo "🔐 Certificat SSL déjà présent."
fi

# 2. Build frontend React
echo "🛠️ Build du frontend React..."
cd frontend
npm install
npm run build
cd ..

# 3. Copier .env backend si absent
if [ ! -f backend/.env ]; then
  echo "ℹ️ Copie de backend/.env depuis .env.example"
  cp backend/.env.example backend/.env || { echo "❌ Impossible de copier backend/.env"; exit 1; }
fi

# 4. Modifier APP_URL dans backend/.env pour accès interne Docker
echo "⚙️ Mise à jour APP_URL dans backend/.env..."
sed -i "s|^APP_URL=.*|APP_URL=http://laravel_backend:8000|" backend/.env

# 5. Démarrer les conteneurs Docker
echo "🚀 Lancement des conteneurs Docker..."
docker-compose up -d --build || { echo "❌ Erreur lors du démarrage des conteneurs"; exit 1; }

# 6. Installer dépendances Composer dans le conteneur backend
echo "⬇️ Installation des dépendances Composer..."
docker-compose exec $BACKEND_SERVICE composer install --no-dev --optimize-autoloader || { echo "❌ Erreur Composer"; exit 1; }

# 7. Générer la clé Laravel
echo "🔑 Génération de la clé Laravel..."
docker-compose exec $BACKEND_SERVICE php artisan key:generate || { echo "❌ Erreur lors de la génération de la clé"; exit 1; }
# 8. Attendre la base de données
echo "⏳ Attente que la base de données soit prête..."
sleep 10

# 9. Lancer les migrations Laravel
echo "🛠️ Exécution des migrations Laravel..."
docker-compose exec $BACKEND_SERVICE php artisan migrate --force || { echo "❌ Erreur lors des migrations"; exit 1; }

echo "✅ Déploiement terminé avec succès !"