# Get started

```sh
# Create .env with a generated JWT_SECRET
echo "JWT_SECRET='$(openssl rand -base64 32)'" >> .env

npm install
npm start
```
