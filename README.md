# Fudy

![Fudy](https://<enter_image>.png)

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

[Fudy](https:/<enter_url>/)

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
