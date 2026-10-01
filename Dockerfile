FROM node:20-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile

EXPOSE 3000

# This bypasses the strict TypeScript compiler and directly boots the engine
CMD ["node", "index.js"]
