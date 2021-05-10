FROM alpine:latest

LABEL org.opencontainers.image.authors="redpeacock78 <redpeacock78@dev.tamakasu.ga>"
LABEL org.opencontainers.image.documentation="Calculates the color difference between two colors using the color difference formula in LAB Delta E established by the Commission internationale de l'éclairage (CIE)."
LABEL org.opencontainers.image.url="https://github.com/redpeacock78/cie.js"
LABEL org.opencontainers.image.source="https://github.com/redpeacock78/cie.js"

RUN apk --update --no-cache add bash nodejs yarn bc && \
    yarn global add cie.js

ENTRYPOINT ["cie-js"]
