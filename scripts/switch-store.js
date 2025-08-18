#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '..', 'stores-config.json');

function switchStore(storeKey) {
  try {
    // Read current config
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    // Validate store exists
    if (!config.stores[storeKey]) {
      console.error(`❌ Store "${storeKey}" not found in configuration.`);
      console.log('Available stores:', Object.keys(config.stores).join(', '));
      process.exit(1);
    }
    
    // Update current store
    config.currentStore = storeKey;
    
    // Write back to file
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    
    const store = config.stores[storeKey];
    console.log(`✅ Switched to store: ${store.name}`);
    console.log(`📍 Address: ${store.address}`);
    console.log(`📞 Phone: ${store.phone}`);
    console.log(`👨‍⚕️ Doctor: ${store.doctor.name}`);
    console.log(`🌐 Vercel Project: ${store.vercelProjectName}`);
    
  } catch (error) {
    console.error('❌ Error switching store:', error.message);
    process.exit(1);
  }
}

function showCurrentStore() {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const currentStore = config.stores[config.currentStore];
    
    console.log(`📋 Current Store: ${currentStore.name}`);
    console.log(`📍 Address: ${currentStore.address}`);
    console.log(`📞 Phone: ${currentStore.phone}`);
    console.log(`👨‍⚕️ Doctor: ${currentStore.doctor.name}`);
    console.log(`🌐 Vercel Project: ${currentStore.vercelProjectName}`);
    
  } catch (error) {
    console.error('❌ Error reading store config:', error.message);
    process.exit(1);
  }
}

function listStores() {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    console.log('📋 Available Stores:');
    Object.entries(config.stores).forEach(([key, store]) => {
      const isCurrent = key === config.currentStore ? ' (current)' : '';
      console.log(`  ${key}${isCurrent}: ${store.name}`);
    });
    
  } catch (error) {
    console.error('❌ Error listing stores:', error.message);
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'switch':
    const storeKey = args[1];
    if (!storeKey) {
      console.error('❌ Please provide a store key. Usage: node switch-store.js switch <store-key>');
      process.exit(1);
    }
    switchStore(storeKey);
    break;
    
  case 'current':
    showCurrentStore();
    break;
    
  case 'list':
    listStores();
    break;
    
  default:
    console.log('🔧 Store Configuration Tool');
    console.log('');
    console.log('Usage:');
    console.log('  node switch-store.js switch <store-key>  - Switch to a specific store');
    console.log('  node switch-store.js current             - Show current store info');
    console.log('  node switch-store.js list                - List all available stores');
    console.log('');
    console.log('Examples:');
    console.log('  node switch-store.js switch store-1');
    console.log('  node switch-store.js switch store-2');
    break;
}
