// CMS Loader for Nexora Creativity
console.log('CMS Loader loaded');

// Simple function to load content from CMS
function loadContent() {
  console.log('Loading CMS content...');
  
  // For now, just check if containers exist
  const portfolioContainer = document.getElementById('portfolioContainer');
  const servicesContainer = document.getElementById('servicesContainer');
  
  if (portfolioContainer) {
    console.log('Found portfolio container');
  }
  
  if (servicesContainer) {
    console.log('Found services container');
  }
  
  // In the future, this will load real content from CMS
  console.log('CMS is ready to load content');
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadContent);
