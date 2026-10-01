FROM node:20-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile

EXPOSE 3000

# Forces the Node process to accept the dynamic environment port, fallback to 3000
CMD ["sh", "-c", "PORT=${PORT:-3000} pnpm start"]
