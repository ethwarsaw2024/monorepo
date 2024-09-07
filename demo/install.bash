#!/usr/bin/bash

set -e

(cd ../magic-js && yarn install && yarn build)
(cd ../magic-js/packages/wagmi-magic-connector && yarn install && yarn build)

yarn install
