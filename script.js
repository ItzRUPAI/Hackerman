let output = document.getElementById("output");

let messages = [
"Initializing system...",
"Bypassing firewall...",
"Connecting to satellite...",
"Server found: 192.168.0.1",
"Access granted...SYSTEM GLITCH DETECTED>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS",
"Loading exploit module...",
"Scanning network...",
"Devices found: 12",
"Extracting data packets...",
"Decrypting files... SYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS",
"Password brute force started...",
"Password found: ********",
"Logging into admin panel...",
"Accessing database...",
"Downloading user data...SYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: Failed",
"Encrypting connection...",
"Masking IP address...",
"Tracing location...",
"Location found...",
"Stealing cookies...SYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: Failed",
"Injecting payload...",
"Running malware simulation...",
"Firewall disabled...",
"Security level: LOWSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS",
"Accessing camera feed...",
"Microphone enabled...",
"System override active...",
"Root access granted...",
"Bypassing antivirus... SYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS",
"Accessing hidden files...",
"Cracking encryption layer 1...",
"Cracking encryption layer 2...",
"Cracking encryption layer 3...",
"Accessing dark web nodes...",
"Connecting to proxy chain...",
"Data extraction in progress...",
"Uploading results...",
"System logs erased... SYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: Failed",
"Admin notified: FALSE",
"Security breach detected...",
"Ignoring alerts...",
"System control taken...",
"All files unlocked...",
"Security level: LOWSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS",
"Firewall re-enabled (fake)...",
"Tracing stopped...",
"Finalizing hack...",
"Cleaning traces...",
"Almost complete...",
"Security level: LOWSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESSSYSTEM GLITCH DETECTED>>> TRACE STATUS: SUCCESS"
];

let i = 0;
let lines = [];
let MAX_LINES = 250;

// long system line
function longLine() {
    let id = Math.floor(100000 + Math.random() * 900000);

    return `
>>> SYSTEM_CORE_PACKET_${id}
>>> MEMORY_DUMP: 0x${Math.random().toString(16).slice(2,10)}
>>> NETWORK_FLOW: STABLE
>>> ENCRYPTION_LEVEL: AES-256 (SIMULATED)
>>> FIREWALL_LAYER: ACTIVE
>>> AI_MONITOR: RUNNING
>>> TRACE_LEVEL: LOW
`;
}

// error line
function errorLine() {
    let code = Math.floor(10000 + Math.random() * 90000);
    let type = ["ERROR", "WARN", "FAIL", "NULL", "CRASH"][Math.floor(Math.random()*5)];

    return `>>> ${type}_${code} SYSTEM GLITCH DETECTED`;
}

// render function (FAST)
function render() {
    output.innerText = lines.join("\n");
    window.scrollTo(0, document.body.scrollHeight);
}

// main loop
function loop() {

    let msg = messages[i % messages.length];

    lines.push(msg);

    if (i % 2 === 0) {
        lines.push(errorLine());
    }

    if (i % 10 === 0 && i !== 0) {
        lines.push(longLine());
    }

    // 🔥 prevent lag
    if (lines.length > MAX_LINES) {
        lines.splice(0, lines.length - MAX_LINES);
    }

    i++;

    render();

    setTimeout(loop, 30);
}

loop();
