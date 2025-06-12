# Prefill Dashboard

A React-based dashboard application for managing form field prefill mappings. This application allows users to configure how form fields can be prefilled from other forms or global data sources, while respecting form dependencies. Built for a technical screen at [Avantos.ai](https://avantos.ai/).

## Features

- **Form Management**: View and manage multiple forms with their fields
- **Prefill Mapping**: Configure how fields can be prefilled from:
  - Ancestor data sources
  - Global data sources
- **Dependency Tracking**: Forms can depend on other forms, creating a hierarchical structure
- **Interactive UI**: Click on fields to configure their prefill mappings through a modal interface

## Project Structure

```
src/
├── components/   # React components
│   ├── FormList.tsx       # List of available forms
│   ├── FormDetails.tsx    # Details view for selected form
│   └── PrefillModal.tsx   # Modal for configuring prefill mappings
├── data/         # Mock data
├── types/        # Form, Field, and PrefillMapping definitions
└── utils/        # DFS traversal and child mapping
```

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Immer** - Immutable state updates

## How to Run

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Prefill-Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. This project was meant for learning & as a screen, as such is intended to be run in development mode.
```bash
npm run dev
```
