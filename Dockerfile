FROM node:20-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile

EXPOSE 3000

# Tell Node to launch your server using the project's native start configuration
CMD ["pnpm", "start"]
