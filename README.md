# Task Manager — Autenticación y Autorización con Laravel 12

Mini aplicación web protegida con autenticación y autorización basada en roles, desarrollada con **Laravel 12** y el **Starter Kit** oficial (React + Inertia.js + Fortify).

## Tecnologías

- **Backend:** Laravel 12, PHP 8.5, MySQL
- **Frontend:** React, Inertia.js, Tailwind CSS
- **Autenticación:** Laravel Fortify (Starter Kit)
- **Autorización:** spatie/laravel-permission v7.2

## Funcionalidades

- Registro, login, recuperación de contraseña y verificación de email
- CRUD completo para el modelo **Task** (título + estado activo/inactivo)
- Gestión de usuarios con asignación de roles
- Gestión de roles con asignación de permisos
- Dashboard dinámico con estadísticas según rol
- Sidebar adaptativo según permisos del usuario

## Roles y Permisos

| Rol | Permisos | Acceso |
|-----|----------|--------|
| **admin** | tasks.index, tasks.create, tasks.edit, tasks.delete, users.index | CRUD tareas + gestión usuarios |
| **editor** | tasks.index, tasks.create, tasks.edit, tasks.delete | CRUD tareas |
| **user** | tasks.index | Solo visualización de tareas |

## Instalación
```bash
git clone https://github.com/sskaliy54/task-manager-laravel.
cd AUTH_PROJECT
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Configura la base de datos en `.env` y ejecuta:
```bash
php artisan migrate:fresh --seed
npm run dev
php artisan serve
```

## Usuarios de prueba

| Email | Contraseña | Rol |
|-------|------------|-----|
| admin@test.com | password | admin |
| editor@test.com | password | editor |
| user@test.com | password | user |

## Asignatura

**01MASW — Seguridad en Aplicaciones Web**
Universidad Internacional de Valencia (VIU)
Máster Universitario en Desarrollo de Aplicaciones y Servicios Web
Actividad 2 — Opción B: Protección y roles con Starter Kit