# Fudy

![Screenshot_1](https://user-images.githubusercontent.com/73827472/199506017-90f7af9d-22fc-4d33-91ec-f5e644b5984f.png)
![Screenshot_2](https://user-images.githubusercontent.com/73827472/199506024-0b2ae0be-e960-478e-8843-9a6b3230737c.png)
![Screenshot_3](https://user-images.githubusercontent.com/73827472/199506026-7354617d-67e1-42ce-921a-896f835e9335.png)
![Screenshot_4](https://user-images.githubusercontent.com/73827472/199506029-77d7a07f-dadf-4738-bcb6-69c018792c4f.png)
![Screenshot_5](https://user-images.githubusercontent.com/73827472/199506032-781c45a4-8876-4187-86f4-6bfb19c086e4.png)


## Table of Contents

- [Introduction](#prerequisites)
- [Link to website demo](#installation)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#running-the-application)

## Introduction

A desktop-friendly fullstack pizza delivery website focused on beautiful UI using pure CSS with the ability to order pizzas and track your order, built with Sanity.io and React framework Next.js, using modern global state manager Zustand and Stripe integration for online payments.

## Link to website demo

[Fudy](https://fudy.vercel.app/)

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [Zustand](https://github.com/pmndrs/zustand/)

## Prerequisites

Install the following prerequisites:

1. [Node.js 18.17.0 or higher](https://nodejs.org/en/)
2. [Visual Studio Code](https://code.visualstudio.com/download)

## Installation

### Backend

#### 1. Install dependencies

From the **root** directory run:

```bash
cd sanity-backend
npm install
```

#### 2. Start Sanity

From the **root** directory run:

```bash
sanity start
```

#### 3. Get your project API key

1. Go to [manage.sanity.io](https://manage.sanity.io/)
2. Click on your project
3. Click on the **Settings** tab
4. Click on **API** on the left
5. Click on **Create new token**
6. Copy the token
7. Paste it into the required variable inside the .env file

### Frontend

#### 1. Install dependencies

From the **root** directory run:

```bash
cd frontend
npm install
```

#### 2. Get Stripe API key

1. Go to [stripe.com](https://stripe.com/)
2. Create an account
3. Click on **Dashboard**
4. Click on **Developers**
5. Click on **API keys**
6. Click on **Reveal test key** to reveal your secret key
7. Copy the secret key
8. Paste it into the required variable inside the .env file

## Running the application

Since you already started sanity, all you need to do is run the frontend:

```bash
cd frontend
npm run dev
```
