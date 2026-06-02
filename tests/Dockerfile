FROM mcr.microsoft.com/playwright:v1.60.0-jammy

WORKDIR /app

COPY tests/package*.json ./
RUN npm install

COPY tests .

CMD ["npx", "playwright", "test"]