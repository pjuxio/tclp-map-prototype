// TCLP Community Priority Data - Complete Dataset
const communities = [
    // ========================================
    // CRITICAL PRIORITY (Urgency Score: 8-9)
    // ========================================

    // Arkansas (AR) - Region 4
    {
        name: 'Altheimer',
        state: 'AR',
        region: 4,
        priority: 'Critical',
        urgencyScore: 9,
        coords: [34.3187, -91.8557],
        challenges: {
            environmental: ['Contaminated water (brown, frequent boil notices)'],
            infrastructure: ['Wastewater backup', 'Clogged drainage during storms'],
            economic: ['Limited resources']
        }
    },
    {
        name: 'Cotton Plant',
        state: 'AR',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [35.0284, -91.3182],
        challenges: {
            environmental: ['Severe flooding', 'Contaminated water'],
            infrastructure: ['Poor street drainage', 'Water system issues'],
            economic: ['Limited resources']
        }
    },
    {
        name: 'Dermott',
        state: 'AR',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [33.5254, -91.4357],
        challenges: {
            infrastructure: ['Severe water/sewer system issues'],
            economic: ['$1.7M loan debt to Arkansas Natural Resources Commission'],
            governance: ['Issues with financial transparency']
        }
    },
    {
        name: 'Gould',
        state: 'AR',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [33.9726, -91.5596],
        challenges: {
            environmental: ['Flooding', 'Contaminated water'],
            infrastructure: ['Poor street drainage'],
            economic: ['High utility costs (Entergy Electric)']
        }
    },
    {
        name: 'Madison',
        state: 'AR',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [35.0159, -90.7254],
        challenges: {
            environmental: ['Flooding', 'Pesticide exposure from farms'],
            infrastructure: ['Poor drainage', 'Contaminated water (grey-tinted)'],
            economic: ['Limited resources'],
            social: ['Concerns about governance and policing']
        }
    },

    // Texas (TX) - Region 4
    {
        name: 'Ladonia',
        state: 'TX',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [33.4343, -95.9469],
        challenges: {
            environmental: ['Water quality issues requiring boiling'],
            economic: ['Residents rely on bottled water']
        }
    },
    {
        name: 'New Waverly',
        state: 'TX',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [30.5377, -95.4863],
        challenges: {
            environmental: ['Severe flooding risk in low-lying areas'],
            economic: ['Food desert', 'Limited retail options'],
            social: ['Lack of senior citizen facility and recreation'],
            infrastructure: ['No green spaces or public parks']
        }
    },
    {
        name: 'Sandbranch',
        state: 'TX',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [32.6557, -96.6014],
        challenges: {
            environmental: ['Water quality issues', 'Air pollution', 'Trash dumping'],
            infrastructure: ['Lack of streetlights', 'Poor road conditions'],
            economic: ['Land loss/displacement'],
            social: ['Health care access issues'],
            technology: ['Lack of broadband']
        }
    },

    // Louisiana (LA) - Region 4
    {
        name: 'Ironton',
        state: 'LA',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [29.8749, -89.9573],
        challenges: {
            environmental: ['Severe flooding', 'Health issues from coal facility'],
            economic: ['Food desert'],
            infrastructure: ['Displacement issues']
        }
    },
    {
        name: 'Scotlandville',
        state: 'LA',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [30.5238, -91.1407],
        challenges: {
            economic: ['Food desert'],
            infrastructure: ['Lack of emergency services'],
            social: ['High crime rates', 'Heavy police presence']
        }
    },

    // Mississippi (MS) - Region 4
    {
        name: 'Beulah',
        state: 'MS',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [33.7757, -91.0448],
        challenges: {
            environmental: ['Unclean water', 'Frequent boil notices'],
            infrastructure: ['Sewage backup', 'Road repairs needed']
        }
    },
    {
        name: 'Falcon',
        state: 'MS',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [34.0987, -90.0101],
        challenges: {
            environmental: ['Dirty/unclean water', 'Mosquito infestation'],
            infrastructure: ['Roads need repair'],
            social: ['Limited youth recreation']
        }
    },
    {
        name: 'Renova',
        state: 'MS',
        region: 4,
        priority: 'Critical',
        urgencyScore: 8,
        coords: [33.5693, -90.4418],
        challenges: {
            infrastructure: ['Major water issues (aging/damaged pipes, leaks, shutoffs)'],
            economic: ['Lacks economic development'],
            social: ['No playground', 'No grocery store']
        }
    },

    // ========================================
    // HIGH PRIORITY (Urgency Score: 6-7)
    // ========================================

    // Alabama (AL) - Region 3
    {
        name: 'Camp Hill',
        state: 'AL',
        region: 3,
        priority: 'High',
        urgencyScore: 7,
        coords: [32.7974, -85.6505],
        challenges: {
            infrastructure: ['Roads need repair'],
            economic: ['High utility costs'],
            social: ['Need for community transit and activities']
        }
    },
    {
        name: 'Shorter',
        state: 'AL',
        region: 3,
        priority: 'High',
        urgencyScore: 7,
        coords: [32.3974, -85.9133],
        challenges: {
            infrastructure: ['Severe flooding', 'Dangerous road conditions'],
            safety: ['Need for caution lights and warning signs']
        }
    },
    {
        name: 'Tuskegee',
        state: 'AL',
        region: 3,
        priority: 'High',
        urgencyScore: 7,
        coords: [32.4302, -85.6919],
        challenges: {
            infrastructure: ['Storm damage to buildings', 'Poor road conditions'],
            social: ['Lack of recreational facilities'],
            economic: ['Limited local amenities']
        }
    },

    // Illinois (IL) - Region 8
    {
        name: 'Brooklyn',
        state: 'IL',
        region: 8,
        priority: 'High',
        urgencyScore: 7,
        coords: [38.6567, -90.1653],
        challenges: {
            environmental: ['Environmental toxins'],
            infrastructure: ['Limited riverfront access'],
            economic: ['Weak relationship between village and residents'],
            social: ['Senior housing needs', 'Education concerns']
        }
    },
    {
        name: 'Cairo',
        state: 'IL',
        region: 8,
        priority: 'High',
        urgencyScore: 7,
        coords: [37.0053, -89.1765],
        challenges: {
            infrastructure: ['Severe plumbing and waste management issues'],
            economic: ['Disinvestment in buildings', 'Schools closed'],
            social: ['Population decline']
        }
    },
    {
        name: 'Venice',
        state: 'IL',
        region: 8,
        priority: 'High',
        urgencyScore: 6,
        coords: [38.6723, -90.1693],
        challenges: {
            environmental: ['Pollution from trains'],
            economic: ['Jobs/livelihood concerns']
        }
    },

    // Maryland (MD) - Region 2
    {
        name: 'Federalsburg',
        state: 'MD',
        region: 2,
        priority: 'High',
        urgencyScore: 7,
        coords: [38.6943, -75.7724],
        challenges: {
            infrastructure: ['Flood remediation needs', 'Drainage issues'],
            environmental: ['Creek rebuilding required'],
            governance: ['Efficiency in city operations needed']
        }
    },
    {
        name: 'Trappe',
        state: 'MD',
        region: 2,
        priority: 'High',
        urgencyScore: 6,
        coords: [38.6582, -76.0583],
        challenges: {
            environmental: ['Wastewater pollution'],
            infrastructure: ['General infrastructure issues']
        }
    },
    {
        name: 'West Denton',
        state: 'MD',
        region: 2,
        priority: 'High',
        urgencyScore: 6,
        coords: [38.8844, -75.8277],
        challenges: {
            environmental: ['River flooding'],
            infrastructure: ['Mold issues', 'General infrastructure problems']
        }
    },

    // Michigan (MI) - Region 8
    {
        name: 'River Rouge',
        state: 'MI',
        region: 8,
        priority: 'High',
        urgencyScore: 7,
        coords: [42.2731, -83.1341],
        challenges: {
            environmental: ['Health issues from community emissions'],
            economic: ['Job scarcity after coal plant closures']
        }
    },
    {
        name: 'Saint Louis',
        state: 'MI',
        region: 8,
        priority: 'High',
        urgencyScore: 7,
        coords: [43.4086, -84.6067],
        challenges: {
            environmental: ['Contaminated waterways unsafe for swimming', 'Changes affecting wildlife'],
            infrastructure: ['Downtown revitalization needed'],
            social: ['Violence and abandoned buildings issues']
        }
    },

    // West Virginia (WV) - Region 2
    {
        name: 'Gary',
        state: 'WV',
        region: 2,
        priority: 'High',
        urgencyScore: 7,
        coords: [37.3654, -81.5376],
        challenges: {
            environmental: ['Flooding'],
            economic: ['Food instability'],
            social: ['Aging population', 'Gentrification concerns']
        }
    },
    {
        name: 'Rand',
        state: 'WV',
        region: 2,
        priority: 'High',
        urgencyScore: 6,
        coords: [38.2873, -81.5623],
        challenges: {
            infrastructure: ['Flooding mitigation needs', 'Sewage issues'],
            environmental: ['Drainage infrastructure problems']
        }
    },

    // ========================================
    // MODERATE PRIORITY (Urgency Score: 5)
    // ========================================

    // Connecticut (CT) - Region 1
    {
        name: 'Blue Hills',
        state: 'CT',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [41.7893, -72.6887],
        challenges: {
            environmental: ['Flooding issues'],
            economic: ['Insufficient flood compensation program']
        }
    },
    {
        name: 'Poquonock Bridge',
        state: 'CT',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [41.3440, -72.0128],
        challenges: {
            infrastructure: ['Houses need renovations for extreme weather'],
            economic: ['Gentrification concerns']
        }
    },

    // Indiana (IN) - Region 8
    {
        name: 'Lyles Station',
        state: 'IN',
        region: 8,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [38.4039, -87.5481],
        challenges: {
            environmental: ['Community institutions vulnerable due to poor road conditions'],
            infrastructure: ['Lack of drainage support'],
            economic: ['Concerns about gentrification'],
            social: ['Descendants not having opportunity to buy/keep land'],
            historical: ['Underground railroad connection', 'Historic school preservation needs']
        }
    },
    {
        name: 'Princeton',
        state: 'IN',
        region: 8,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [38.3553, -87.5675],
        challenges: {
            environmental: ['Flooding and tornado vulnerability with history of fatalities and extensive damage']
        }
    },
    {
        name: 'Taylorsville',
        state: 'IN',
        region: 8,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [39.2850, -85.9475],
        challenges: {
            environmental: ['Flooding issues']
        }
    },

    // New Jersey (NJ) - Region 1
    {
        name: 'Lawnside',
        state: 'NJ',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [39.8668, -75.0283],
        challenges: {
            environmental: ['Water quality issues']
        }
    },
    {
        name: 'Woodlynne',
        state: 'NJ',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [39.9152, -75.0960],
        challenges: {
            environmental: ['Flooding issues']
        }
    },

    // New York (NY) - Region 1
    {
        name: 'Riverside',
        state: 'NY',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [40.7799, -73.9782],
        challenges: {
            infrastructure: ['Lack of pedestrian safety infrastructure'],
            social: ['Gentrification concerns']
        }
    },
    {
        name: 'Sodus',
        state: 'NY',
        region: 1,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [43.2378, -77.0614],
        challenges: {
            environmental: ['Rising temperatures'],
            economic: ['Limited housing', 'Limited economic development'],
            social: ['Limited food access', 'Lack of youth programs']
        }
    },

    // Oklahoma (OK) - Region 4
    {
        name: 'Spencer',
        state: 'OK',
        region: 4,
        priority: 'Moderate',
        urgencyScore: 5,
        coords: [35.5226, -97.3767],
        challenges: {
            environmental: ['Poor air quality'],
            economic: ['Food desert', 'Lack of economic development/jobs for black people'],
            social: ['Low ranking school district']
        }
    },

    // ========================================
    // LOW PRIORITY (Urgency Score: 4)
    // ========================================

    // Wisconsin (WI) - Region 8
    {
        name: 'Beloit',
        state: 'WI',
        region: 8,
        priority: 'Low',
        urgencyScore: 4,
        coords: [42.5083, -89.0318],
        challenges: {
            environmental: ['Pollution of quarry filled with water', 'Flooding'],
            infrastructure: ['Upkeep of national water trail'],
            social: ['Cemetery maintenance needs']
        }
    },

    // South Carolina (SC) - Region 3
    {
        name: 'Atlantic Beach',
        state: 'SC',
        region: 3,
        priority: 'Low',
        urgencyScore: 4,
        coords: [33.8076, -78.7203],
        challenges: {
            environmental: ['Development pressure threatens historic preservation'],
            economic: ['Need to preserve tourism'],
            social: ['Historical settlement preservation needs']
        }
    },
    {
        name: 'Daufuskie Island',
        state: 'SC',
        region: 3,
        priority: 'Low',
        urgencyScore: 4,
        coords: [32.1052, -80.8703],
        challenges: {
            environmental: ['Challenges with outside developers and their projects'],
            social: ['Historical preservation needs']
        }
    },
    {
        name: 'Lincolnville',
        state: 'SC',
        region: 3,
        priority: 'Low',
        urgencyScore: 4,
        coords: [33.0062, -80.1534],
        challenges: {
            infrastructure: ['Concerns about infrastructure capacity handling development/increased traffic']
        }
    }
];

