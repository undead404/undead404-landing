FROM node:14 AS build
WORKDIR /app
ENV CI=true
COPY package.json yarn.lock ./
RUN yarn config set no-progress
RUN yarn --frozen-lockfile
COPY . ./
RUN yarn lint && yarn test && yarn build

FROM nginx:1
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'