FROM node:14 AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn config set no-progress
RUN npx browserslist@latest --update-db
RUN yarn --frozen-lockfile
COPY . ./
RUN yarn build

FROM base AS test
RUN yarn lint
RUN yarn test

FROM nginx:1
COPY --from=base /app/build/ /usr/share/nginx/html/
RUN ls /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'