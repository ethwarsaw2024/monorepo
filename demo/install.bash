#!/usr/bin/bash


(cd ../magic-js && yarn install && yarn build)
(cd ../wagmi-magic-connector && yarn install && yarn build)

yarn install
