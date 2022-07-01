# Step 1 - build
FROM node:16-alpine as builder

WORKDIR '/app'

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2 - run
FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html