// Priority tier colors
const priorityColors = {
    'Critical': '#dc2626',  // Red
    'High': '#f97316',      // Orange
    'Moderate': '#eab308',  // Yellow
    'Low': '#22c55e'        // Green
};

// Priority tier order for legend
const priorityOrder = ['Critical', 'High', 'Moderate', 'Low'];

// Initialize map centered on the US
const map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: true
}).setView([37.5, -90], 5);

// Create custom pane for markers (higher z-index than overlays)
map.createPane('markersPane');
map.getPane('markersPane').style.zIndex = 650;

// Add tile layer (dark theme)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Load US states GeoJSON for state boundaries (non-interactive, below markers)
fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                fillColor: '#1e293b',
                weight: 1,
                opacity: 0.5,
                color: '#334155',
                fillOpacity: 0.3
            },
            interactive: false,
            pane: 'overlayPane'
        }).addTo(map);
    });

// Create markers for each community
const markers = [];

function createMarker(community) {
    const color = priorityColors[community.priority];
    const baseRadius = 6 + (community.urgencyScore - 4) * 1.5;

    const marker = L.circleMarker(community.coords, {
        radius: baseRadius,
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.85,
        pane: 'markersPane'
    });

    // Store base radius as property
    marker._baseRadius = baseRadius;

    // Build popup content (for click)
    const popupContent = buildPopupContent(community);
    marker.bindPopup(popupContent, {
        maxWidth: 350,
        className: 'tclp-popup'
    });

    // Build tooltip content (for hover)
    const tooltipContent = `<strong>${community.name}, ${community.state}</strong><br>${community.priority} Priority`;
    marker.bindTooltip(tooltipContent, {
        direction: 'top',
        offset: [0, -10],
        className: 'tclp-tooltip',
        pane: 'tooltipPane'
    });

    // Hover effects using stored base radius
    marker.on('mouseover', function() {
        this.setRadius(this._baseRadius + 4);
        this.setStyle({ weight: 3, fillOpacity: 1 });
        this.bringToFront();
    });

    marker.on('mouseout', function() {
        this.setRadius(this._baseRadius);
        this.setStyle({ weight: 2, fillOpacity: 0.85 });
    });

    return marker;
}

