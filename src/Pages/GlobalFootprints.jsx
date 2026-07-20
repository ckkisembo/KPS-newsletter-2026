import { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwTc6pt815ugNU37oMWUxBO8kK9SdiCJuHvEqDIy_b2d1jmrnAMNHEmQRTRY1twtxVv8Q/exec';

const CONTINENT_COLORS = {
  'Africa':        '#FFB300',
  'Europe':        '#1E90FF',
  'Asia':          '#00CED1',
  'North America': '#76C442',
  'South America': '#FF6B35',
  'Oceania':       '#9B59B6',
  'Antarctica':    '#B4B2A9',
};

const COUNTRY_CONTINENT = {
  "004":"Asia","008":"Europe","012":"Africa","024":"Africa","032":"South America",
  "036":"Oceania","040":"Europe","050":"Asia","056":"Europe","064":"Asia",
  "068":"South America","076":"South America","100":"Europe","104":"Asia",
  "116":"Asia","120":"Africa","124":"North America","140":"Africa","144":"Asia",
  "152":"South America","156":"Asia","170":"South America","174":"Africa",
  "180":"Africa","188":"North America","191":"Europe","192":"North America",
  "196":"Europe","203":"Europe","204":"Africa","208":"Europe","214":"North America",
  "218":"South America","222":"North America","231":"Africa","232":"Africa",
  "233":"Europe","246":"Europe","250":"Europe","266":"Africa","270":"Africa",
  "276":"Europe","288":"Africa","300":"Europe","320":"North America","324":"Africa",
  "332":"North America","340":"North America","348":"Europe","356":"Asia",
  "360":"Asia","364":"Asia","368":"Asia","372":"Europe","376":"Asia",
  "380":"Europe","388":"North America","392":"Asia","398":"Asia","400":"Asia",
  "404":"Africa","408":"Asia","410":"Asia","414":"Asia","418":"Asia",
  "422":"Asia","426":"Africa","430":"Africa","434":"Africa","440":"Europe",
  "442":"Europe","450":"Africa","454":"Africa","458":"Asia","466":"Africa",
  "478":"Africa","484":"North America","496":"Asia","504":"Africa","508":"Africa",
  "516":"Africa","524":"Asia","528":"Europe","540":"Oceania","554":"Oceania",
  "558":"North America","562":"Africa","566":"Africa","578":"Europe","586":"Asia",
  "591":"North America","598":"Oceania","600":"South America","604":"South America",
  "608":"Asia","616":"Europe","620":"Europe","624":"Africa","630":"North America",
  "634":"Asia","638":"Africa","642":"Europe","643":"Europe","646":"Africa",
  "682":"Asia","686":"Africa","694":"Africa","703":"Europe","706":"Africa",
  "710":"Africa","716":"Africa","724":"Europe","729":"Africa","740":"South America",
  "752":"Europe","756":"Europe","760":"Asia","762":"Asia","764":"Asia",
  "768":"Africa","780":"North America","788":"Africa","792":"Asia","800":"Africa",
  "804":"Europe","784":"Asia","826":"Europe","840":"North America","858":"South America",
  "860":"Asia","862":"South America","704":"Asia","887":"Asia","894":"Africa",
};

const NAME_MAP = {
  "004":"Afghanistan","008":"Albania","012":"Algeria","024":"Angola","032":"Argentina",
  "036":"Australia","040":"Austria","050":"Bangladesh","056":"Belgium","064":"Bhutan",
  "068":"Bolivia","076":"Brazil","100":"Bulgaria","116":"Cambodia","120":"Cameroon",
  "124":"Canada","140":"Central African Rep.","144":"Sri Lanka","152":"Chile",
  "156":"China","170":"Colombia","174":"Comoros","180":"DR Congo","188":"Costa Rica",
  "191":"Croatia","192":"Cuba","196":"Cyprus","203":"Czechia","204":"Benin",
  "208":"Denmark","214":"Dominican Rep.","218":"Ecuador","222":"El Salvador",
  "231":"Ethiopia","232":"Eritrea","233":"Estonia","246":"Finland","250":"France",
  "266":"Gabon","270":"Gambia","276":"Germany","288":"Ghana","300":"Greece",
  "320":"Guatemala","324":"Guinea","332":"Haiti","340":"Honduras","348":"Hungary",
  "356":"India","360":"Indonesia","364":"Iran","368":"Iraq","372":"Ireland",
  "376":"Israel","380":"Italy","388":"Jamaica","392":"Japan","398":"Kazakhstan",
  "400":"Jordan","404":"Kenya","408":"North Korea","410":"South Korea","414":"Kuwait",
  "418":"Laos","422":"Lebanon","426":"Lesotho","430":"Liberia","434":"Libya",
  "440":"Lithuania","442":"Luxembourg","450":"Madagascar","454":"Malawi",
  "458":"Malaysia","466":"Mali","478":"Mauritania","484":"Mexico","496":"Mongolia",
  "504":"Morocco","508":"Mozambique","516":"Namibia","524":"Nepal","528":"Netherlands",
  "540":"New Caledonia","554":"New Zealand","558":"Nicaragua","562":"Niger",
  "566":"Nigeria","578":"Norway","586":"Pakistan","591":"Panama","598":"Papua New Guinea",
  "600":"Paraguay","604":"Peru","608":"Philippines","616":"Poland","620":"Portugal",
  "624":"Guinea-Bissau","630":"Puerto Rico","634":"Qatar","642":"Romania",
  "643":"Russia","646":"Rwanda","682":"Saudi Arabia","686":"Senegal",
  "694":"Sierra Leone","703":"Slovakia","706":"Somalia","710":"South Africa",
  "716":"Zimbabwe","724":"Spain","729":"Sudan","740":"Suriname","752":"Sweden",
  "756":"Switzerland","760":"Syria","762":"Tajikistan","764":"Thailand","768":"Togo",
  "780":"Trinidad and Tobago","788":"Tunisia","792":"Turkey","800":"Uganda",
  "804":"Ukraine","784":"United Arab Emirates","826":"United Kingdom",
  "840":"United States","858":"Uruguay","860":"Uzbekistan","862":"Venezuela",
  "704":"Vietnam","887":"Yemen","894":"Zambia",
};

const ALL_COUNTRIES = Object.values(NAME_MAP).sort();

export default function GlobalFootprints() {
  const svgRef = useRef(null);
  const [alumniData, setAlumniData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });
  const [stats, setStats] = useState({ countries: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  // ——— Single fetch function using useCallback so it is stable ———
  const fetchAlumniData = useCallback(() => {
    setLoading(true);
    const url = `${SHEET_URL}?cache=${Date.now()}`;
    fetch(url, { method: 'GET', redirect: 'follow' })
      .then(r => r.json())
      .then(rows => {
        if (!Array.isArray(rows)) { setLoading(false); return; }
        const data = {};
        rows.forEach(row => {
          if (!row.country || !row.name) return;
          if (!data[row.country]) data[row.country] = [];
          if (!data[row.country].includes(row.name)) {
            data[row.country].push(row.name);
          }
        });
        setAlumniData(data);
        const total = Object.values(data).reduce((s, a) => s + a.length, 0);
        setStats({ countries: Object.keys(data).length, total });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ——— Load on mount ———
  useEffect(() => {
    fetchAlumniData();
  }, [fetchAlumniData]);

  // ——— Reload when tab becomes visible again ———
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchAlumniData();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [fetchAlumniData]);

  // ——— Draw map whenever alumniData changes ———
  useEffect(() => {
    if (!svgRef.current) return;
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll('*').remove();

    const width = 900;
    const height = 460;

    const projection = d3.geoNaturalEarth1()
      .scale(145)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svgEl.call(zoom);
    const g = svgEl.append('g');

    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        const countries = topojson.feature(world, world.objects.countries);

        countries.features.forEach(d => {
          const padded = String(d.id).padStart(3, '0');
          d.properties.name = NAME_MAP[padded] || 'Unknown';
          d.properties.continent = COUNTRY_CONTINENT[padded] || 'Asia';
        });

        g.selectAll('.country')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('class', 'country')
          .attr('d', path)
          .attr('fill', d => {
            const n = d.properties.name;
            if (alumniData[n] && alumniData[n].length > 0) return '#8B6914';
            return CONTINENT_COLORS[d.properties.continent] || '#ccc';
          })
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.3)
          .style('cursor', 'pointer')
          .style('transition', 'fill 0.2s')
          .on('mousemove', function(event, d) {
            const n = d.properties.name;
            if (n === 'Unknown') return;
            const count = alumniData[n] ? alumniData[n].length : 0;
            const rect = svgRef.current.getBoundingClientRect();
            setTooltip({
              visible: true,
              x: event.clientX - rect.left + 12,
              y: event.clientY - rect.top - 28,
              text: count > 0 ? `${n} — ${count} alumni` : n,
            });
            d3.select(this).attr('fill', '#c9a96e');
          })
          .on('mouseleave', function(event, d) {
            const n = d.properties.name;
            const hasAlumni = alumniData[n] && alumniData[n].length > 0;
            d3.select(this).attr('fill',
              hasAlumni ? '#8B6914' : CONTINENT_COLORS[d.properties.continent] || '#ccc'
            );
            setTooltip({ visible: false, x: 0, y: 0, text: '' });
          })
          .on('click', (event, d) => {
            const n = d.properties.name;
            if (n !== 'Unknown') setSelectedCountry(n);
          });
      });
  }, [alumniData]);

  // ——— Search handler ———
  const handleSearch = (val) => {
    setSearch(val);
    if (val.length < 2) { setSearchResults([]); return; }
    setSearchResults(
      ALL_COUNTRIES.filter(c =>
        c.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 6)
    );
  };

  // ——— Submit handler ———
  const handleSubmit = async () => {
    if (!name.trim() || !selectedCountry) return;
    setStatus('loading');
    try {
      const params = new URLSearchParams({
        country: selectedCountry,
        name: name.trim(),
      });
      const response = await fetch(`${SHEET_URL}?${params}`);
      const result = await response.json();

      if (result.success) {
        const updated = { ...alumniData };
        if (!updated[selectedCountry]) updated[selectedCountry] = [];
        updated[selectedCountry] = [...updated[selectedCountry], name.trim()];
        setAlumniData(updated);
        setStats({
          countries: Object.keys(updated).length,
          total: Object.values(updated).reduce((s, a) => s + a.length, 0),
        });
        setName('');
        setStatus('success');
        setTimeout(() => setStatus('idle'), 4000);
      } else if (result.reason === 'duplicate') {
        setStatus('duplicate');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const selectedAlumni = selectedCountry ? (alumniData[selectedCountry] || []) : [];

  return (
    <div className="container page-container">

      <div className="row mb-4">
        <div className="col-12">
          <h2 className="page-heading">Global Footprints</h2>
          <p className="page-subheading">
            Where in the world are we? — KPS Class of '80-86 across the globe.
          </p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <div className="panel panel-feature">
            <p className="panel-text mb-0">
              {loading ? 'Loading alumni locations...' :
                stats.total > 0
                  ? `${stats.total} alumni marked across ${stats.countries} countr${stats.countries === 1 ? 'y' : 'ies'} — KPS '80-86 is everywhere!`
                  : 'No alumni added yet — be the first to mark your location!'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <div
            className="panel panel-warm"
            style={{ padding: '0.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px',
              padding: '0.5rem', fontSize: '11px', color: '#7a6652'
            }}>
              {Object.entries(CONTINENT_COLORS).map(([cont, color]) => (
                <span key={cont} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: color, display: 'inline-block' }}></span>
                  {cont}
                </span>
              ))}
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: 12, height: 12, borderRadius: 3, background: '#8B6914', display: 'inline-block' }}></span>
                Alumni present
              </span>
            </div>

            <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
              <svg
                ref={svgRef}
                viewBox="0 0 900 460"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {tooltip.visible && (
                <div style={{
                  position: 'absolute',
                  left: tooltip.x,
                  top: tooltip.y,
                  background: '#3d2008',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 12,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}>
                  {tooltip.text}
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.75rem', color: '#a89070', textAlign: 'center', margin: '4px 0 0' }}>
              Pinch or scroll to zoom · Click your country to select it
            </p>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">

        <div className="col-12 col-md-5">
          <div className="panel panel-light h-100">
            <h5 className="panel-title">Find your country</h5>
            <p className="panel-text" style={{ fontSize: '0.85rem' }}>
              Can't find your country on the map? Search for it here:
            </p>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Type country name..."
              value={search}
              onChange={e => handleSearch(e.target.value)}
              style={{ borderColor: '#c9a96e' }}
            />
            {searchResults.length > 0 && (
              <ul className="list-group list-group-flush">
                {searchResults.map(c => (
                  <li
                    key={c}
                    className="list-group-item list-group-item-action"
                    style={{
                      cursor: 'pointer',
                      background: selectedCountry === c ? '#f0e8d8' : 'transparent',
                      color: '#5a3e1b',
                      fontSize: '0.9rem',
                    }}
                    onClick={() => {
                      setSelectedCountry(c);
                      setSearch(c);
                      setSearchResults([]);
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="panel panel-warm h-100">
            <h5 className="panel-title">
              {selectedCountry ? `Mark yourself in ${selectedCountry}` : 'Select a country first'}
            </h5>

            <div
              className="mb-3 p-2 rounded"
              style={{
                background: '#f0e8d8',
                border: '1px solid #c9a96e',
                fontSize: '0.8rem',
                color: '#5a3e1b',
              }}
            >
              <strong>Please use your WhatsApp name</strong> — the same one
              you use on the KPS '80-86 alumni group. This keeps the map
              accurate and avoids duplicates. If your name is already listed
              for a country, try adding your surname initial
              (e.g. <em>Dodovico M</em>).
            </div>

            {selectedCountry && selectedAlumni.length > 0 && (
              <div className="mb-3">
                <p style={{ fontSize: '0.8rem', color: '#7a6652', marginBottom: '6px' }}>
                  Already here:
                </p>
                {selectedAlumni.map((n, i) => (
                  <span key={i} style={{
                    display: 'inline-block',
                    background: '#f0e8d8',
                    border: '0.5px solid #c9a96e',
                    borderRadius: 20,
                    padding: '3px 10px',
                    fontSize: 12,
                    color: '#5a3e1b',
                    margin: 3,
                  }}>
                    {n}
                  </span>
                ))}
              </div>
            )}

            {selectedCountry ? (
              <>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Your WhatsApp name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  maxLength={60}
                  style={{ borderColor: '#c9a96e' }}
                />
                <button
                  className="btn"
                  onClick={handleSubmit}
                  disabled={status === 'loading' || !name.trim()}
                  style={{
                    background: '#8B6914',
                    color: 'white',
                    border: 'none',
                    padding: '8px 24px',
                    borderRadius: 8,
                  }}
                >
                  {status === 'loading' ? 'Adding...' : 'Add me to the map'}
                </button>

                {status === 'success' && (
                  <p style={{ color: '#0F6E56', fontSize: '0.85rem', marginTop: 8 }}>
                    ✓ You are on the map! Welcome from {selectedCountry}.
                  </p>
                )}
                {status === 'duplicate' && (
                  <p style={{ color: '#993C1D', fontSize: '0.85rem', marginTop: 8 }}>
                    That name is already listed for {selectedCountry}.
                    Try adding your surname initial — e.g. <em>Caroline A</em>.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#993C1D', fontSize: '0.85rem', marginTop: 8 }}>
                    Something went wrong — please try again.
                  </p>
                )}
              </>
            ) : (
              <p className="panel-text fst-italic">
                Click a country on the map or search above to get started.
              </p>
            )}
          </div>
        </div>

      </div>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="panel panel-light h-100 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
            <h6 className="panel-title" style={{ textAlign: 'center' }}>Step 1</h6>
            <p className="panel-text">
              Click your country on the map or search for it by name above.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="panel panel-warm h-100 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✍️</div>
            <h6 className="panel-title" style={{ textAlign: 'center' }}>Step 2</h6>
            <p className="panel-text">
              Type your WhatsApp name and press Enter or click Add me to the map.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="panel panel-light h-100 text-center">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
            <h6 className="panel-title" style={{ textAlign: 'center' }}>Step 3</h6>
            <p className="panel-text">
              Your country turns gold and your name is visible to every classmate.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}