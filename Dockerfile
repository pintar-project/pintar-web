FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Environment variable for API endpoint
ENV PUBLIC_API_URL=http://localhost:8000

EXPOSE 5173

# Sync SvelteKit to generate .svelte-kit directory (fixes tsconfig warning)
RUN npx svelte-kit sync

# Using dev mode as requested for immediate interaction
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
