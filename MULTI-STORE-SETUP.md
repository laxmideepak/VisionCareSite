# Multi-Store Setup Guide

This guide explains how to manage multiple stores using the same codebase with different configurations.

## 🏪 Current Stores

- **Store 1**: Go-To-Optical and Eye Care (Dallas location)
- **Store 2**: [Your second store name] (Location TBD)

## 📋 Quick Start

### 1. Check Current Store
```bash
npm run store:current
```

### 2. List All Stores
```bash
npm run store:list
```

### 3. Switch Between Stores
```bash
# Switch to Store 1
npm run store:switch store-1

# Switch to Store 2
npm run store:switch store-2
```

## 🔧 Configuration

All store-specific information is stored in `stores-config.json`:

```json
{
  "stores": {
    "store-1": {
      "name": "Go-To-Optical and Eye Care",
      "address": "4396 Dallas Fort Worth Turnpike Ste 107, Dallas, TX 75211",
      "phone": "+1 (214) 550-5005",
      "doctor": {
        "name": "Dr. Joby, OD",
        "title": "Therapeutic Optometrist",
        "bio": "..."
      },
      "bookingUrl": "https://scheduleyourexam.com/v3/index.php/9227/",
      "vercelProjectName": "vision-care-site"
    },
    "store-2": {
      "name": "Your Second Store Name",
      "address": "YOUR_ADDRESS_HERE",
      "phone": "YOUR_PHONE_HERE",
      "doctor": {
        "name": "YOUR_DOCTOR_NAME",
        "title": "Therapeutic Optometrist",
        "bio": "YOUR_DOCTOR_BIO"
      },
      "bookingUrl": "YOUR_BOOKING_URL",
      "vercelProjectName": "vision-care-site-2"
    }
  },
  "currentStore": "store-1"
}
```

## 🚀 Deployment Process

### For Store 1 (Current)
```bash
# 1. Switch to store-1
npm run store:switch store-1

# 2. Commit changes
git add .
git commit -m "Update store-1 configuration"

# 3. Push to main branch
git push origin main

# 4. Deploy to Vercel
vercel --prod
```

### For Store 2 (New)
```bash
# 1. Switch to store-2 branch
git checkout store-2

# 2. Update store-2 configuration in stores-config.json
# (Fill in the actual details for your second store)

# 3. Switch to store-2
npm run store:switch store-2

# 4. Commit changes
git add .
git commit -m "Add store-2 configuration"

# 5. Push to store-2 branch
git push origin store-2

# 6. Deploy to new Vercel project
vercel --prod
```

## 📝 Setting Up Store 2

### Step 1: Update Configuration
Edit `stores-config.json` and replace the placeholder values for `store-2`:

```json
"store-2": {
  "name": "Go-To-Optical and Eye Care - [Location]",
  "tagline": "EYEWEAR + EYECARE",
  "address": "YOUR_ACTUAL_ADDRESS",
  "phone": "YOUR_ACTUAL_PHONE",
  "doctor": {
    "name": "Dr. [Your Doctor's Name], OD",
    "title": "Therapeutic Optometrist",
    "bio": "Your doctor's bio here..."
  },
  "bookingUrl": "YOUR_BOOKING_URL",
  "googleMapsUrl": "YOUR_GOOGLE_MAPS_URL",
  "vercelProjectName": "vision-care-site-2"
}
```

### Step 2: Switch to Store 2
```bash
npm run store:switch store-2
```

### Step 3: Test Locally
```bash
npm run dev
```

### Step 4: Deploy
```bash
vercel --prod
```

## 🔄 Workflow for Updates

### When updating Store 1:
1. `git checkout main`
2. `npm run store:switch store-1`
3. Make changes
4. `git add . && git commit -m "Update store-1"`
5. `git push origin main`
6. `vercel --prod`

### When updating Store 2:
1. `git checkout store-2`
2. `npm run store:switch store-2`
3. Make changes
4. `git add . && git commit -m "Update store-2"`
5. `git push origin store-2`
6. `vercel --prod`

## 🌐 Vercel Projects

- **Store 1**: `vision-care-site` (main branch)
- **Store 2**: `vision-care-site-2` (store-2 branch)

Each store will have its own Vercel deployment with a unique URL.

## 📱 Features

Both stores will have:
- ✅ Complete Spanish language support
- ✅ Mobile-responsive design
- ✅ Online booking system
- ✅ Contact information
- ✅ Doctor profiles
- ✅ Pricing information
- ✅ Services listing

## 🛠️ Troubleshooting

### If store switching doesn't work:
1. Check that `stores-config.json` is valid JSON
2. Ensure the store key exists in the configuration
3. Restart the development server after switching

### If Vercel deployment fails:
1. Check that the correct branch is deployed
2. Verify the `vercelProjectName` in the config
3. Ensure all dependencies are installed

## 📞 Support

For issues with the multi-store setup, check:
1. The store configuration in `stores-config.json`
2. The current store setting
3. The Git branch you're working on
4. The Vercel project configuration
