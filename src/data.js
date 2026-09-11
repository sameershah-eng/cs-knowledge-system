// CS Knowledge System - Mock Data & Matching Engine
// Realistic customer service knowledge base for ApexFit Equipment Co.

export const COMPANY_INFO = {
  name: "ApexFit Equipment Co.",
  systemName: "CS Knowledge System",
  tagline: "Internal Customer Operations & Reply Intelligence",
  currentUser: {
    name: "Sarah Chen",
    role: "Senior CS Specialist (Tier 2 Hardware)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    badge: "Hardware Lead",
    shift: "Tier 2 Live Queue",
  }
};

export const INITIAL_ARTICLES = [
  {
    id: "KB-TRB-101",
    title: "Treadmill Deck Lubrication & Belt Tensioning Protocol",
    product: "Treadmills",
    topic: "Troubleshooting",
    status: "Approved",
    lastUpdated: "2026-08-28",
    author: "Marcus Vance (Field Engineering)",
    sourceTickets: ["#TK-8491", "#TK-8602", "#TK-8719"],
    summary: "Instructions for resolving walking belt slippage, hesitation, and squeaking on Horizon-Glide T800.",
    body: `Symptom: Walking belt slips, drifts to one side, or pauses momentarily when the user's foot strikes the deck.

Step 1: Check Lubrication Status
- Unplug the treadmill from power.
- Lift the edge of the running belt. Touch the center top surface of the running deck.
- If the deck feels dry, apply 10-15 ml of 100% Pure Silicone Oil (ApexFit Part #LUB-01). Never use WD-40, lithium grease, or petroleum-based sprays.
- Walk on the machine at 2.0 mph for 3 minutes to distribute oil evenly across the phenolic surface.

Step 2: Correcting Belt Tracking & Left/Right Drift
- Locate the two rear roller adjustment bolts on the rear end caps.
- If the belt drifts LEFT: Turn the left bolt clockwise 1/4 turn using the 6mm Allen key.
- If the belt drifts RIGHT: Turn the right bolt clockwise 1/4 turn.
- Run the treadmill at 3.5 mph for 60 seconds without walking on it to observe tracking. Repeat in 1/4-turn increments until centered.

Step 3: Correcting Belt Slippage (Hesitation under load)
- Turn BOTH rear adjustment bolts clockwise exactly 1/4 turn simultaneously.
- Test by setting speed to 2.5 mph and stomping firmly forward. The belt should not slip on the front drive roller.`,
    tags: ["slipping", "belt", "treadmill", "lubrication", "drift", "deck", "horizon", "t800"]
  },
  {
    id: "KB-INS-204",
    title: "Power Rack V2: Crossbar Pulley Assembly & Cable Routing",
    product: "Power Racks",
    topic: "Installation",
    status: "Approved",
    lastUpdated: "2026-08-14",
    author: "Dave K. (Assembly Lead)",
    sourceTickets: ["#TK-8120", "#TK-8344", "#TK-8551"],
    summary: "Assembly sequence for upper crossbeam, nylon bearing pulleys, and dual high-low cable tensioner on Apex IronRack V2.",
    body: `Safety Precaution: Two adults required for steps involving the overhead crossbeam. Do not fully torque M12 bolts until all uprights are plumb.

Assembly Steps:
1. Upper Crossbeam Attachment:
   - Position the overhead crossbeam between upright posts #1 and #2.
   - Insert M12 x 85mm hex bolts with zinc washers from the exterior facing inward.
   - Hand-tighten nylon lock nuts until snug (leave 1-2mm play for squaring).

2. Pulley Housing Alignment:
   - Mount the top central swivel pulley using bolt #P-04.
   - Ensure the protective cable keeper pin is oriented underneath the pulley groove to prevent cable derailment during slack release.

3. Cable Threading Sequence:
   - Feed the 7x19 aircraft-grade steel cable with rubber ball stop through the top front pulley.
   - Route down through the floating double-pulley bracket, up over the rear fixed pulley, and secure the eyelet terminal to the weight trolley carriage with the locking carabiner.

4. Torque Verification:
   - Using an 18mm socket and box wrench, torque all M12 frame bolts to 65 ft-lbs (88 Nm).`,
    tags: ["assembly", "crossbar", "pulley", "power rack", "ironrack", "cable", "v2", "installation"]
  },
  {
    id: "KB-POL-102",
    title: "30-Day Return & Restocking Fee Policy",
    product: "General",
    topic: "Policy",
    status: "Approved",
    lastUpdated: "2026-07-15",
    author: "Claire Moreau (Support Ops)",
    sourceTickets: ["#TK-7910", "#TK-8240"],
    conflictFlag: "Conflicts with updated policy memo #TK-9104: 60-day window now permitted for mechanical selector dial defects.",
    summary: "Standard consumer return guidelines, original freight deductions, and repackaging criteria.",
    body: `Standard 30-Day Return Window:
- Customers may initiate a return within 30 days of confirmed delivery date.
- Products must be in original condition, including manuals, hardware packets, and factory foam crating.
- Freight items (Treadmills, Power Racks) incur a $150 return freight fee unless certified defective upon arrival by an ApexFit technician.

Exceptions & Extended Warranty:
- Defective items reported within 14 days are eligible for replacement parts or full courier pickup at zero customer cost.
- NOTICE: Support Memo #TK-9104 authorizes Tier 2 agents to extend return eligibility to 60 days with waived return shipping specifically for mechanical gear jam failures on SmartDial 50 Dumbbells.`,
    tags: ["return", "refund", "policy", "restocking", "30 days", "warranty", "dumbbells", "freight"]
  },
  {
    id: "KB-TRB-103",
    title: "SmartDial 50 Dumbbell: Stuck Selector Mechanism Diagnostic",
    product: "Adjustable Dumbbells",
    topic: "Troubleshooting",
    status: "Approved",
    lastUpdated: "2026-08-30",
    author: "Elena Rostova (Quality Assurance)",
    sourceTickets: ["#TK-8812", "#TK-8845", "#TK-8990"],
    summary: "Diagnostic flowchart when the weight selector dial is stuck, jammed, or clicking between settings.",
    body: `Safety Warning: Never force the dial with tools or channel locks. The internal cam lobes are precision polymer and will sheer under torque.

Diagnosis & Reset Procedure:
1. Ensure Base Cradle Seating:
   - 90% of dial jams occur because the dumbbell handle is resting slightly tilted in the cradle.
   - Press firmly down on both steel handle ends until you hear the dual mechanical interlock pins release.

2. Weight Plate Alignment Check:
   - Check if any individual plate has dislodged from its tongue-and-groove slot in the tray.
   - Manually squeeze all plates together toward the center cradle divider.

3. Emergency Release Pin:
   - On the bottom of the plastic cradle base, locate the recessed white push pin.
   - While pressing the base pin with the provided 3mm hex tool or a ballpoint pen, turn the dial clockwise to the lowest 5 lb setting.

4. Replacement Eligibility:
   - If the dial remains seized after base pin depression, the internal planetary ratchet ring has stripped. Open warranty ticket for handle core replacement part #SD50-CORE.`,
    tags: ["dumbbells", "smartdial", "stuck", "dial", "weights", "selector", "jammed", "cradle"]
  },
  {
    id: "KB-CMP-301",
    title: "HydroRow Apex R-500: Bluetooth FTMS & Apple Watch Compatibility",
    product: "Rowing Machines",
    topic: "Compatibility",
    status: "Approved",
    lastUpdated: "2026-08-19",
    author: "Kenji Sato (Connected Fitness Dev)",
    sourceTickets: ["#TK-8401", "#TK-8592", "#TK-8711"],
    summary: "Supported Bluetooth profiles, Apple Watch pairing steps, and GymKit / FTMS sensor connection guide.",
    body: `Wireless Connectivity Specifications:
- Bluetooth 5.2 Low Energy (BLE) supporting standard FTMS (Fitness Machine Service - 0x1826).
- Dual-band ANT+ FE-C compatible with Garmin, Wahoo, and Suunto sports watches.

Apple Watch Direct Pairing Steps:
1. Turn on the R-500 console by taking 2 full strokes or pressing the 'Wake' key.
2. Open the Workout app on Apple Watch (watchOS 8.0 or newer required).
3. Scroll down to 'Rower' workout and tap the three dots (...) icon.
4. Bring the Apple Watch within 2 inches of the NFC icon on the top right corner of the console screen until you feel a haptic tap.
5. If NFC is unresponsive: Go to Apple Watch Settings > Bluetooth > Health Devices > select 'Apex-R500-XXXX'.

Known Limitations:
- Apple Watch cannot broadcast optical heart rate to the console screen without third-party companion bridge app (e.g., Echo Heart Rate) if GymKit is disabled in hospital/enterprise MDM profiles.
- Polar H10 chest straps should be paired via ANT+ to leave Bluetooth channel open for tablet screen.`,
    tags: ["rowing", "apple watch", "bluetooth", "pair", "console", "hydrorow", "ftms", "connect"]
  },
  {
    id: "KB-CMP-302",
    title: "Olympic Barbell Sleeve vs 1-Inch Standard Weight Plate Compatibility",
    product: "Power Racks",
    topic: "Compatibility",
    status: "Approved",
    lastUpdated: "2026-07-09",
    author: "Dave K. (Assembly Lead)",
    sourceTickets: ["#TK-7601", "#TK-7840"],
    summary: "Clear distinction between 2-inch Olympic sleeves and 1-inch standard plates, plus available adapter options.",
    body: `Key Distinction:
- All ApexFit Barbells and Power Rack plate storage horns are commercial Olympic Standard with a 50mm (2-inch) diameter sleeve.
- "Standard" 1-inch (25mm) weight plates will NOT fit onto our Olympic bars or rack horns. Attempting to bore them out voids warranties.

Customer Solution:
- If a customer owns 1-inch plates and wants to use them with our cable weight trolley, they must purchase the 1-to-2-Inch Heavy Duty Sleeve Adapter Sleeve (Part #ADP-OLY-10).
- For safety: When using dumbbell handles with adjustable collars, always specify Olympic lockjaw collars rather than threaded spinlock collars.`,
    tags: ["barbell", "plates", "1-inch", "olympic", "sleeve", "compatibility", "power rack", "weights"]
  },
  {
    id: "KB-TRB-104",
    title: "CadenceSpin C7: Belt Whine, Flywheel Resistance & Calibration",
    product: "Exercise Bikes",
    topic: "Troubleshooting",
    status: "Approved",
    lastUpdated: "2026-08-05",
    author: "Elena Rostova (Quality Assurance)",
    sourceTickets: ["#TK-8311", "#TK-8499"],
    summary: "Resolving high-pitched belt squeal and calibrating digital magnetic eddy-current resistance.",
    body: `Problem 1: High-pitched whistling or belt squeal at high cadence (>90 RPM).
- Cause: Poly-V drive belt requires tension settling after the first 20 hours of ride time.
- Fix: Remove the plastic side access panel (3 Philips screws). Loosen idler pulley nut #14 by half a turn. Turn tensioner bolt clockwise 1 full turn. Check belt deflection (should flex 5-7mm under moderate thumb pressure).

Problem 2: Resistance feels significantly heavier/lighter than console metric.
- Fix: Turn bike on. Press and hold both 'Resistance Up' and 'Mode' buttons on console for 5 seconds until 'CAL' appears.
- Spin flywheel gently until display counts down 3-2-1-DONE. This zeros the servomotor magnetic caliper stepper.`,
    tags: ["bike", "cadencespin", "resistance", "calibration", "belt", "squeak", "flywheel", "c7"]
  },
  {
    id: "KB-INS-205",
    title: "HydroRow Apex R-500: Water Tank Filling & Chlorine Tablet Schedule",
    product: "Rowing Machines",
    topic: "Installation",
    status: "Approved",
    lastUpdated: "2026-08-11",
    author: "Kenji Sato (Connected Fitness Dev)",
    sourceTickets: ["#TK-8114", "#TK-8288"],
    summary: "Water quality guidelines, siphon pump usage, and recommended purification tablet dosing.",
    body: `Water Fill Protocol:
- Use municipal tap water. Tap water contains natural residual chlorine that helps keep the tank clear.
- Do NOT use distilled or reverse-osmosis water unless specifically recommended for hard water scaling.
- Never fill past Level Line 17 marked on the polycarbonate tank. Overfilling causes leakage through the handle shaft seal during high-cadence sprint strokes.

Purification Schedule:
- Add 1 ApexFit Water Purification Tablet (Sodium Dichlor Part #TAB-AQ4) upon initial fill.
- Add 1 tablet every 6 months if stored indoors away from direct sunlight.
- If the water turns cloudy or greenish, siphon out 50% of the water, refill with fresh tap water, and drop 1 tablet.
- Never use household bleach, pool shock, or peroxide, as these degrade the polycarbonate shell and neoprene impeller seals.`,
    tags: ["rower", "tank", "water", "chlorine", "tablet", "hydrorow", "installation", "maintenance"]
  },
  {
    id: "KB-GEN-401",
    title: "Commercial vs Residential Warranty Coverage Terms",
    product: "General",
    topic: "Policy",
    status: "Approved",
    lastUpdated: "2026-06-22",
    author: "Claire Moreau (Support Ops)",
    sourceTickets: ["#TK-7210", "#TK-7505"],
    summary: "Warranty structural breakdown: lifetime frame, 3-year mechanical parts, 1-year wearable items.",
    body: `Warranty Tiers:
- Frame & Welds: Lifetime warranty for original purchaser.
- Mechanical Parts (Motors, Pulleys, Cable Bearings, Flywheels): 3 Years.
- Wearable Items (Footstraps, Foam Grips, Belt Surfaces, Resistance Bands): 1 Year.
- Labor: 1 Year in-home technician dispatch (continental US & Canada only).

Exclusions:
- Installation in unconditioned outdoor environments, garages exposed to sub-freezing temperatures, or commercial health clubs (unless Commercial Tier SKU was purchased).`,
    tags: ["warranty", "coverage", "residential", "commercial", "repair", "policy", "terms"]
  },
  {
    id: "KB-TRB-105",
    title: "Horizon-Glide T800: Error Code E-01 (Speed Sensor Signal Loss)",
    product: "Treadmills",
    topic: "Troubleshooting",
    status: "Approved",
    lastUpdated: "2026-08-20",
    author: "Marcus Vance (Field Engineering)",
    sourceTickets: ["#TK-8520", "#TK-8699"],
    summary: "Diagnosis for error E-01 where the treadmill starts for 3-5 seconds and halts abruptly.",
    body: `Symptoms:
- Treadmill motor turns, displays 3-2-1 countdown, moves for 3-5 seconds, then beeps loudly with code 'E-01' and stops.

Cause:
- The optical or reed switch speed sensor on the front roller pulley is missing pulses or misaligned.

Fix Steps:
1. Unplug treadmill and remove motor hood cover (4 screws).
2. Locate the circular magnet pressed into the plastic pulley on the left side of the front roller.
3. Check the black speed sensor probe mounted on the bracket.
4. The gap between sensor probe tip and the rotating magnet must be exactly 2mm to 3mm (approx. thickness of a nickel).
5. If dusty, wipe optical sensor window with dry microfibre cloth.
6. Reconnect motor hood, plug in, and test. If E-01 persists, replace sensor cable assembly #SEN-SPD-02.`,
    tags: ["treadmill", "error", "e-01", "sensor", "motor", "stops", "horizon", "speed"]
  },
  {
    id: "KB-TRB-106",
    title: "DuraFlex Resistance Bands: Snap Prevention & Anchor Safety Guidelines",
    product: "Resistance Bands",
    topic: "Troubleshooting",
    status: "Approved",
    lastUpdated: "2026-07-30",
    author: "Elena Rostova (Quality Assurance)",
    sourceTickets: ["#TK-7994", "#TK-8150"],
    summary: "Visual inspection for latex micro-tears, door anchor placement, and elongation limits.",
    body: `Safety Rules:
- Maximum Elongation: Never stretch any DuraFlex tube or loop band beyond 2.5x its resting length.
- Anchor Placement: When anchoring in doors, always place the anchor on the hinge side of the door jamb or ensure the door opens AWAY from the user.
- Surface Friction: Never loop bands around rough concrete posts or sharp metal rack edges. Always use the nylon friction sleeve #SLV-PRO.
- Inspection: Inspect bands before every session. If pinholes, discoloration, or edge notches appear, retire the band immediately. ApexFit replaces snapped bands within 1 year of purchase under our No-Snap guarantee.`,
    tags: ["resistance bands", "duraflex", "snap", "anchor", "safety", "tear", "latex"]
  },
  {
    id: "KB-INS-206",
    title: "Apex IronRack V2: Concrete Anchor Bolting & Leveling Shims",
    product: "Power Racks",
    topic: "Installation",
    status: "Approved",
    lastUpdated: "2026-08-02",
    author: "Dave K. (Assembly Lead)",
    sourceTickets: ["#TK-8002", "#TK-8219"],
    summary: "Floor anchoring requirements for commercial dynamic training and leveling on uneven garage slabs.",
    body: `When Floor Bolting is Required:
- Bolting is mandatory if using the Spotter Arms with loads exceeding 405 lbs (184 kg) or if installing the High-Low Pulley Tower extension.

Tools & Materials:
- Rotary hammer drill with 3/8-inch (10mm) carbide masonry bit.
- 4x 3/8" x 3-inch wedge anchors (ApexFit Heavy Anchor Pack #ANC-CON-4).
- Bubble level and steel horseshoe leveling shims.

Installation Steps:
1. Assemble rack completely and position in final footprint.
2. Place bubble level across left-to-right top crossbeams and front-to-back uprights.
3. If the concrete garage floor slopes for drainage, place slotted steel shims under base footplates until level.
4. Drill 2.5-inch deep holes into concrete through the footplate anchor holes.
5. Vacuum concrete dust from holes thoroughly.
6. Hammer wedge anchors into holes and torque hex nuts to 25 ft-lbs (34 Nm).`,
    tags: ["power rack", "concrete", "anchor", "bolt", "floor", "installation", "leveling", "shims"]
  },
  {
    id: "KB-GEN-402",
    title: "ApexFit Mobile App: Bluetooth Sensor Syncing & Account Setup",
    product: "General",
    topic: "General",
    status: "Approved",
    lastUpdated: "2026-08-25",
    author: "Kenji Sato (Connected Fitness Dev)",
    sourceTickets: ["#TK-8655", "#TK-8790"],
    summary: "Pairing iOS and Android companion apps with ApexFit smart machines, firmware updates, and subscription sync.",
    body: `Device Pairing:
- Ensure Location Services and Bluetooth permissions are set to 'Always Allow while using app' on your smartphone.
- Wake your equipment by initiating movement (pedaling, rowing, or running).
- Open ApexFit App > Profile > My Connected Gear > 'Search for Nearby Hardware'.
- Tap your machine's unique serial identifier. The console LED will turn solid blue upon successful handshake.

Firmware Updates:
- When a firmware update is available, an amber badge appears beside your machine in the app.
- Keep phone within 5 feet of console and do NOT disconnect power during the 4-minute OTA flash.`,
    tags: ["app", "bluetooth", "mobile", "sync", "account", "firmware", "setup"]
  },
  {
    id: "KB-CMP-303",
    title: "SmartDial 50 Dumbbells: Stand & Rack Cradle Compatibility",
    product: "Adjustable Dumbbells",
    topic: "Compatibility",
    status: "Approved",
    lastUpdated: "2026-07-18",
    author: "Dave K. (Assembly Lead)",
    sourceTickets: ["#TK-7741", "#TK-7902"],
    summary: "Mounting SmartDial 50 trays to the Apex Ergonomic Dumbbell Stand and third-party shelves.",
    body: `Cradle Mounting Specs:
- The base trays included with SmartDial 50 feature 4x M6 pre-threaded brass inserts on the underside.
- These match the mounting plate holes on the ApexFit ErgoStand V1 & V2 (Part #STND-D50).
- Bolting the trays to the stand provides a 20-degree ergonomic forward tilt, significantly reducing lumbar strain when re-racking heavy 50 lb settings.

Third-Party Shelves:
- Minimum shelf depth required: 16 inches (40.6 cm).
- Weight rating per shelf must support at least 120 lbs (both dumbbells + trays).`,
    tags: ["dumbbells", "stand", "rack", "compatibility", "smartdial", "ergostand"]
  }
];

