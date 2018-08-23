# build & cleanup
yarn build
rm build/static/**/*.{js,css}.map

# deploy
NOW_DOMAIN=$(now deploy build --public)
echo "Now deployment success: $NOW_DOMAIN"

# make alias
now alias $NOW_DOMAIN ocap-react-starter
