FROM mcr.microsoft.com/playwright:latest
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npx" , "playwright" , "test"]