# version: 1
FROM mcr.microsoft.com/playwright:focal
ENV NODE_PATH=/usr/lib/node_modules
RUN npm install -g @playwright/test # no need to install playwright, only playwright/test. why?
RUN npx playwright install
WORKDIR tests
ENTRYPOINT ["npx"]
CMD ["playwright test"]