export const PROPOSED_ARTICLES = [
  {
    id: "PROP-001",
    title: "Horizon-Glide Treadmill: Recommended Deck Lubrication Schedule",
    product: "Treadmills",
    topic: "Troubleshooting",
    status: "Proposed",
    confidence: "High",
    suggestedDate: "2026-09-08",
    sourceTickets: ["#TK-9021", "#TK-9034"],
    duplicateFlag: "Possible duplicate of approved article KB-TRB-101 (Treadmill Deck Lubrication & Belt Tensioning Protocol).",
    summary: "Drafted from 2 recent tickets regarding how often to lubricate walking decks based on weekly mileage.",
    draftBody: `Recommended Maintenance Cadence:
- Light use (<3 hours/week): Lubricate once every 6 months.
- Moderate use (3-7 hours/week): Lubricate once every 3 months.
- Heavy use (>7 hours/week or multiple household runners): Lubricate monthly or every 150 miles.

Use only pure 100% silicone lubricant. Apply 1 oz (30ml) under the center of the belt.`
  },
  {
    id: "PROP-002",
    title: "CadenceSpin C7: Bluetooth Cadence Sensor Dropout Troubleshooting",
    product: "Exercise Bikes",
    topic: "Troubleshooting",
    status: "Proposed",
    confidence: "High",
    suggestedDate: "2026-09-09",
    sourceTickets: ["#TK-8914", "#TK-8950", "#TK-9011"],
    summary: "Auto-extracted from repeated customer tickets where cadence displays '---' halfway into spinning classes.",
    draftBody: `Symptom: Cadence reading drops to zero or dashes during high RPM sprints or after 25 minutes of riding.

Root Causes:
1. Magnet pickup distance: The crank arm magnet has shifted away from the internal reed sensor.
2. Coin cell battery: The CR2032 sensor battery has dropped below 2.8V.

Resolution:
- Remove left crank dust cover, check magnet proximity (must be ≤3mm).
- Swap CR2032 battery with fresh Panasonic/Energizer cell.
- Clear Bluetooth cache on paired tablet before re-launching workout app.`
  },
  {
    id: "PROP-003",
    title: "HydroRow Apex R-500: Winter Unheated Garage Storage Instructions",
    product: "Rowing Machines",
    topic: "General",
    status: "Proposed",
    confidence: "Medium",
    suggestedDate: "2026-09-10",
    sourceTickets: ["#TK-8890", "#TK-8942"],
    summary: "Addresses recurring customer queries about freezing temperatures cracking the polycarbonate water tank.",
    draftBody: `Winter Storage Warning:
- Polycarbonate water tanks will crack if water freezes and expands inside.
- If storing the R-500 in an unheated garage where temperatures drop below 32°F (0°C):
  1. Fully drain the tank using the supplied siphon pump into clean buckets.
  2. Leave the tank fill plug loosely unthreaded to allow airflow and prevent condensation mildew.
  3. Store the rowing machine horizontally (do NOT stand upright while empty if temperatures fluctuate).
  4. Never add automotive antifreeze or windshield wiper fluid to prevent freezing—this destroys the tank seals.`
  },
  {
    id: "PROP-004",
    title: "SmartDial 50: Dual-Plate Jamming on 15 lb and 35 lb Combinations",
    product: "Adjustable Dumbbells",
    topic: "Troubleshooting",
    status: "Proposed",
    confidence: "High",
    suggestedDate: "2026-09-11",
    sourceTickets: ["#TK-9045", "#TK-9078"],
    summary: "New assembly batch tolerance fix when plate #2 and #4 fail to release simultaneously.",
    draftBody: `Issue Description:
Batch serial numbers starting with SD-2026-B show tight manufacturing tolerance between Plate #2 and Plate #4, causing the selector teeth to catch on both plates simultaneously at 15 lb and 35 lb dial settings.

Immediate Fix:
- Inspect the nylon dovetail rails on plate #2 for plastic molding burrs.
- Lightly buff the edge with fine 400-grit emery paper or apply a drop of dry PTFE lube spray.
- If the issue continues, request replacement plates from batch SD-2026-C.`
  }
];

