FROM alpine:latest

LABEL org.opencontainers.image.authors="redpeacock78 <redpeacock78@dev.tamakasu.ga>"
LABEL org.opencontainers.image.documentation="Calculates the color difference between two colors using the color difference formula in LAB Delta E established by the Commission internationale de l'éclairage (CIE)."
LABEL org.opencontainers.image.url="https://github.com/redpeacock78/cie.js"
LABEL org.opencontainers.image.source="https://github.com/redpeacock78/cie.js"

ADD . /src
RUN apk --update --no-cache add bash nodejs yarn bc && \
    cd src && \
    yarn install --frozen-lockfile && \
    yarn build && \
    yarn link && \
    sed -n "$(expr $(sed -n '/devDependencies/=' <package.json) + 1),$(expr $(sed -n '/dependencies/=' <package.json) - 2)p" <package.json \
    | awk '{gsub(/"|:/, "", $1);print $1}' \
    | xargs yarn remove && \
    apk del yarn && \
    rm -rf /var/cache/apk/*

ENTRYPOINT ["cie-js"]
