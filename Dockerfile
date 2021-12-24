FROM node:17-alpine AS frontend_builder
WORKDIR /opt/app

ENV PORT=80
ENV NODE_ENV=production
ENV REACT_APP_API_BASE=https://rasuru-weather.openode.dev

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --production
COPY frontend .
RUN yarn build



FROM node:17-alpine
WORKDIR /opt/app

ENV PORT=80
ENV NODE_ENV=production

COPY backend/package.json backend/yarn.lock ./
RUN yarn install --production
COPY backend .
COPY --from=frontend_builder /opt/app/build ./public

CMD yarn start