export const MOCK_TICKETS = [
  {
    id: "#TK-9021",
    date: "2026-09-08",
    customer: "Jason Miller",
    product: "Horizon-Glide T800 Treadmill",
    type: "Technical / Product Knowledge",
    capturedInKB: true,
    filteringReason: "Captured: Contains actionable maintenance guidelines and user troubleshooting diagnostics.",
    customerMessage: "Hi, I purchased the T800 three months ago. I run about 15 miles a week on it. How often should I be putting silicone lubricant on the deck? Is there a schedule or indicator light on the display?",
    repReply: "Hi Jason! Great question. For running 15 miles per week (around 3 hours of weekly use), we recommend applying 15 ml of 100% pure silicone oil every 3 months. There is no automated dashboard light for lube, but you can feel under the center of the belt—if it feels completely dry, apply our ApexFit #LUB-01 silicone right away!"
  },
  {
    id: "#TK-9034",
    date: "2026-09-08",
    customer: "Hannah Vance",
    product: "Horizon-Glide T800 Treadmill",
    type: "Technical / Product Knowledge",
    capturedInKB: true,
    filteringReason: "Captured: Technical inquiry about deck friction and lubrication interval for marathon training.",
    customerMessage: "My treadmill belt is getting hot to the touch during long marathon training sessions (18 miles). Do I need to lubricate more frequently than the standard manual says?",
    repReply: "Hello Hannah. Yes, exactly! During high-volume marathon prep (>7 hours/week), we advise lubricating the phenolic deck monthly or every 150 miles. High friction creates heat which can degrade the motor controller. Applying 15ml of silicone will immediately drop operating temperature."
  },
  {
    id: "#TK-8812",
    date: "2026-09-01",
    customer: "David Ortiz",
    product: "SmartDial 50 Adjustable Dumbbells",
    type: "Technical / Product Knowledge",
    capturedInKB: true,
    filteringReason: "Captured: Diagnosed stuck mechanical dial mechanism and base cradle reset procedure.",
    customerMessage: "The dial on my left dumbbell is completely stuck on 25 lbs and won't turn to 30 or 20. It feels like something is locked inside. Can I use pliers to force it?",
    repReply: "Hi David, please DO NOT use pliers or force the dial! The internal gears are precision cams that will break if forced. First, check that the dumbbell is sitting perfectly flat in the cradle base. Locate the recessed white reset pin under the cradle base, depress it with a 3mm key, and rotate the dial gently back to 5 lbs."
  },
  {
    id: "#TK-8914",
    date: "2026-09-05",
    customer: "Sarah Jenkins",
    product: "CadenceSpin C7 Bike",
    type: "Technical / Product Knowledge",
    capturedInKB: true,
    filteringReason: "Captured: Cadence Bluetooth sensor dropout and CR2032 replacement diagnostic.",
    customerMessage: "During my spin workouts on the C7 bike, the RPM reading on the screen drops to dashes '---' about 20 minutes into the workout. Resistance still works. How can I fix this?",
    repReply: "Hi Sarah! This indicates the wireless crank cadence sensor is losing signal. Check the crank arm magnet gap—it should be within 3mm of the sensor. If that looks good, the CR2032 sensor coin cell battery is likely below operating voltage and should be replaced."
  },
  {
    id: "#TK-8401",
    date: "2026-08-19",
    customer: "Brian Patel",
    product: "HydroRow Apex R-500",
    type: "Technical / Product Knowledge",
    capturedInKB: true,
    filteringReason: "Captured: Bluetooth FTMS protocol pairing and Apple Watch optical heart rate instructions.",
    customerMessage: "Can I connect my Apple Watch Ultra directly to the R-500 rower console to see my heart rate on the display while rowing?",
    repReply: "Hi Brian! Yes, you can. Turn on the R-500 console, open the Apple Watch Workout app, select Rower, tap the three dots, and hold your watch within 2 inches of the NFC logo on the console screen for instant GymKit pairing. Your live HR will broadcast directly onto the screen."
  },
  {
    id: "#TK-9102",
    date: "2026-09-09",
    customer: "Emily Watson",
    product: "Apex IronRack V2",
    type: "Routine Order / Logistics",
    capturedInKB: false,
    filteringReason: "Excluded from KB: Routine shipment tracking inquiry containing no reusable product knowledge.",
    customerMessage: "Can you tell me where my shipment is? Order #78291 was placed 4 days ago and I haven't received a tracking number yet.",
    repReply: "Hi Emily, your IronRack V2 is scheduled for freight pickup with R&L Carriers today! Your tracking number is RL-98302199 and you will receive automated SMS updates."
  },
  {
    id: "#TK-9108",
    date: "2026-09-09",
    customer: "Mark Tremont",
    product: "DuraFlex Resistance Bands",
    type: "Routine Billing / Account",
    capturedInKB: false,
    filteringReason: "Excluded from KB: Routine sales tax invoice request containing no equipment troubleshooting value.",
    customerMessage: "I need a copy of my PDF sales receipt showing the sales tax itemized for my employer wellness reimbursement program.",
    repReply: "Hello Mark, I have just emailed your official itemized tax invoice for Order #6491 to mark.tremont@email.com. Let us know if you need any additional employer verification documentation!"
  },
  {
    id: "#TK-9115",
    date: "2026-09-10",
    customer: "Chloe Rivera",
    product: "CadenceSpin C7 Bike",
    type: "Routine Address Change",
    capturedInKB: false,
    filteringReason: "Excluded from KB: Address modification request with no technical knowledge content.",
    customerMessage: "I realized I put my old apartment address on the order for the C7 bike. Can we change it to 402 Elmhurst Ave before freight dispatch?",
    repReply: "Hi Chloe, I have updated your delivery address on Order #7914 to 402 Elmhurst Ave with our logistics dispatcher. Delivery appointment confirmation will be sent to your phone!"
  }
];

