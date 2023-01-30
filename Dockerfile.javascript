
FROM node:16.17-alpine3.16

RUN set -eu; \
    apk add --no-cache \
        bash

# expose node inspect/debug port
EXPOSE 9229

# indicate the src directory will be mounted via docker volume
# VOLUME [ "/usr/src" ]

ENTRYPOINT [ "bash" ]
