FROM nginx:alpine-slim
COPY ./src/ /usr/share/nginx/html