export const PRESET_QUESTIONS = [
  {
    label: "Treadmill Belt Slipping",
    question: "Treadmill belt keeps slipping to the left side during runs at higher speeds",
    product: "Treadmills",
    targetKbId: "KB-TRB-101"
  },
  {
    label: "Power Rack Assembly",
    question: "How do I assemble the crossbar and pulley on the Power Rack V2?",
    product: "Power Racks",
    targetKbId: "KB-INS-204"
  },
  {
    label: "Dumbbell 45-Day Return",
    question: "Customer wants to return dumbbells after 45 days because the adjustment dial is stuck",
    product: "Adjustable Dumbbells",
    targetKbId: "KB-POL-102"
  },
  {
    label: "Rower Apple Watch Pairing",
    question: "Rowing machine console won't pair with Apple Watch via Bluetooth",
    product: "Rowing Machines",
    targetKbId: "KB-CMP-301"
  },
  {
    label: "1-Inch Weight Plate Fit",
    question: "Can I use 1-inch standard weight plates on the Olympic barbell sleeve?",
    product: "Power Racks",
    targetKbId: "KB-CMP-302"
  },
  {
    label: "Unmatched / Low Confidence Query",
    question: "Can I take my Apex treadmill underwater or operate it in a steam room?",
    product: "General",
    targetKbId: null
  }
];

