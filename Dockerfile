FROM httpd:2.4-alpine
ARG NUMERO_LIMITE
ENV NUMERO_LIMITE=${NUMERO_LIMITE}
COPY ./src/ /usr/local/apache2/htdocs/
RUN sed -i "s|#{NUMERO_LIMITE}#|$NUMERO_LIMITE|g" /usr/local/apache2/htdocs/app.js
