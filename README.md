# TCLP Community Priority Map

An interactive map visualization for The Chisholm Legacy Project's prioritized communities experiencing environmental injustice and climate vulnerability across the United States.

## Overview

The Chisholm Legacy Project (TCLP) developed this prioritized list of communities as part of our ongoing effort to address systemic environmental injustice and climate vulnerability. Each community was assessed and ranked based on a combination of environmental, infrastructure, economic, social, and governance-related indicators.

## Features

- **Interactive US Map** powered by Leaflet.js with real geographic data
- **75+ Communities** across multiple states with comprehensive challenge data
- **Priority-Coded Markers**:
  - 🔴 **Critical** (Red) - Severe and immediate threats requiring urgent intervention
  - 🟠 **High** (Orange) - Significant challenges with multiple compounding issues
  - 🟡 **Moderate** (Yellow) - Important concerns requiring sustained attention
  - 🟢 **Low** (Green) - Communities with manageable challenges
- **Interactive Popups** displaying:
  - Community name, state, and region
  - Priority level and urgency score
  - Detailed challenges categorized by type (environmental, infrastructure, economic, social, governance, technology)
- **Real-time Legend** showing community counts by priority level
- **Responsive Design** that works on desktop, tablet, and mobile devices
- **Dark Theme** optimized for visibility and accessibility

## Project Structure

```
tclp-maps/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and theme
├── script.js           # Application logic and community data
├── server.js           # Express server for Node.js deployment
├── package.json        # Node.js dependencies and scripts
├── Procfile            # Heroku deployment configuration
├── data.txt            # Source data in text format
├── tclp-logo-500px.png # TCLP logo
└── README.md           # This file
```

## Getting Started

### Local Development with Node.js

1. **Clone or download** this repository
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
4. **Open your browser** and navigate to `http://localhost:3000`

### Alternative: Python Web Server

You can also run without Node.js using Python:
```bash
# Using Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Deployment

### Deploy to GitHub Pages

Since this is a static site with a Node.js server wrapper, you can deploy to GitHub Pages:

1. Go to your repository settings
2. Navigate to Pages section
3. Select `main` branch as source
4. Your site will be available at: `https://pjuxio.github.io/tclp-map-prototype/`

## Data Structure

Each community in the dataset includes:

```javascript
{
    name: 'Community Name',
    state: 'State Abbreviation',
    region: 1-4,
    priority: 'Critical|High|Moderate|Low',
    urgencyScore: 1-10,
    coords: [latitude, longitude],
    challenges: {
        environmental: ['Challenge 1', 'Challenge 2'],
        infrastructure: ['Challenge 1'],
        economic: ['Challenge 1'],
        social: ['Challenge 1'],
        governance: ['Challenge 1'],
        technology: ['Challenge 1']
    }
}
```

## Customizing Data

To add or modify communities, edit the `communities` array in `script.js`:

1. Find the appropriate priority section (Critical, High, Moderate, or Low)
2. Add a new community object with all required fields
3. Ensure latitude/longitude coordinates are accurate
4. Save and refresh the browser

## Technology Stack

- **Node.js + Express** - Server for deployment to Heroku and other platforms
- **Leaflet.js** v1.9.4 - Interactive mapping library
- **OpenStreetMap** - Map tile provider via CartoDB
- **Vanilla JavaScript** - No framework dependencies
- **Modern CSS** - Responsive design with CSS Grid and Flexbox

## Browser Support

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Interactive Map
- Pan and zoom functionality
- Click markers to view detailed community information
- Responsive layout adjusts for different screen sizes

### Priority Legend
- Real-time count of communities by priority level
- Total community count across all states
- Visual color-coding matching map markers

### Community Popups
- Organized challenge information by category
- Clear priority badges
- State and region identification
- Urgency scoring system

## Future Enhancements

Potential improvements for future versions:
- [ ] Filter communities by priority level
- [ ] Search functionality to find specific communities
- [ ] Export data to CSV/PDF format
- [ ] Detailed community pages with historical data
- [ ] Data import from spreadsheet/API
- [ ] Print-friendly view
- [ ] Comparison tool for multiple communities
- [ ] Timeline view showing priority changes over time

## About TCLP

The Chisholm Legacy Project works to address systemic environmental injustice and climate vulnerability across the United States. This map informs our field organizing, resource allocation, and partnership strategies, ensuring that the most vulnerable communities receive timely and sustained support.

Key challenge areas include:
- Contaminated water systems
- Flooding and inadequate drainage
- Food deserts
- Poor infrastructure
- High utility costs
- Health impacts from pollution
- Limited access to public services
- Governance and transparency issues

## License

© 2026 The Chisholm Legacy Project

## Contact

For more information about TCLP or to report data corrections, please visit our website or contact us directly.

---

*Last Updated: January 2026*