export const LEARNING_PATHS = [
  {
    id: "LP-01",
    title: "Horizon-Glide T800: Mechanical Assembly & Deck Setup",
    product: "Treadmills",
    track: "Installation",
    modulesCount: 4,
    completedModules: 4,
    estimatedMinutes: 25,
    difficulty: "Beginner",
    summary: "Unboxing heavy frame, front upright wire harness routing, console shock mounting, and initial deck leveling.",
    badge: "Certified Assembly"
  },
  {
    id: "LP-02",
    title: "Horizon-Glide T800: Motor Diagnostics, E-01 Codes & Belt Alignment",
    product: "Treadmills",
    track: "Troubleshooting",
    modulesCount: 5,
    completedModules: 3,
    estimatedMinutes: 35,
    difficulty: "Advanced",
    summary: "Tensioning rear roller bolts, speed sensor gap calibration (2-3mm), motor brush wear, and thermal cutoffs.",
    badge: "Hardware Specialist"
  },
  {
    id: "LP-03",
    title: "Apex IronRack V2: Concrete Anchor Bolting & Cable Rigging",
    product: "Power Racks",
    track: "Installation",
    modulesCount: 4,
    completedModules: 3,
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    summary: "High-low cable routing sequence, pulley keeper pins, 65 ft-lb bolt torque specs, and masonry wedge anchors.",
    badge: "Rigging Specialist"
  },
  {
    id: "LP-04",
    title: "SmartDial 50: Planetary Gear Mechanism & Jam Remediation",
    product: "Adjustable Dumbbells",
    track: "Troubleshooting",
    modulesCount: 4,
    completedModules: 2,
    estimatedMinutes: 20,
    difficulty: "Intermediate",
    summary: "Cradle base interlock pin depression, dislodged plate detection, cam gear disassembly, and replacement dispatch.",
    badge: "Selector Technician"
  },
  {
    id: "LP-05",
    title: "HydroRow Apex R-500: Water Chemistry & Bluetooth FTMS Sensor Setup",
    product: "Rowing Machines",
    track: "Installation & Maintenance",
    modulesCount: 3,
    completedModules: 1,
    estimatedMinutes: 20,
    difficulty: "Beginner",
    summary: "Siphon pump procedures, sodium dichlor tablet bi-annual schedule, and Apple Watch GymKit NFC handshake.",
    badge: "Fluid & Sensor Tech"
  }
];

