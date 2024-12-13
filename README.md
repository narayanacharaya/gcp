 in .env file we need to have 
PORT=3000
REDIS_URL=redis://localhost:6379
MAX_REQUESTS=100
WINDOW_DURATION=60000 
and for simple app i just do into simple structure 
src/index.ts is an entry point here and just index.ts is an pulumi setup
and Dockerfile is an Docker file for my express app
