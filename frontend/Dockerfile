FROM oven/bun:1.0

WORKDIR /app

COPY ./app/package.json ./

RUN bun install

COPY ./app .

EXPOSE 3000

CMD bun run dev