export const KNOWLEDGE_GAPS = [
  {
    id: "GAP-01",
    topic: "HydroRow R-500: Winter unheated garage storage & liquid tank freeze risks",
    product: "Rowing Machines",
    ticketCount: 14,
    urgency: "High",
    status: "Drafting in Progress",
    assignedTo: "Kenji Sato",
    lastReported: "2 days ago"
  },
  {
    id: "GAP-02",
    topic: "CadenceSpin C7: Third-party Zwift sensor calibration without ANT+ PC dongle",
    product: "Exercise Bikes",
    ticketCount: 11,
    urgency: "Medium",
    status: "Review Pending",
    assignedTo: "Elena Rostova",
    lastReported: "Yesterday"
  },
  {
    id: "GAP-03",
    topic: "Power Rack V2: Low-ceiling chin-up bar inverted mounting clearance calculations",
    product: "Power Racks",
    ticketCount: 9,
    urgency: "Medium",
    status: "Unassigned",
    assignedTo: "Unassigned",
    lastReported: "4 days ago"
  },
  {
    id: "GAP-04",
    topic: "Olympic Barbells: High-humidity coastal gym rust prevention without stripping black oxide",
    product: "Weight Training",
    ticketCount: 7,
    urgency: "Low",
    status: "Unassigned",
    assignedTo: "Unassigned",
    lastReported: "5 days ago"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "A customer reports their Horizon-Glide T800 treadmill belt is drifting to the LEFT side during use. According to the approved troubleshooting protocol, what is the correct first adjustment?",
    options: [
      "Loosen the right rear roller bolt by 2 full turns.",
      "Turn the left rear roller adjustment bolt clockwise 1/4 turn with the 6mm Allen key.",
      "Immediately apply 50ml of motor oil under the right side of the deck.",
      "Turn the front motor drive pulley counter-clockwise."
    ],
    correctAnswer: 1,
    sourceArticle: "KB-TRB-101",
    explanation: "Per Technical Bulletin KB-TRB-101, if the belt drifts LEFT, turn the left rear bolt clockwise 1/4 turn while running at 3.5 mph to re-center the tracking. Never loosen by full turns or use motor oil."
  },
  {
    id: 2,
    question: "A customer wants to return SmartDial 50 Dumbbells on Day 45 because the selector dial is jammed. Standard policy is 30 days. How should the rep handle this per internal policy memo #TK-9104?",
    options: [
      "Strictly deny the return and state that all warranties expire at 30 days.",
      "Charge a 25% restocking fee and have the customer pay $150 freight.",
      "Authorize the return under the #TK-9104 policy extension for selector dial defects (up to 60 days) and waive return freight.",
      "Tell the customer to use channel lock pliers to force the gear free."
    ],
    correctAnswer: 2,
    sourceArticle: "KB-POL-102",
    explanation: "Per policy conflict memo #TK-9104 noted in KB-POL-102, Tier 2 agents are authorized to extend return eligibility up to 60 days with waived return shipping specifically for mechanical gear jams on SmartDial 50."
  },
  {
    id: 3,
    question: "What is the mandatory gap tolerance between the optical speed sensor probe and the front roller magnet on the Horizon-Glide T800 to prevent Error E-01?",
    options: [
      "8mm to 10mm (approximately the thickness of a smartphone)",
      "2mm to 3mm (approximately the thickness of a nickel)",
      "0.1mm (touching with friction)",
      "Any distance as long as Bluetooth is turned on"
    ],
    correctAnswer: 1,
    sourceArticle: "KB-TRB-105",
    explanation: "Per Bulletin KB-TRB-105, the reed/optical sensor must be spaced exactly 2mm to 3mm (the thickness of a nickel) from the front roller pulley magnet to register RPM pulses and prevent E-01 halts."
  }
];

