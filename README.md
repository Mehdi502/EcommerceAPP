# EcommerceAPP

# Documentation des Fonctionnalités

# 1. Authentification des Utilisateurs :

Objectif : Permettre aux utilisateurs de se connecter en vérifiant leurs identifiants à partir du fichier db.json.
Détails de la fonctionnalité :
Les utilisateurs sont enregistrés dans une base de données simulée (db.json) contenant un identifiant, un nom d'utilisateur et un mot de passe.
Lors de la tentative de connexion, l'utilisateur saisit un nom d'utilisateur et un mot de passe, qui sont comparés aux données du fichier db.json.
Si la connexion est réussie, l'utilisateur est redirigé vers la page des produits, sinon un message d'erreur est affiché.

# 2. Page des Produits :

Objectif : Afficher une liste de produits et permettre l'ajout de ces produits au panier.
Détails de la fonctionnalité :
Les produits sont récupérés depuis le fichier db.json et affichés dynamiquement.
Chaque produit comporte une image, un nom, un prix et un bouton permettant d’ajouter le produit au panier.
Un champ de recherche et des filtres par catégorie permettent aux utilisateurs de trouver rapidement des produits spécifiques.

# 3. Gestion du Panier :

Objectif : Permettre aux utilisateurs de visualiser, modifier, supprimer des produits dans leur panier et de finaliser une commande.
Détails de la fonctionnalité :
Le panier est rempli en ajoutant des produits depuis la page des produits.
L'utilisateur peut :
Augmenter ou diminuer la quantité d'un produit.
Supprimer un produit du panier.
Voir le total de la commande dans le panier.
Un bouton "Finaliser la commande" permet d'ajouter les articles du panier à l'historique des commandes et de vider le panier.

# 4. Historique des Commandes :

Objectif : Afficher un historique des commandes passées avec les articles, leur quantité, et le total de chaque commande.
Détails de la fonctionnalité :
Lorsqu'une commande est finalisée, elle est stockée dans l'historique des commandes dans db.json.
L'utilisateur peut voir un résumé de chaque commande, y compris la date, les produits achetés, la quantité et le prix total.
La page affiche un message si l'utilisateur n'a pas encore effectué de commande.

# 5. Redirection et Protection des Routes :

Objectif : Assurer que certaines pages (comme le panier ou l'historique des commandes) ne soient accessibles que par des utilisateurs connectés.
Détails de la fonctionnalité :
L'accès aux pages ProductListComponent et CartComponent est protégé par un contrôle d'authentification.
Si un utilisateur tente d’accéder à ces pages sans être connecté, il est redirigé vers la page de connexion.

# 6. Déconnexion :

Objectif : Permettre à l'utilisateur de se déconnecter, ce qui réinitialise l'état de la session.
Détails de la fonctionnalité :
Lorsqu'un utilisateur clique sur "Se déconnecter", l'authentification est réinitialisée en supprimant les éléments stockés dans localStorage et l'utilisateur est redirigé vers la page de connexion.

# Conclusion :

Ces fonctionnalités permettent de créer une application e-commerce simple avec un panier d'achats, un historique des commandes et un système d'authentification pour les utilisateurs. Toutes les données sont stockées localement dans un fichier JSON simulé via JSON-Server, ce qui rend le projet facilement extensible. La gestion des utilisateurs, des produits, du panier et des commandes se fait à travers des appels API via HttpClient et la logique d'authentification est gérée avec localStorage.