// Add all markers to map
communities.forEach(community => {
    const marker = createMarker(community);
    marker.addTo(map);
    markers.push(marker);
});

// Build popup HTML content
function buildPopupContent(community) {
    let challengesHTML = '';
    const challengeLabels = {
        environmental: { label: 'Environmental', icon: '🌿' },
        infrastructure: { label: 'Infrastructure', icon: '🏗️' },
        economic: { label: 'Economic', icon: '💰' },
        social: { label: 'Social', icon: '👥' },
        governance: { label: 'Governance', icon: '🏛️' },
        safety: { label: 'Safety', icon: '⚠️' },
        technology: { label: 'Technology', icon: '📡' },
        historical: { label: 'Historical', icon: '📜' }
    };

    for (const [category, items] of Object.entries(community.challenges)) {
        if (items && items.length > 0) {
            const info = challengeLabels[category] || { label: category, icon: '•' };
            challengesHTML += `
                <div class="challenge-category">
                    <strong>${info.icon} ${info.label}:</strong>
                    <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            `;
        }
    }

    // Use dark text for Moderate (yellow) badge
    const badgeTextColor = community.priority === 'Moderate' ? '#222222' : '#ffffff';

    return `
        <div class="popup-content">
            <div class="popup-header" style="border-left: 4px solid ${priorityColors[community.priority]}">
                <h3>${community.name}, ${community.state}</h3>
                <span class="priority-badge" style="background: ${priorityColors[community.priority]}; color: ${badgeTextColor}">
                    ${community.priority} Priority
                </span>
            </div>
            <div class="popup-meta">
                <span>Region ${community.region}</span>
                <span>Urgency: ${community.urgencyScore}/10</span>
            </div>
            <div class="popup-challenges">
                ${challengesHTML}
            </div>
        </div>
    `;
}

