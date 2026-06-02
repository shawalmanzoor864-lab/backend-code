FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

COPY tests/package*.json ./
RUN npm ci

COPY tests .

CMD ["npx", "playwright", "test"]