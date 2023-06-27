# Build the client
FROM node:18.16.1-bullseye AS build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d/default.conf && \
    mkdir -p /var/www/html
COPY --from=build /usr/src/app/dist /var/www/html
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]