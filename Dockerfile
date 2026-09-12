FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile


COPY . .

RUN bun run build


# RUNTIME STAGE

FROM oven/bun:1-slim AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./


USER bun
CMD ["bun","run","start"]