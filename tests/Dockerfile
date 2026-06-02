FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

COPY tests/package*.json ./

RUN npm install

COPY tests .

CMD ["npx", "playwright", "test"]