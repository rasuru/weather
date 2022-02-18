FROM node:17-alpine AS frontend_builder
WORKDIR /opt/app

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install
COPY frontend .
RUN yarn build



FROM node:17-alpine
WORKDIR /opt/app

COPY backend/package.json backend/yarn.lock ./
RUN yarn install
COPY backend .
COPY --from=frontend_builder /opt/app/build ./static

ENV NODE_ENV=production
CMD yarn start
