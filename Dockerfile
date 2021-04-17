FROM alpine:latest

LABEL maintainer="redpeacock78@dev.tamakasu.ga"

ADD . /src
RUN apk --update --no-cache add bash nodejs yarn bc && \
    cd src && \
    yarn install --frozen-lockfile && \
    yarn build && \
    yarn link
