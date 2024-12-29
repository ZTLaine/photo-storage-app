# Photo Storage App Project

## Purpose
A web application that allows users to upload, store, and view photos, demonstrating practical AWS service integration while providing hands-on JavaScript/React experience.

## Tech Stack
- Frontend: React (starting with JavaScript, later adding TypeScript versions for practice)
- AWS Services:
  - S3 for photo storage
  - Lambda for image processing
  - API Gateway for backend APIs
  - CloudFront for content delivery

## Development Approach
1. Initial build in plain JavaScript for core functionality
2. Parallel TypeScript implementations to understand type system benefits
3. Progressive feature addition to learn each AWS service

## Project Roadmap
1. S3 Setup
   - Create storage bucket
   - Implement basic file uploads
   - Handle permissions

2. Lambda Integration
   - Create thumbnail generation function
   - Set up S3 event triggers

3. API Gateway
   - Create endpoints for image operations
   - Connect to Lambda functions

4. Frontend Development
   - Build upload interface
   - Create image gallery
   - Add basic image management

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