export const REPORTING_DATA = {
  stats: {
    totalTicketsReviewed: 2840,
    articlesPublished: 42,
    escalationRate: "4.2%",
    escalationTrend: "-1.1% vs last month",
    averageConfidence: "94.6%",
    confidenceTrend: "+3.2% vs last month",
    aiDeflectionRate: "68.4%",
    avgFirstResponseTime: "11.4 min"
  },
  frequentQuestions: [
    { topic: "Treadmill Belt Slippage", count: 420, category: "Treadmills" },
    { topic: "Dumbbell Dial Jam", count: 360, category: "Dumbbells" },
    { topic: "Apple Watch / BLE Sync", count: 310, category: "Rowing" },
    { topic: "Power Rack Cable Rigging", count: 280, category: "Power Racks" },
    { topic: "Bike Resistance Calibration", count: 240, category: "Bikes" },
    { topic: "Return Policy & Freight Fees", count: 190, category: "Policy" }
  ],
  topicsEscalated: [
    { name: "Stuck Dumbbell Mechanism", value: 34, color: "#f59e0b" },
    { name: "Motor PCB Error E-01", value: 28, color: "#ef4444" },
    { name: "Damaged Freight Delivery", value: 22, color: "#6366f1" },
    { name: "Custom Rigging / Anchoring", value: 16, color: "#10b981" }
  ],
  firstResponseTimeTrend: [
    { week: "Week 1", frtMinutes: 44.2, resolutionHours: 18.5 },
    { week: "Week 2", frtMinutes: 38.0, resolutionHours: 15.2 },
    { week: "Week 3", frtMinutes: 27.5, resolutionHours: 11.4 },
    { week: "Week 4", frtMinutes: 21.0, resolutionHours: 8.9 },
    { week: "Week 5", frtMinutes: 14.8, resolutionHours: 6.2 },
    { week: "Week 6", frtMinutes: 11.4, resolutionHours: 4.8 }
  ],
  mostUsedArticles: [
    { id: "KB-TRB-101", title: "Treadmill Deck Lubrication & Belt Tensioning", uses: 684, rating: "98%", deflections: 520 },
    { id: "KB-TRB-103", title: "SmartDial 50: Stuck Selector Mechanism", uses: 512, rating: "94%", deflections: 390 },
    { id: "KB-INS-204", title: "Power Rack V2: Crossbar Pulley Assembly", uses: 448, rating: "96%", deflections: 340 },
    { id: "KB-CMP-301", title: "HydroRow Apex R-500: Bluetooth & Apple Watch", uses: 395, rating: "99%", deflections: 310 },
    { id: "KB-POL-102", title: "30-Day Return & Restocking Fee Policy", uses: 320, rating: "91%", deflections: 240 }
  ]
};

