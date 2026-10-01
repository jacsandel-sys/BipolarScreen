FROM node:20-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile

EXPOSE 3000

# This tells the container to boot using the project's native start script shortcut
CMD ["pnpm", "start"]