// Fit map to show all markers
if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Update info panel with summary
const infoPanel = document.getElementById('info-panel');
updateSummaryPanel();

function updateSummaryPanel() {
    const counts = {};
    priorityOrder.forEach(p => counts[p] = 0);
    communities.forEach(c => counts[c.priority]++);

    // Count by state
    const stateCounts = {};
    communities.forEach(c => {
        stateCounts[c.state] = (stateCounts[c.state] || 0) + 1;
    });
    const stateCount = Object.keys(stateCounts).length;

    let legendHTML = '';
    priorityOrder.forEach(priority => {
        if (counts[priority] > 0) {
            legendHTML += `
                <div class="legend-item">
                    <span class="legend-dot" style="background: ${priorityColors[priority]}"></span>
                    <span class="legend-label">${priority}</span>
                    <span class="legend-count">${counts[priority]}</span>
                </div>
            `;
        }
    });

    infoPanel.innerHTML = `
        <h3>TCLP Communities</h3>
        <p class="panel-subtitle">Priority Overview</p>
        <div class="legend">
            ${legendHTML}
        </div>
        <div class="total-count">
            <strong>${communities.length}</strong> communities<br>
            <strong>${stateCount}</strong> states
        </div>
        <p class="panel-hint">Click markers for details</p>
    `;
}

// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const modalClose = document.getElementById('modalClose');

if (moreInfoBtn && modalOverlay && modalClose) {
    moreInfoBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
} else {
    console.error('Modal elements not found:', {
        modalOverlay: !!modalOverlay,
        moreInfoBtn: !!moreInfoBtn,
        modalClose: !!modalClose
    });
}