// Keyword Matching and Reply Generation Engine
export function findSuggestedReply(query, articles) {
  if (!query || !query.trim()) {
    return null;
  }

  const normalized = query.toLowerCase().trim();
  const tokens = normalized.split(/\W+/).filter(t => t.length > 2);

  // Score articles
  const scored = articles.map(art => {
    let score = 0;
    const artText = (art.title + " " + art.summary + " " + (art.tags || []).join(" ") + " " + art.product + " " + art.topic + " " + art.body).toLowerCase();

    // Exact phrase in title/tags
    if (art.title.toLowerCase().includes(normalized)) score += 50;
    if ((art.tags || []).some(t => normalized.includes(t))) score += 30;

    // Token frequency matching
    tokens.forEach(tok => {
      if (art.title.toLowerCase().includes(tok)) score += 18;
      if ((art.tags || []).some(t => t.toLowerCase().includes(tok))) score += 15;
      if (art.summary.toLowerCase().includes(tok)) score += 10;
      if (art.body.toLowerCase().includes(tok)) score += 4;
    });

    return { article: art, score };
  }).sort((a, b) => b.score - a.score);

  const topMatches = scored.filter(s => s.score > 15);
  const best = topMatches[0];

  if (!best || best.score < 25) {
    return {
      confidence: "Low",
      confidenceBadgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      confidenceReason: "Low confidence: No approved technical bulletins or policy articles matched this query. Recommended for human Tier 2 engineering escalation.",
      needsEscalation: true,
      sources: [],
      suggestedText: `Hi there,\n\nThank you for reaching out to ApexFit Customer Support. We have received your inquiry regarding:\n"${query}"\n\nBecause this appears to be a specialized hardware or non-standard configuration request, I have escalated your ticket directly to our Senior Hardware Engineering team for review. A senior technician will follow up with detailed guidance within 2 to 4 business hours.\n\nWarm regards,\nCustomer Operations Support\nApexFit Equipment Co.`
    };
  }

  const isHigh = best.score >= 50;
  const confidence = isHigh ? "High" : "Medium";
  const confidenceBadgeColor = isHigh 
    ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
    : "bg-amber-50 text-amber-700 border-amber-200";
  
  const sources = topMatches.slice(0, 3).map(m => m.article);

  // Generate tailored suggested text based on best matching article
  let customResponse = "";
  const art = best.article;

  if (art.id === "KB-TRB-101") {
    customResponse = `Hi [Customer Name],\n\nThanks for reaching out! Treadmill belt tracking issues are very common after initial break-in and can be easily adjusted in just a couple of minutes.\n\nHere is the recommended step-by-step fix from our engineering team:\n\n1. Center the Tracking:\n   - If the belt is drifting to the LEFT: Insert the 6mm Allen key into the left rear roller bolt and turn it CLOCKWISE 1/4 turn.\n   - If drifting to the RIGHT: Turn the right rear bolt CLOCKWISE 1/4 turn.\n   - Run the treadmill at 3.5 mph (empty) for 60 seconds to observe tracking, repeating in 1/4 turns until centered.\n\n2. Prevent Slippage & Hesitation:\n   - If the belt pauses under your foot, the tension is slightly loose. Turn BOTH rear bolts clockwise 1/4 turn simultaneously.\n   - Check deck lubrication: Touch under the center of the belt. If dry, apply 10-15 ml of 100% pure silicone lubricant (never WD-40).\n\nPlease let us know if you'd like us to hop on a quick video diagnostic or if you need fresh silicone sent your way!\n\nBest regards,\n[Your Name] | ApexFit Support Operations`;
  } else if (art.id === "KB-INS-204") {
    customResponse = `Hi [Customer Name],\n\nHappy to help with your Power Rack V2 assembly! The crossbar and upper pulley system are engineered for high-tension cable glide, and following the exact sequence ensures smooth operation.\n\nKey Assembly Guidelines:\n1. Upper Crossbeam: Position between posts #1 and #2. Hand-tighten the M12 x 85mm hex bolts with zinc washers—leave 1-2mm play until the entire rack is squared.\n2. Pulley Housing: Ensure the protective cable keeper pin sits underneath the pulley groove to prevent cable jump.\n3. Cable Threading: Thread the 7x19 aircraft cable from the front ball stop down through the floating double bracket and secure the rear eyelet with the locking carabiner.\n4. Final Torque: Tighten all M12 frame bolts to 65 ft-lbs (88 Nm).\n\nIf any hardware bag feels tight or you need a replacement nylon pulley wheel, let us know and we'll dispatch it immediately!\n\nBest regards,\n[Your Name] | ApexFit Support Operations`;
  } else if (art.id === "KB-POL-102") {
    customResponse = `Hi [Customer Name],\n\nThank you for contacting us regarding your SmartDial 50 Dumbbells. While our standard return window is 30 days, we have an active technical waiver (Policy Memo #TK-9104) that protects you!\n\nUnder this policy, when a customer experiences a mechanical selector dial jam within 60 days of delivery, we waive the standard freight fee and offer either:\n1. A completely free prepaid courier return for a 100% full refund, OR\n2. An expedited replacement of the dumbbell handle core with reinforced planetary cams dispatched via 2-Day Air.\n\nBefore initiating the return, would you like to try the 30-second cradle reset pin procedure? If you prefer to proceed with the return, simply reply to confirm and I will email your prepaid return shipping label right away.\n\nWarm regards,\n[Your Name] | ApexFit Customer Operations`;
  } else if (art.id === "KB-CMP-301") {
    customResponse = `Hi [Customer Name],\n\nThanks for reaching out! The HydroRow Apex R-500 is fully compatible with Apple Watch via both GymKit NFC and Bluetooth FTMS (Fitness Machine Service).\n\nHere is how to connect in seconds:\n1. Wake the R-500 console by taking 2 full strokes.\n2. Open the Workout app on your Apple Watch (watchOS 8.0+ required) and select 'Rower'.\n3. Tap the (...) icon and hold your watch face within 2 inches of the NFC logo on the upper right corner of the console until it buzzes.\n4. If NFC does not trigger: Go to Apple Watch Settings > Bluetooth > Health Devices, and tap 'Apex-R500' to sync your live heart rate.\n\nLet us know if you encounter any disconnects during high-intensity splits!\n\nBest regards,\n[Your Name] | ApexFit Support Operations`;
  } else if (art.id === "KB-CMP-302") {
    customResponse = `Hi [Customer Name],\n\nThanks for asking before ordering! All ApexFit barbells and Power Rack storage horns are built to Olympic standard specifications with 50mm (2-inch) diameter sleeves.\n\nBecause of this, standard 1-inch (25mm) weight plates will not fit over our Olympic sleeves.\n\nHowever, if you have existing 1-inch plates you want to use on our cable weight trolley, you can use our 1-to-2-Inch Heavy Duty Sleeve Adapter (Part #ADP-OLY-10), which slips over the pegs so both sizes fit securely. Please never attempt to bore out cast iron plates as that compromises structural integrity.\n\nLet me know if you'd like me to add an adapter set to your order!\n\nBest regards,\n[Your Name] | ApexFit Support Operations`;
  } else {
    customResponse = `Hi [Customer Name],\n\nThank you for reaching out to ApexFit Customer Support regarding your ${art.product}.\n\nBased on our approved technical bulletin (${art.title}):\n\n${art.summary}\n\nKey Steps:\n${art.body.split('\n\n').slice(0, 2).join('\n\n')}\n\nPlease don't hesitate to reach back out if you have any questions or if you'd like us to assist with replacement parts.\n\nWarm regards,\n[Your Name] | ApexFit Support Operations`;
  }

  const reason = isHigh
    ? `High confidence: Direct match with approved bulletin ${art.id} ("${art.title}") and verified technical specs.`
    : `Medium confidence: Matched keyword patterns in ${art.id}. Please verify specific model batch before sending.`;

  return {
    confidence,
    confidenceBadgeColor,
    confidenceReason: reason,
    needsEscalation: false,
    sources,
    suggestedText: customResponse
  };
}
