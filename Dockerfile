# Stage 1 : Build
FROM node:12.18 AS build
WORKDIR /usr
COPY . .
RUN npm install && npm run build:prod

# Stage 2 : Production
FROM nginx:1.19-alpine AS production
COPY --from=build /usr/dist/ci-projet-front /usr/share/nginx/html
COPY --from=build /usr/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
